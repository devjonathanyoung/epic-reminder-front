import React, { useState }  from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../core/assets/img/logo_large.png";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import useModal from "../../../core/component/custom-hooks/use-modal.js";
import Toast from "../../../core/component/toast/toast";
import "./sign-in-page.scss";
import SignInForm from "../../component/sign-in-form";
import SignUpForm from "../../component/sign-up-form";

const SignInPage = () => {
	const [form, setForm] = useState({ userName: "", password:"" });
	const [signUpMode, setSignUpClass ] = useState(true);
	const { ModalWrapper, open, close } = useModal();
	const { t } = useTranslation();

	const handleChange = (e) => {
		const newValue = e.target.value;
		setForm({ ...form, [e.target.name]: newValue });
	};

	const toggleSignForm = () => {
		setSignUpClass(!signUpMode);
		setForm({ userName: "", firstName: "", lastName:"", password:"", confirmedPassword: "" });
	};

	return (
		<div className="sign-in-page">
			<ModalWrapper>
				<Toast autoDelete autoDeleteTime={5000} close={close}/>
			</ModalWrapper>
			<img src={logo} alt="reminder poster" className="sign-in-page__logo"/>
			<div className="sign-main-container">

				<div className="container">
					<h1>{signUpMode ? t("user:sign.in.btn"): t("user:sign.up.btn")}</h1>
			
					{signUpMode && 
					<SignInForm
						handleChange={handleChange}
						form={form}
						setForm={setForm}
					/>}
					{!signUpMode && 
					<SignUpForm
						handleChange={handleChange}
						form={form}
						setForm={setForm}
						open={open}
					/>}
				</div>

				<div className={`container ${signUpMode ? "sign-up": "sign-in"}`}>
					<h1>{signUpMode ? t("user:sign.up.container-title") : t("user:sign.in.container-title")}</h1>
					<div className="message" >
						{signUpMode ? t("user:sign.up.message"):
							t("user:sign.in.message")
						}
					</div>
					<ReminderBtn className="toggle-btn" onClick={toggleSignForm} dark>
						{signUpMode ? t("user:sign.up.btn"): t("user:sign.in.btn")}
					</ReminderBtn>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
