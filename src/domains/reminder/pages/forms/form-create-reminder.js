import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import createReminder from "../../services/create-one";
 

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

	const handleSubmit = (event) => {
		event.preventDefault();
		createReminder(reminder)
			.then(() => {
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};			


	return(
		<div>
			<h1>Add a new reminder</h1>
			<form onSubmit={handleSubmit}>
				<div className="form__group">
					<label className="form__label" htmlFor="name"> Name</label>
					<input
						value={reminder.name || ""}
						name="name"
						type="text"
						placeholder="Name"
						onChange ={handleChange}
						required
					/>
				</div>
				<div className="form__group">
					<label className="form__label" htmlFor="type"> Type</label>
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
				<div className="form__group">
					<label className="form__label" htmlFor="date"> Date</label>
					<input
						value={reminder.date || ""}
						type="date"
						name="date"
						onChange ={handleChange}
					/>
				</div>
				<div className="form__group">
					<label className="form__label" htmlFor="comment"> Comment</label>
					<input
						value={reminder.comment || ""}
						type="text"
						name="comment"
						placeholder="Comment"
						onChange ={handleChange}
					/>
				</div>
				<button type="submit">Create</button>
			</form>
			<Link className="link" to={"/"}>Back to the list</Link>
		</div>
	);
};

export default FormCreateReminder;