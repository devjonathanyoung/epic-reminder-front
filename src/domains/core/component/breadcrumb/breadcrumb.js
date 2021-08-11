import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.scss"; 

const Breadcrumb = ({ to, path, page }) => {
	return (
		<div>
			<Link className="reminder__breadcrumb" to={to}>{path} </Link>{page}
		</div>
	);
};

export default Breadcrumb;