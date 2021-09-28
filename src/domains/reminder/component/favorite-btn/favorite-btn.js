import React from "react";
import { useTranslation } from "react-i18next";
import Icon from "../../../core/component/icon/icon";
import "./favorite-btn.scss";

const FavoriteBtn = (props) => {  
	const { showFav } = props;
	const { t } = useTranslation();
    
	return (
		<div className="sidebar__btn--basic fav-btn" onClick={showFav}>
			<span>{t("reminder:favorites.title")}</span>
			<Icon name="heart" className="fav-icon"/>
		</div>
	);
};

export default FavoriteBtn;