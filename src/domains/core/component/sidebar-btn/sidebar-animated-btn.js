import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./sidebar-btn.scss";

const AnimatedBtn = ({ handleSortName, handleSortDate }) => {
	const { t } = useTranslation();

	return (
		<div>
	        <div className="sidebar__btn">
		        <Link to="/#" className="sidebar__btn-link" onClick={handleSortName}>{t("reminder:sort.name")}</Link>
			</div>
            
	        <div className="sidebar__btn">
		        <Link to="/#" className="sidebar__btn-link" onClick={handleSortDate}>{t("reminder:sort.date")}</Link>
			</div>
		</div>
	);
};

export default AnimatedBtn;