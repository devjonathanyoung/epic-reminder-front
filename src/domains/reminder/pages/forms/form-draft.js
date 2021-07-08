// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import useCreateOne from "../../services/use-create-one";

// const FormCreateReminder = () => {
// 	const { register, handleSubmit } = useForm();
//   	const onSubmit = data => console.log("data", data);
// 	const onErrors = errors => console.error(errors);
// 	// argument à passer à useCreateOne
// 	// redirection vers liste des rmeinders
// 	const { newReminder, isLoading, isError } = useCreateOne();
// 	return(
// 		<div>
// 			<h1>Add a new reminder</h1>
// 			{/* <form onSubmit={handleSubmit(onSubmit, onErrors)}>
// 				<input type="text" {...register("name", { required: "Name is required." })} />
// 				<select {...register("type", { required: "Type is required." })}>
// 					<option value="">Type</option>
// 					<option value="book">Book</option>
// 					<option value="game">Game</option>
// 					<option value="movie">Movie</option>
// 				</select>
// 				<input type="date" {...register("date")} />
// 				<input type="text" {...register("comment")} />
// 				<input type="submit" />
// 			</form> */}
			
// 			<form
// 				className="form__create"
// 				//on change et on submit
// 			>
// 				<div className="field">
// 					<label htmlFor="name">Name</label>
// 					<input type="text" id="name" name="name" autoFocus={true} required />
// 				</div>
// 				<div className="field">
// 					<label htmlFor="type">Type</label>
// 					<select
// 						name="type"
// 						id="type"
// 						required
// 					>
// 						<option value="">Select a type</option>
// 						<option value="book">Book</option>
// 						<option value="game">Game</option>
// 						<option value="movie">Movie</option>
// 					</select>
// 				</div>
// 				<div className="field">
// 					<label htmlFor="date">Date of release</label>
// 					<input type="date" id="date" name="date" />
// 				</div>
// 				<div className="field">
// 					<label htmlFor="comment">Comment</label>
// 					<input type="text" id="comment" name="comment" />
// 				</div>
// 				<button>Create</button>
// 			</form>
// 			<Link to={"/"}>Back to the list</Link>
// 		</div>
// 	);
// };

// export default FormCreateReminder;