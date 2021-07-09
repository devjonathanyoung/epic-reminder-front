import useOneReminder from "../../services/use-one-reminder";
import { Link } from "react-router-dom";
import useDeleteReminder from "../../services/use-delete-reminder";

const OneReminderPage = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const deleteReminder = useDeleteReminder;

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
		props.history.push("/");
	};

	return(

		<div>
			{ !isLoading && !isError && <div>
				<h1>One reminder details</h1>
				<section>
					<h2>Name: {reminder[0].name}</h2>
					<p>Type: {reminder[0].type}</p>
					<p>Date of release: {reminder[0].date ? reminder[0].date.slice(0,10) : ""} </p>
					<p>Comment: {reminder[0].comment}</p>
					<div>
						<button><Link to={`/reminder/update/${ idReminder }`}>Update</Link></button>
						<button  onClick={() => handleDelete(idReminder)}>Delete</button>
					</div>
				</section>
			</div>}
			<Link to={"/"}>Back to the list</Link>
		</div>
	);
};

export default OneReminderPage;
