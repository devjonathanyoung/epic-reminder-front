import React from "react";
import { Link } from "react-router-dom";
import "./sidebar-btn.scss";

const ActiveBtn = ({ to, value }) => {    
	return (
		 <div className="sidebar__btn sidebar__btn--active">
			 <Link className="sidebar__btn-link" to={to}>{value}</Link>
		</div>
	);
};

export default ActiveBtn;