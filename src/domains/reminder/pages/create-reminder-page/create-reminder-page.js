import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import createReminder from "../../services/create-one";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import "./create-reminder-page.scss";

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
		<div className="container">

			<TopNavigation />
			<Sidebar />

			<form onSubmit={handleSubmit}>
				<h1>Add a new reminder</h1>
				<div>
					<label htmlFor="name"> Name</label>
					<input
						value={reminder.name || ""}
						name="name"
						type="text"
						placeholder="Name"
						onChange ={handleChange}
						required
					/>
				</div>
				<div>
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
				<div>
					<label htmlFor="date"> Date</label>
					<input
						value={reminder.date || ""}
						type="date"
						name="date"
						onChange ={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="comment"> Comment</label>
					<input
						value={reminder.comment || ""}
						type="text"
						name="comment"
						placeholder="Comment"
						onChange ={handleChange}
					/>
				</div>
				<button type="submit">Create</button>
				<Link to={"/"}>Back to the list</Link>
			</form>
		</div>
	);
};

export default FormCreateReminder;