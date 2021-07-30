import useOneReminder from "../../services/use-one-reminder";
import { Link, useHistory } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";

const OneReminderPage = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const history = useHistory(); 

	const handleDelete = (id) => {
		deleteReminder(id)
			.then(() => {
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleFormatDate = (date) => {
		return (date?.slice(0,10) ?? "");
	};

	return(

		<div>
			{ !isLoading && !isError && <div>
				<h1>One reminder details</h1>
				<section>
					<h2>Name: {reminder.name}</h2>
					<div>Type: {reminder.type}</div>
					<div>Date of release: {handleFormatDate(reminder.date)} </div>
					<p>Comment: {reminder.comment}</p>
					<div>
						<button><Link className="link" to={`/reminder/update/${ idReminder }`}>Update</Link></button>
						<button  onClick={() => handleDelete(idReminder)}>Delete</button>
					</div>
				</section>
			</div>}
			<Link className="link" to={"/"}>Back to the list</Link>
		</div>
	);
};

export default OneReminderPage;
