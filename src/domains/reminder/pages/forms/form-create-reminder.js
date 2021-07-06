import { Link } from "react-router-dom";

const FormCreateReminder = () => {

	return(

		<div>
			<h1>Add a new reminder</h1>
			<form
				className="form__create"
				//on change et on submit
			>
				<div className="field">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" autoFocus={true} required />
				</div>
				<div className="field">
					<label htmlFor="type">Type</label>
					<select
						name="type"
						id="type"
						required
					>
						<option value="">Select a type</option>
						<option value="book">Book</option>
						<option value="game">Game</option>
						<option value="movie">Movie</option>
					</select>
				</div>
				<div className="field">
					<label htmlFor="date">Date of release</label>
					<input type="date" id="date" name="date" />
				</div>
				<div className="field">
					<label htmlFor="comment">Comment</label>
					<input type="text" id="comment" name="comment" />
				</div>
				<button>Create</button>
			</form>
			<Link to={"/reminder"}>Back to the list</Link>
		</div>
	);
};

export default FormCreateReminder;