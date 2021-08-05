import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import "../../../core/theme/reset.scss";

const Sidebar = ({ handleSortName, handleSortDate, handleType }) => {    
	const typesReminder = ["book", "game", "movie", "all"];

	return (
		<aside className="sidebar">
			<ul className="side-nav">
		 <li className="side-nav__sort side-nav__sort--active">
			 <Link className="side-nav__link" to="/reminder/create">Add a new reminder</Link>
				</li>
		 <li className="side-nav__sort">
			 <Link className="side-nav__link" onClick={handleSortName}>Sort by name</Link>
				</li>
		 <li className="side-nav__sort">
			 <Link className="side-nav__link" onClick={handleSortDate}>Sort by date</Link>
				</li>
			</ul>

			<ul className="side-nav__filter">
				{typesReminder.length ? (typesReminder.map((type, index) => {
					return (<li key={index} onClick={() => handleType(type)} className="side-nav__filter--item" >{type}</li>);
				})) : ""}
			</ul>
		</aside>
	);
};

export default Sidebar;
