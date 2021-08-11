import { useHistory } from "react-router-dom";
import { useState } from "react";
import useOneReminder from "../../services/use-one-reminder";
import updateReminder from "../../services/update-reminder";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import "./update-reminder-page.scss";

const FormUpdateReminder = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const history = useHistory(); 

	const [update, setUpdate] = useState( { ...reminder } );
	const handleChange = ({ target }) => {
		const { name, value } = target;
		setUpdate((prevReminder) => ({
		  ...prevReminder,
		  [name]: value
		}));
	  };

	  const handleValidation = () => {

		const reminderInCreation = update;
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
			updateReminder(update)
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

			{ !isLoading && !isError && <div>

				<Breadcrumb to="/" path="Home >" page="Update the reminder" />

				<h1>Update the reminder</h1>

				<form className="reminder-application" onSubmit={handleSubmit}>
					<div className="reminder-application--entry">
						<label htmlFor="name">Name</label>
						<input
							value={update.name}
							name="name"
							type="text"
							placeholder="Name"
							onChange ={handleChange}
							required
							className="reminder-application--entry-validation"
						/>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="type">Type</label>
						<select
							value={update.type}
							name="type"
							onChange ={handleChange}
							required
						>
							<option value="book">Book</option>
							<option value="game">Game</option>
							<option value="movie">Movie</option>
						</select>
					</div>

					<div className="reminder-application--entry">
						<label htmlFor="date">Date</label>
						<input
							value={update.date ? update.date.slice(0,10) : ""}
							type="date"
							name="date"
							onChange ={handleChange}
						/>
					</div>

					<div className="reminder-application--entry reminder-application--entry-comment">
						<label htmlFor="comment">Comment</label>
						<textarea
							value={update.comment || ""}
							type="text"
							name="comment"
							placeholder="Comment"
							onChange ={handleChange}
						/>
					</div>
					<ReminderBtn className="reminder-btn" type="submit">Update</ReminderBtn>
				</form>
			</div>}   
		</div>
	);
};

export default FormUpdateReminder;