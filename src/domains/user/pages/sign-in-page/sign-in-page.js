import React, { useState, useEffect }  from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../../img/logo_large.png";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import "./sign-in-page.scss";

const SignInPage = () => {
	const [form, setForm] = useState({ firstName: "", password:"" });
	const [formValid, setFormValid] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [signUpClass, setSignUpClass ] = useState(true);
	const { t } = useTranslation();

	const handleChange = (e, fieldName) => {
		const newValue = e.target.value;
		setForm({ ...form, [fieldName]: newValue });
	};

	const alphabeticRegexAndDash = /[a-zA-Z\-']+$/i;

	const validateInputNames = (value, regex) => {
		const valueEmpty = !value || value === "";
		const validRegex = regex.test(value);
		return valueEmpty || validRegex;
	};

	const validateSignUpPassword = () => {
		// the 2 passwords fields must be identicals
		return form.password === form.confirmedPassword;
	};

	const formValidation = () => {
		if(signUpClass) {
			setFormValid(form.firstName && form.password);
		} else {
			setFormValid(form.firstName && form.lastName && form.password && form.confirmedPassword && validateSignUpPassword());
		}
	};

	const handleBlur = () => {
		setHasError(!validateSignUpPassword());
	};

	const handleKeyPress = (e) => {
		if (validateInputNames && !validateInputNames(e.key, alphabeticRegexAndDash)) {
			e.preventDefault();
		}
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		// API getUser pour vérifier que les ids correspondent bien à cx en BDD
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		// API createUser
	};

	const toggleSignForm = () => {
		setSignUpClass(!signUpClass);
		setForm({ firstName: "", lastName:"", password:"", confirmedPassword: "" });
	};

	useEffect(formValidation, [form, formValidation]);

	return (
		<div className="sign-in-page">
			<img src={logo} alt="reminder poster" className="sign-in-page__logo"/>
			<div className="sign-main-container">

				<div className="container">
					<h1>{signUpClass ? t("user:sign.in.btn"): t("user:sign.up.btn")}</h1>
					<form className="container__form" onSubmit={signUpClass ? handleSignIn : handleSignUp}>
						<input 
							className="container__form__field"
							placeholder="First name"
							onChange={(e, fieldName) => handleChange(e, fieldName = "firstName")}
							value={form.firstName}
							onKeyPress={handleKeyPress}
						/>
						{!signUpClass && <input 
							className="container__form__field"
							placeholder="Last name"
							onChange={(e, fieldName) => handleChange(e, fieldName = "lastName")}
							value={form.lastName}
							onKeyPress={handleKeyPress}
						/>}
						<input 
							type="password"
							className="container__form__field"
							placeholder="Password"
							onChange={(e, fieldName) => handleChange(e, fieldName = "password")}
							value={form.password}
						/>
						{!signUpClass && <input 
							type="password"
							className={`container__form__field ${hasError ? "field-error": ""}`}
							placeholder="Confirm Password"
							onChange={(e, fieldName) => handleChange(e, fieldName = "confirmedPassword")}
							value={form.confirmedPassword}
							onBlur={handleBlur}
						/>}
						<div className="container__form__error">{hasError ? t("user:sign.password-error") : ""}</div>
						<ReminderBtn type="submit" disabled={!formValid}>{t("user:sign.submit-btn")}</ReminderBtn>
					</form>
				</div>

				<div className={`container ${signUpClass ? "sign-up": "sign-in"}`}>
					<h1>{signUpClass ? t("user:sign.up.container-title") : t("user:sign.in.container-title")}</h1>
					<div className="message" >
						{signUpClass ? t("user:sign.up.message"): 
							t("user:sign.in.message")
						}
					</div>
					<ReminderBtn className="toggle-btn" onClick={toggleSignForm} dark>
						{signUpClass ? t("user:sign.up.btn"): t("user:sign.in.btn")}
					</ReminderBtn>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;