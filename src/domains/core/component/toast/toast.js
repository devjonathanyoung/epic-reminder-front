import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../icon/icon.js";
import "./toast.scss";


const Toast = (props) => {
	const { success, autoDelete, autoDeleteTime, close } = props;
	const { t } = useTranslation();

	const handleClose = () => close();

	useEffect(() => {
		const interval = setInterval(() => {
			if(autoDelete) {
				close();
			}
		}, autoDeleteTime);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={`toast ${success ? "success" : ""}`}>
			<button className="toast__button" onClick={handleClose}>X</button>
			<div className="toast__title">
				<Icon name={`${success ? "check" : "fail"}`} className="toast__title__icon" />
				<div className="toast__title__text">
					{success ? t("core:toast.title.success") : t("core:toast.title.fail")}
				</div>
			</div>
			<div className="toast__message">
				{success ? t("core:toast.message.success") : t("core:toast.message.fail")}
			</div>
		</div>
	);
};
export default Toast;