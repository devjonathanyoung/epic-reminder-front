import React, { useState, useEffect }   from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import ReminderBtn from "../../reminder/component/reminder-btn/reminder-btn";
import userLogin from "../services/user-login";

const SignInForm = (props) => {
	const { handleChange, form } = props;
	const { t } = useTranslation();
	const history = useHistory();
	const [formValid, setFormValid] = useState(false);
	const [wrongCredentials, setwrongCredentials] = useState(false);

	const handleSignIn = (e) => {
		e.preventDefault();
		userLogin(form)
			.then((res) => {
				if(res.error) {
					setwrongCredentials(true);
				} else {
					history.push("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const formValidation = () => {
		setFormValid(form.userName && form.password);
	};

	useEffect(formValidation, [form, formValidation]);

	return (
		<form className="container__form" onSubmit={handleSignIn}>
			<input
				className={`container__form__field ${wrongCredentials ? "field-error": ""}`}
				placeholder={t("user:sign.fields.username")}
				name="userName"
				onChange={handleChange}
				value={form.userName}
			/>
			<input
				type="password"
				className={`container__form__field ${wrongCredentials ? "field-error": ""}`}
				placeholder={t("user:sign.fields.password")}
				name="password"
				onChange={handleChange}
				value={form.password}
			/>
			<div className="container__form__error">
				{wrongCredentials && t("user:sign.credentials-error")}
			</div>
			<ReminderBtn type="submit" disabled={!formValid}>{t("user:sign.submit-btn")}</ReminderBtn>
		</form>
	);
};

export default SignInForm;