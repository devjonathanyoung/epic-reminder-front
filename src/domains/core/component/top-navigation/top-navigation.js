import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_large.png";
import user from "../../assets/img/Jon_Snow.png";
import "./top-navigation.scss";

const TopNavigation = ({ children }) => {
	return (
		<header className="top-navigation">
			<Link to={"/"}>
				<img src={logo} alt="reminder poster" className="top-navigation__logo"/>
			</Link>
			{ children }
			<Link to={"/sign-in"}>
				<img src={user} alt="user-profile" className="top-navigation__user"/>
			</Link>
		</header>
	);
};

export default TopNavigation;
