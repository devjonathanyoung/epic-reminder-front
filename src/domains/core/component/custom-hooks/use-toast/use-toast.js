import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../../icon/icon.js";
import useModal from "../use-modal.js";
import "./use-toast.scss";


const useToast = () => {
	const { t } = useTranslation();
	const { ModalWrapper, open, close } = useModal();

	const handleClose = () => close();

	const Toast = (props) => {
		const { success, autoDeleteTime = 5000 } = props;
		
		useEffect(() => {
			const interval = setInterval(() => {
				if(autoDeleteTime) {
					close();
				}
			}, autoDeleteTime);
			return () => {
				clearInterval(interval);
			};
		}, [autoDeleteTime]);

		return (
			<ModalWrapper>
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
			</ModalWrapper>
	
		);
	};

	return {
		Toast, open, close
	};

};
export default useToast;