import React, { useState }  from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../core/assets/img/logo_large.png";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import useToast from "../../../core/component/custom-hooks/use-toast/use-toast";
import SignInForm from "../../component/sign-in-form";
import SignUpForm from "../../component/sign-up-form";
import "./sign-in-page.scss";

const SignInPage = () => {
	const [form, setForm] = useState({ userName: "", password:"" });
	const [signUpMode, setSignUpClass ] = useState(true);
	const { Toast, open, close } = useToast();
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
			<Toast close={close}/>
			<img src={logo} alt="reminder poster" className="sign-in-page__logo"/>
			<div className="sign-main-container">

				<div className="container">
					<h1>{signUpMode ? t("user:sign.in.btn"): t("user:sign.up.btn")}</h1>
			
					{signUpMode && 
					<SignInForm
						handleChange={handleChange}
						form={form}
						open={open}
					/>}
					{!signUpMode && 
					<SignUpForm
						handleChange={handleChange}
						form={form}
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
