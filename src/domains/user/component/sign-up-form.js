import React, { useState, useEffect }  from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import createUser from "../services/create-user";
import getUserByUsername from "../services/get-user-by-username";
import ReminderBtn from "../../reminder/component/reminder-btn/reminder-btn";


const SignUpForm = (props) => {
	const { handleChange, form, open } = props;
	const { t } = useTranslation();
	const history = useHistory();
	const [formValid, setFormValid] = useState(false);
	const [pswdNotIdentical, setPswdNotIdentical] = useState(false);
	const [existingUsername, setExistingUsername] = useState(false);

	const alphabeticRegexAndDash = /[a-zA-Z\-']+$/i;

	const validateInputNames = (value, regex) => {
		const valueEmpty = !value || value === "";
		const validRegex = regex.test(value);
		return valueEmpty || validRegex;
	};

	const checkUsernameExist = (newUserName) => {
		getUserByUsername(newUserName)
			.then((existingUser) => setExistingUsername(!!existingUser))
			.catch((error) => {
				open();
				console.error(error);
			});
	};

	const validateSignUpPassword = () => {
		// the 2 passwords fields must be identicals
		return form.password === form.confirmedPassword;
	};

	const handleBlur = () => {
		setPswdNotIdentical(!validateSignUpPassword());
	};

	const handleKeyPress = (e) => {
		if (validateInputNames && !validateInputNames(e.key, alphabeticRegexAndDash)) {
			e.preventDefault();
		}
	};

	const formValidation = () => {
		setFormValid(form.userName && form.firstName && form.lastName 
			&& form.password && form.confirmedPassword && validateSignUpPassword() && !existingUsername);
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

	useEffect(formValidation, [form, formValidation]);


	return (
		<form className="container__form" onSubmit={handleSignUp}>
			<input
				className={`container__form__field ${existingUsername ? "field-error": ""}`}
				placeholder={t("user:sign.fields.username")}
				name="userName"
				onChange={handleChange}
				value={form.userName}
				onBlur={() => checkUsernameExist(form.userName)}
			/>
			<input
				className="container__form__field"
				placeholder={t("user:sign.fields.firstname")}
				name="firstName"
				onChange={handleChange}
				value={form.firstName}
				onKeyPress={handleKeyPress}
			/>
			<input
				className="container__form__field"
				placeholder={t("user:sign.fields.lastname")}
				name="lastName"
				onChange={handleChange}
				value={form.lastName}
				onKeyPress={handleKeyPress}
			/>
			<input
				type="password"
				className="container__form__field"
				placeholder={t("user:sign.fields.password")}
				name="password"
				onChange={handleChange}
				value={form.password}
			/>
			<input
				type="password"
				className={`container__form__field ${pswdNotIdentical ? "field-error": ""}`}
				placeholder={t("user:sign.fields.confirm-password")}
				name="confirmedPassword"
				onChange={handleChange}
				value={form.confirmedPassword}
				onBlur={handleBlur}
			/>
			<div className="container__form__error">
				{pswdNotIdentical && t("user:sign.password-identical")}
				{existingUsername && t("user:sign.username-error")}
			</div>
			<ReminderBtn type="submit" disabled={!formValid}>{t("user:sign.submit-btn")}</ReminderBtn>
		</form>
	);
};

export default SignUpForm;	


// TODO: reste à mettre les formValidation dans chacun des composants respectifs. 
// car les formulaires marchent comme ça