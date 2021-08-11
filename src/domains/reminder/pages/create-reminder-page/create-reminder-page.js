import { useHistory } from "react-router-dom";
import { useState } from "react";
import createReminder from "../../services/create-one";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import "../update-reminder-page/update-reminder-page.scss";

const FormCreateReminder = (props) => {
	const [reminder, setReminder] = useState({});
	const history = useHistory(); 

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
				<ActiveBtn to="/" value="Back to the list" />
			</Sidebar>

			<div>
				<Breadcrumb to="/" path="Home >" page="Add a new reminder" />
				
				<h1>Add a new reminder</h1>

				<form className="reminder-application" onSubmit={handleSubmit}>
				
					<div className="reminder-application--entry">
						<label htmlFor="name"> Name</label>
						<input
							value={reminder.name || ""}
							name="name"
							type="text"
							placeholder="Name"
							onChange ={handleChange}
							required
							className="reminder-application--entry-validation"
						/>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="type"> Type</label>
						<select
							name="type"
							onChange ={handleChange}
							required
						>
							<option value="">Select a type</option>
							<option value="book">Book</option>
							<option value="game">Game</option>
							<option value="movie">Movie</option>
						</select>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="date"> Date</label>
						<input
							value={reminder.date || ""}
							type="date"
							name="date"
							onChange ={handleChange}
						/>
					</div>

					<div className="reminder-application--entry reminder-application--entry-comment">
						<label htmlFor="comment">Comment</label>
						<textarea
							value={reminder.comment || ""}
							type="text"
							name="comment"
							placeholder="Comment"
							onChange ={handleChange}
						/>
					</div>
					<ReminderBtn className="reminder-btn" type="submit">Create</ReminderBtn>
				</form>
			</div>
		</div>
	);
};

export default FormCreateReminder;