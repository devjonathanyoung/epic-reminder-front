import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import getOneReminder from "../../services/get-one-reminder";
import updateReminder from "../../services/update-reminder";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import { useTranslation } from "react-i18next";
import "./update-reminder-page.scss";

const FormUpdateReminder = () => {
	const { id: idReminder } = useParams();
	const [reminder, setReminder] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const history = useHistory(); 
	const { t } = useTranslation();

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setReminder((prevReminder) => ({
		  ...prevReminder,
		  [name]: value
		}));
	  };

	  const handleValidation = () => {
		const types = ["book", "movie", "game"];
		let formIsValid = true;

		//name
		if (!reminder.name || reminder.name.trim().length === 0) { 
			formIsValid = false;
		}

		//type
		if (!reminder.type || !types.includes(reminder.type) ) {
			formIsValid = false;
		}
		return formIsValid;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (handleValidation()) {
			updateReminder(reminder)
				.then(() => {
					history.push("/");
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	useEffect(() => getOneReminder(idReminder)
		.then((reminderToUpdate => {
			setReminder(reminderToUpdate);
			setIsLoading(false);
		})).catch((err) => {
			console.error(err);
			setIsError(!!err);
		}), [idReminder]
	);

	return(
		<div className="page-wrap">

			<TopNavigation />
			<Sidebar>
				<ActiveBtn to="/" value={t("reminder:update.back")} />
			</Sidebar>

			{ !isLoading && !isError && <div>

				<Breadcrumb to="/" path={t("reminder:update.home")} page={t("reminder:update.title")} />

				<h1>{t("reminder:update.title")}</h1>

				<form className="reminder-application" onSubmit={handleSubmit}>
					<div className="reminder-application--entry">
						<label htmlFor="name">{t("reminder:update.name")}</label>
						<input
							value={reminder.name}
							name="name"
							type="text"
							placeholder={t("reminder:update.name")}
							onChange ={handleChange}
							required
							className="reminder-application--entry-validation"
						/>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="type">{t("reminder:update.type")}</label>
						<select
							value={reminder.type}
							name="type"
							onChange ={handleChange}
							required
						>
							<option value="book">{t("reminder:update.book")}</option>
							<option value="game">{t("reminder:update.game")}</option>
							<option value="movie">{t("reminder:update.movie")}</option>
						</select>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="date">{t("reminder:update.date")}</label>
						<input
							value={reminder.date ? reminder.date.slice(0,10) : ""}
							type="date"
							name="date"
							onChange ={handleChange}
						/>
					</div>

					<div className="reminder-application--entry reminder-application--entry-comment">
						<label htmlFor="comment">{t("reminder:update.comment")}</label>
						<textarea
							value={reminder.comment || ""}
							type="text"
							name="comment"
							placeholder={t("reminder:update.comment")}
							onChange ={handleChange}
						/>
					</div>
					<ReminderBtn className="reminder-btn" type="submit">{t("reminder:update.update")}</ReminderBtn>
				</form>
			</div>}   
		</div>
	);
};

export default FormUpdateReminder;