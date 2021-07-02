import useReminderList from "../../services/use-reminder-list";


const ReminderListPage = () => {
	const { reminders, isLoading, isError } = useReminderList();

	return(
		<div>
			<h1>Reminder List Page</h1>
			<ul>
				<li>Reminder 1</li>
				{ !isLoading && !isError && reminders.map((reminder) => {
					return <li>{reminder.id}</li>;
				})}
			</ul>
		</div>
	);
};

export default ReminderListPage;
