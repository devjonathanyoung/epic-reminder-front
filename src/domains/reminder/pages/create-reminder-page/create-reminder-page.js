import { useHistory } from "react-router-dom";
import { useState } from "react";
import createReminder from "../../services/create-one";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import { useTranslation } from "react-i18next";
import "../update-reminder-page/update-reminder-page.scss";

const FormCreateReminder = () => {
	const [reminder, setReminder] = useState({});
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

		const reminderInCreation = reminder;
		const types = ["book", "movie", "game"];
		let formIsValid = true;

		//name
		if (reminderInCreation.name === undefined || reminderInCreation.name.trim().length === 0) {
			formIsValid = false;
		}

		//type
		if (reminderInCreation.type === undefined || !types.includes(reminderInCreation.type) ) {
			formIsValid = false;
		}
		return formIsValid;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (handleValidation()) {
			createReminder(reminder)
				.then(() => {
					history.push("/");
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			alert(JSON.stringify({ message: "Form submission failed: name and type cannot be empty" }, null, 4));
		}
	};

	return(
		<div className="page-wrap">

			<TopNavigation />
			<Sidebar>
				<ActiveBtn to="/" value={t("reminder:create.back")} />
			</Sidebar>

			<div>
				<Breadcrumb to="/" path={t("reminder:create.home")} page={t("reminder:create.title")} />

				{/* <h1>Add a new reminder</h1> */}
				<h1>{t("reminder:create.title")}</h1>


				<form className="reminder-application" onSubmit={handleSubmit}>

					<div className="reminder-application--entry">
						<label htmlFor="name">{t("reminder:create.name")}</label>
						<input
							value={reminder.name || ""}
							name="name"
							type="text"
							placeholder={t("reminder:create.name")}
							onChange ={handleChange}
							required
							className="reminder-application--entry-validation"
						/>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="type">{t("reminder:create.type")}</label>
						<select
							name="type"
							onChange ={handleChange}
							required
						>
							<option value="">{t("reminder:create.select")}</option>
							<option value="book">{t("reminder:create.book")}</option>
							<option value="game">{t("reminder:create.game")}</option>
							<option value="movie">{t("reminder:create.movie")}</option>
						</select>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="date">{t("reminder:create.date")}</label>
						<input
							value={reminder.date || ""}
							type="date"
							name="date"
							onChange ={handleChange}
						/>
					</div>

					<div className="reminder-application--entry reminder-application--entry-comment">
						<label htmlFor="comment">{t("reminder:create.comment")}</label>
						<textarea
							value={reminder.comment || ""}
							type="text"
							name="comment"
							placeholder={t("reminder:create.comment")}
							onChange ={handleChange}
						/>
					</div>
					<ReminderBtn className="reminder-btn" type="submit">{t("reminder:create.create")}</ReminderBtn>
				</form>
			</div>
		</div>
	);
};

export default FormCreateReminder;
