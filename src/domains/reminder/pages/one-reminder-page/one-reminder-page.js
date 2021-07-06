import useOneReminder from "../../services/use-one-reminder";
import { Link } from "react-router-dom";
// import useDeleteOne from "../../services/use-delete-one";

const OneReminderPage = (props) => {
	const idReminder = props.location.pathname.slice(10);
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	// const handleDelete = useDeleteOne(idReminder);
	return(
		// check isLoading, isError ok ? 
		// balise section pas adaptée => table ? 
		<div>
			{ !isLoading && !isError && <div>
				<h1>One reminder details</h1>
				<section>
					<h2>Name: {reminder[0].name}</h2>
					<p>Date of release: {reminder[0].date} </p>
					<p>Comment: {reminder[0].comment}</p>
					<div>
						<button>Update</button>
						{/* <button  onClick={() => handleDelete(reminder[0].id)}>Delete</button> */}
					</div>
				</section>
			</div>}
			<Link to={"/reminder"}>Back to the list</Link>
		</div>
	);
};

export default OneReminderPage;
