import useReminderList from "../../services/use-reminder-list";
import ReminderRow from "./reminder-row";
import { Link } from "react-router-dom";


const ReminderListPage = () => {
	const { reminders, isLoading, isError } = useReminderList();

	return(
		<div>
			<h1>Reminder List Page</h1>
			{/* <ul>
				<li>Reminder 1</li>
				{ !isLoading && !isError && reminders.map((reminder) => {
					return <li key={reminder.id}>{reminder.id}</li>;
				})}
			</ul> */}
			<button> <Link to="/reminder/create">Add a new reminder</Link></button>
			<table>
          		<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Date of release</th>
						<th>Comment</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>
          		<tbody>
            	{!isLoading && !isError && reminders.map((reminder) => {
						return (
							<ReminderRow key={reminder.id} {...reminder}/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ReminderListPage;
