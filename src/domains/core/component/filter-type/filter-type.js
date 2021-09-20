import React from "react";
import { useTranslation } from "react-i18next";
import "./filter-type.scss";

const FilterType = ({ handleType }) => {  
	const typesReminder = ["book", "game", "movie", "all"];
	const { t } = useTranslation();
    
	return (
		<div className="reminder-type">
			{typesReminder.length ? (typesReminder.map((type, index) => {
				return (<div key={index} onClick={() => handleType(type)} className="reminder-type__filter" >{t(`reminder:type.${type}`)}</div>);
			})) : ""}
		</div>
	);
};

export default FilterType;
