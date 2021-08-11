import React from "react";
import "./sidebar.scss";

const Sidebar = ({ children }) => {  
	return (
		<aside className="sidebar">
			<div className="sidebar__side-nav">
		 		{children}
			</div>
		</aside>
	);
};

export default Sidebar;
