import React, { useState }  from "react";
import logo from "../../../../img/logo_large.png";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import "./sign-in-page.scss";

const SignInPage = () => {
	const [form, setForm] = useState({ firstName: "", lastName:"", password:"" });
	console.log("form", form);

	const handleChange = (e, fieldName) => {
		const newValue = e.target.value;
		console.log("newValue", newValue);
		console.log("fieldName", fieldName);
		setForm({ ...form, [fieldName]: newValue });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//vérifier ici que les identifiants sont 1) remplis et 2) ok
		//si sign-in : qu'ils correspondent bien à cx en BDD
		//si sign-up : qu'ils ont bien les critères acceptance (ex: pas de caractères spéciaux dans nom/prénom)
		console.log("submit !");
	};

	return (
		<div className="sign-in-page">
			<img src={logo} alt="reminder poster" className="sign-in-page__logo"/>
			<div className="sign-main-container">

				<div className="sign-up container">
					<h1>HELLO, FRIEND!</h1>
					<div className="sign-up__message">Enter your personal details and start journey with us</div>
					<ReminderBtn className="sign-up__btn">Sign Up</ReminderBtn>
				</div>

				<div className="sign-in container">
					<h1>SIGN IN</h1>
					<form className="container__form" onSubmit={handleSubmit}>
						<input className="container__form__field" placeholder="First name" onChange={(e, fieldName) => handleChange(e, fieldName = "firstName")}/>
						<input className="container__form__field" placeholder="Last name" onChange={(e, fieldName) => handleChange(e, fieldName = "lastName")}/>
						<input type="password" className="container__form__field" placeholder="Password" onChange={(e, fieldName) => handleChange(e, fieldName = "password")}/>
						<ReminderBtn type="submit" >Submit</ReminderBtn>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;