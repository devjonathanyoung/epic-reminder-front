import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../img/logo_large.png";
import user from "../../../../img/Jon_Snow.png";
import "./top-navigation.scss";
import "../../../core/theme/reset.scss";

const TopNavigation = ({ children }) => {
	return (
		<header className="top-navigation">
			<Link to={"/"}><img src={logo} alt="reminder poster" className="top-navigation__logo"/></Link>
			{ children }
			<img src={user} alt="user profile" className="top-navigation__user" />
		</header>
	);
};

export default TopNavigation;
