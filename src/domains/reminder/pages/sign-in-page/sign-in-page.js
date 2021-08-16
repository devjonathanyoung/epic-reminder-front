import React, { useState }  from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../../img/logo_large.png";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import "./sign-in-page.scss";

const SignInPage = () => {
	const [form, setForm] = useState({ firstName: "", lastName:"", password:"" });
	const [signUpClass, setSignUpClass ] = useState(true);
	const { t } = useTranslation();

	const handleChange = (e, fieldName) => {
		const newValue = e.target.value;
		setForm({ ...form, [fieldName]: newValue });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//vérifier ici que les identifiants sont 1) remplis et 2) ok
		//si sign-in : qu'ils correspondent bien à cx en BDD
		//si sign-up : qu'ils ont bien les critères acceptance (ex: pas de caractères spéciaux dans nom/prénom)
	};

	const toggleSignForm = () => {
		setSignUpClass(!signUpClass);
		setForm({ firstName: "", lastName:"", password:"" });
	};

	return (
		<div className="sign-in-page">
			<img src={logo} alt="reminder poster" className="sign-in-page__logo"/>
			<div className="sign-main-container">

				<div className="container">
					<h1>{signUpClass ? t("reminder:sign.in.btn"): t("reminder:sign.up.btn")}</h1>
					<form className="container__form" onSubmit={handleSubmit}>
						<input 
							className="container__form__field"
							placeholder="First name"
							onChange={(e, fieldName) => handleChange(e, fieldName = "firstName")}
							value={form.firstName}
						/>
						{!signUpClass && <input 
							className="container__form__field"
							placeholder="Last name"
							onChange={(e, fieldName) => handleChange(e, fieldName = "lastName")}
							value={form.lastName}
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
							className="container__form__field"
							placeholder="Confirm Password"
							onChange={(e, fieldName) => handleChange(e, fieldName = "password")}
							value={form.password}
						/>}
						<ReminderBtn type="submit">{t("reminder:sign.submit-btn")}</ReminderBtn>
					</form>
				</div>

				<div className={`container ${signUpClass ? "sign-up": "sign-in"}`}>
					<h1>{signUpClass ? t("reminder:sign.up.container-title") : t("reminder:sign.in.container-title")}</h1>
					<div className="message" >
						{signUpClass ? t("reminder:sign.up.message"): 
							t("reminder:sign.in.message")
						}
					</div>
					<ReminderBtn className="toggle-btn" onClick={toggleSignForm} dark>
						{signUpClass ? t("reminder:sign.up.btn"): t("reminder:sign.in.btn")}
					</ReminderBtn>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;