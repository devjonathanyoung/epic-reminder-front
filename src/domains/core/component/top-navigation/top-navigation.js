import React, { useContext, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo_large.png";
import userImg from "../../assets/img/Jon_Snow.png";
import { AuthContext } from "../../../user/auth/auth-context.js";
import { logout } from "../../../user/auth/auth-services.js";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import useOnClickOutside from "../custom-hooks/use-on-click-outside.js";
import useModal from "../custom-hooks/use-modal.js";
import Toast from "../toast/toast";
import "./top-navigation.scss";

const TopNavigation = ({ children }) => {
	const { user } = useContext(AuthContext);
	const history = useHistory();
	const { t } = useTranslation();
	const { ModalWrapper, open, close } = useModal();

	const menuRef = useRef();
	const [ showMenu, setShowMenu ] = useState(false);
	useOnClickOutside(menuRef, () => setShowMenu(false));

	const handleLogout = () => {
		logout()
			.then(() => history.push("/sign-in"))
			.catch(() => open());
	};
	
	const toggleMenu = () => setShowMenu(!showMenu);
	
	return (
		<header className="top-navigation">
			<ModalWrapper>
				<Toast autoDelete autoDeleteTime={5000} close={close}/>
			</ModalWrapper>
			<Link to={"/"}>
				<img src={logo} alt="reminder poster" className="top-navigation__logo"/>
			</Link>
			{ children }
			<div onClick={toggleMenu} className="top-navigation__user-infos" ref={menuRef}>
				<img src={userImg} alt="user-profile" className="top-navigation__user-infos__img"/>
				<div className="top-navigation__user-infos__img">{`${t("core:top-navigation.welcome")} ${user.firstname}`}</div>
				<ReminderBtn 
					className={`menu-logout ${showMenu ? "display-menu" : ""}`}
				 	onClick={handleLogout}
				>
					{t("core:top-navigation.logout")}
				</ReminderBtn>
			</div>
		</header>
	);
};

export default TopNavigation;
