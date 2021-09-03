import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo_large.png";
import userImg from "../../assets/img/Jon_Snow.png";
import { AuthContext } from "../../../user/auth/auth-context.js";
import { logout } from "../../../user/auth/auth-services.js";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import useOnClickOutside from "../custom-hooks/use-on-click-outside.js";
import "./top-navigation.scss";

const TopNavigation = ({ children }) => {
	const { user } = useContext(AuthContext);
	const history = useHistory();

	const menuRef = useRef();
	const [ showMenu, setShowMenu ] = useState(false);
	useOnClickOutside(menuRef, () => setShowMenu(false));

	const handleLogout = () => {
		logout()
			.then(() => history.push("/sign-in"))
			.catch(() => history.push("/"));
	};
	
	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<header className="top-navigation">
			<Link to={"/"}>
				<img src={logo} alt="reminder poster" className="top-navigation__logo"/>
			</Link>
			{ children }
			<div onClick={toggleMenu} className="top-navigation__user-infos" ref={menuRef}>
				<img src={userImg} alt="user-profile" className="top-navigation__user-infos__img"/>
				<div className="top-navigation__user-infos__img">{`Welcome ${user.firstname}`}</div>
				<ReminderBtn 
					className={`menu-logout ${showMenu ? "display-menu" : ""}`}
				 	onClick={handleLogout}
				>
					Logout
				</ReminderBtn>
			</div>
		</header>
	);
};

export default TopNavigation;
