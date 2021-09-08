import React, { useState, useEffect }  from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../../core/assets/img/logo_large.png";
import ReminderBtn from "../../../reminder/component/reminder-btn/reminder-btn";
import createUser from "../../services/create-user";
import userLogin from "../../services/user-login";
import getUserByUsername from "../../services/get-user-by-username";
import "./sign-in-page.scss";

const SignInPage = () => {
	const [form, setForm] = useState({ userName: "", password:"" });
	const [formValid, setFormValid] = useState(false);
	const [pswdNotIdentical, setPswdNotIdentical] = useState(false);
	const [existingUsername, setExistingUsername] = useState(false);
	const [wrongCredentials, setwrongCredentials] = useState(false);
	const [signUpClass, setSignUpClass ] = useState(true);
	const [networkError, setNetworkError] = useState(false);
	const history = useHistory();
	const { t } = useTranslation();

	const handleChange = (e) => {
		const newValue = e.target.value;
		setForm({ ...form, [e.target.name]: newValue });
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

	const checkUsernameExist = (newUserName) => {
		if(!signUpClass) {
			getUserByUsername(newUserName)
				.then((existingUser) => setExistingUsername(!!existingUser))
				.catch((error) => {
					// TODO: à afficher dans le toaster
					setNetworkError(!error);
					console.error(error);
				});
		}
	};

	const formValidation = () => {
		if(signUpClass) {
			setFormValid(form.userName && form.password);
		} else {
			setFormValid(form.userName && form.firstName && form.lastName && form.password && form.confirmedPassword && validateSignUpPassword() && !existingUsername);
		}
	};

	const handleBlur = () => {
		setPswdNotIdentical(!validateSignUpPassword());
	};

	const handleKeyPress = (e) => {
		if (validateInputNames && !validateInputNames(e.key, alphabeticRegexAndDash)) {
			e.preventDefault();
		}
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		userLogin(form)
			.then((res) => {
				if(res.error) {
					setwrongCredentials(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		createUser(form)
			.then(() => {
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const toggleSignForm = () => {
		setSignUpClass(!signUpClass);
		setForm({ userName: "", firstName: "", lastName:"", password:"", confirmedPassword: "" });
		setwrongCredentials(false);
		setExistingUsername(false);
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
							className={`container__form__field ${existingUsername || wrongCredentials ? "field-error": ""}`}
							placeholder={t("user:sign.fields.username")}
							name="userName"
							onChange={handleChange}
							value={form.userName}
							onBlur={() => checkUsernameExist(form.userName)}
						/>
						{!signUpClass && <input
							className="container__form__field"
							placeholder={t("user:sign.fields.firstname")}
							name="firstName"
							onChange={handleChange}
							value={form.firstName}
							onKeyPress={handleKeyPress}
						/>}
						{!signUpClass && <input
							className="container__form__field"
							placeholder={t("user:sign.fields.lastname")}
							name="lastName"
							onChange={handleChange}
							value={form.lastName}
							onKeyPress={handleKeyPress}
						/>}
						<input
							type="password"
							className={`container__form__field ${wrongCredentials ? "field-error": ""}`}
							placeholder={t("user:sign.fields.password")}
							name="password"
							onChange={handleChange}
							value={form.password}
						/>
						{!signUpClass && <input
							type="password"
							className={`container__form__field ${pswdNotIdentical ? "field-error": ""}`}
							placeholder={t("user:sign.fields.confirm-password")}
							name="confirmedPassword"
							onChange={handleChange}
							value={form.confirmedPassword}
							onBlur={handleBlur}
						/>}
						<div className="container__form__error">
							{pswdNotIdentical && t("user:sign.password-identical")}
							{wrongCredentials && t("user:sign.credentials-error")}
							{existingUsername && t("user:sign.username-error")}
						</div>
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
