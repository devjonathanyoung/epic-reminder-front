import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo_large.png";
import userImg from "../../assets/img/Jon_Snow.png";
import { AuthContext } from "../../../user/auth/auth-context.js";
import { logout } from "../../../user/auth/auth-services.js";
import "./top-navigation.scss";

const TopNavigation = ({ children }) => {
	const { user } = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {
		logout()
			.then(() => history.push("/sign-in"))
			.catch(() => history.push("/"));
	};

	return (
		<header className="top-navigation">
			<Link to={"/"}>
				<img src={logo} alt="reminder poster" className="top-navigation__logo"/>
			</Link>
			{ children }
			<div onClick={handleLogout} className="top-navigation__user-infos">
				<img src={userImg} alt="user-profile" className="top-navigation__user-infos__img"/>
				<div className="top-navigation__user-infos__img">{`Welcome ${user.firstname}`}</div>
			</div>
		</header>
	);
};

export default TopNavigation;
