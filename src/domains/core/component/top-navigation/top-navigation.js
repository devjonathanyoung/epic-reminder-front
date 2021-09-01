import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_large.png";
import userImg from "../../assets/img/Jon_Snow.png";
import { AuthContext } from "../../../user/auth/auth-context.js";
import "./top-navigation.scss";

const TopNavigation = ({ children }) => {
	const { user } = useContext(AuthContext);
	return (
		<header className="top-navigation">
			<Link to={"/"}>
				<img src={logo} alt="reminder poster" className="top-navigation__logo"/>
			</Link>
			{ children }
			<Link to={"/sign-in"}>
				<img src={userImg} alt="user-profile" className="top-navigation__user"/>
				<div>{`Welcome ${user.firstname}`}</div>
			</Link>
		</header>
	);
};

export default TopNavigation;
