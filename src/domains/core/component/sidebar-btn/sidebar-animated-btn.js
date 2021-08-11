import React from "react";
import { Link } from "react-router-dom";
import "./sidebar-btn.scss";

const AnimatedBtn = ({ handleSortName, handleSortDate }) => {
	return (
		<div>
	        <div className="sidebar__btn">
		        <Link className="sidebar__btn-link" onClick={handleSortName}>Sort by name</Link>
			</div>
            
	        <div className="sidebar__btn">
		        <Link className="sidebar__btn-link" onClick={handleSortDate}>Sort by date</Link>
			</div>
		</div>
	);
};

export default AnimatedBtn;