import { Link } from "react-router-dom";
import { useState } from "react";
import useOneReminder from "../../services/use-one-reminder";
import useUpdateReminder from "../../services/use-update-reminder";

const FormUpdateReminder = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const updateReminder = useUpdateReminder;

	const [update, setUpdate] = useState( { ...reminder[0] } );
	const handleChange = ({ target }) => {
		const { name, value } = target;
		setUpdate((prevReminder) => ({
		  ...prevReminder,
		  [name]: value
		}));
	  };

	const handleSubmit = (event) => {
		event.preventDefault();
		updateReminder(update).then(response => console.log(response));
	};

	return(
		<div>
			{ !isLoading && !isError && <div>
				<h1>Update your reminder</h1>
				<form onSubmit={handleSubmit}>
					<input
						value={update.name}
						name="name"
						type="text"
						placeholder="Name"
						onChange ={handleChange}
						required
					/>
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
					<input
						value={update.date || ""}
						type="date"
						name="date"
						onChange ={handleChange}
					/>
					<input
						value={update.comment || ""}
						type="text"
						name="comment"
						placeholder="Comment"
						onChange ={handleChange}
					/>
					<button type="submit" >Update</button>
				</form>
				<Link to={"/"}>Back to the list</Link>
			</div>}   
		</div>
	);
};

export default FormUpdateReminder;