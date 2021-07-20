import useOneReminder from "../../services/use-one-reminder";
import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";

const OneReminderPage = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
		props.history.push("/");
	};

	return(

		<div>
			{ !isLoading && !isError && <div>
				<h1>One reminder details</h1>
				<section>
					<h2>Name: {reminder.name}</h2>
					<div>Type: {reminder.type}</div>
					<div>Date of release: {reminder.date ? reminder.date.slice(0,10) : ""} </div>
					<p>Comment: {reminder.comment}</p>
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
