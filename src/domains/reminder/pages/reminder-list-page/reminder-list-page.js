import useReminderList from "../../services/use-reminder-list";
import ReminderCard from "./reminder-card";
import { Link } from "react-router-dom";
import { useState } from "react";


const ReminderListPage = () => {
	const { reminders, isLoading, isError } = useReminderList();
	const [listReminders, setListReminders] = useState(reminders);
	console.log("list reminders", listReminders);

	const sortByName = () => {
		let sortByNameArr = [...listReminders].sort();
		console.log("sortarrayName", sortByNameArr);
		setListReminders(sortByNameArr);
	  };
 
	  

	return(
		<div>
			<h1>Reminder List Page</h1>
			<button onClick={sortByName}>Sort by name</button>
			<button> <Link to="/reminder/create">Add a new reminder</Link></button>

			{!isLoading && !isError && reminders.map((reminder) => {
				return (
					<ReminderCard key={reminder.id} {...reminder}/>
				);
			})}
		</div>
	);
};

export default ReminderListPage;
