import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import useOneReminder from "../../services/use-one-reminder";
import updateReminder from "../../services/update-reminder";

const FormUpdateReminder = (props) => {
	const idReminder = props.match.params.id;
	console.log("update idreminder", idReminder);
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
		<div>
			{ !isLoading && !isError && <div>
				<h1>Update your reminder</h1>
				<form onSubmit={handleSubmit}>
					<div className="form__group">
						<label className="form__label" htmlFor="name"> Name</label>
						<input
							value={update.name}
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
					<div className="form__group">
						<label className="form__label" htmlFor="date"> Date</label>
						<input
							value={update.date ? update.date.slice(0,10) : ""}
							type="date"
							name="date"
							onChange ={handleChange}
						/>
					</div>
					<div className="form__group">
						<label className="form__label" htmlFor="comment"> Comment</label>
						<input
							value={update.comment || ""}
							type="text"
							name="comment"
							placeholder="Comment"
							onChange ={handleChange}
						/>
					</div>
					<button type="submit" >Update</button>
				</form>
				<Link className="link" to={"/"}>Back to the list</Link>
			</div>}   
		</div>
	);
};

export default FormUpdateReminder;