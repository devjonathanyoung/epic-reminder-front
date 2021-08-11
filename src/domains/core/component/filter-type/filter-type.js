import React from "react";
import "./filter-type.scss";

const FilterType = ({ handleType }) => {  
	const typesReminder = ["book", "game", "movie", "all"];
    
	return (
		<div className="reminder-type">
			{typesReminder.length ? (typesReminder.map((type, index) => {
				return (<div key={index} onClick={() => handleType(type)} className="reminder-type__filter" >{type}</div>);
			})) : ""}
		</div>
	);
};

export default FilterType;
