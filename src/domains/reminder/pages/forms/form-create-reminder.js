import { Link } from "react-router-dom";
import { useState } from "react";
import useCreateReminder from "../../services/use-create-one";
import { withRouter } from "react-router";

  

const FormCreateReminder = (props) => {
	const [reminder, setReminder] = useState({});
	const createReminder = useCreateReminder;

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setReminder((prevReminder) => ({
		  ...prevReminder,
		  [name]: value
		}));
	  };

	  const handleSubmit = (event) => {
		event.preventDefault();
		createReminder(reminder).then(response => console.log(response));
		props.history.push("/");
	  };

	return(
		<div>
			<h1>Add a new reminder</h1>
			<form onSubmit={handleSubmit}>
				<input
					value={reminder.name || ""}
					name="name"
					type="text"
					placeholder="Name"
					onChange ={handleChange}
					required
				/>
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
				<input
					value={reminder.date || ""}
					type="date"
					name="date"
					onChange ={handleChange}
				/>
				<input
					value={reminder.comment || ""}
					type="text"
					name="comment"
					placeholder="Comment"
					onChange ={handleChange}
				/>
				<button type="submit">Create</button>
			</form>
			<Link to={"/"}>Back to the list</Link>
		</div>
	);
};

export default withRouter(FormCreateReminder);