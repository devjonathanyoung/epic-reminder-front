import React from "react";
import { useTranslation } from "react-i18next";
import "./filter-type.scss";

const FilterType = ({ handleType }) => {  
	const typesReminder = ["book", "game", "movie", "all"];
	const { t } = useTranslation();
    
	return (
		<div className="filter-types">
			{typesReminder.length ? (typesReminder.map((type, index) => {
				return (<div key={index} onClick={() => handleType(type)} className="sidebar__btn--basic" >{t(`reminder:type.${type}`)}</div>);
			})) : ""}
		</div>
	);
};

export default FilterType;
