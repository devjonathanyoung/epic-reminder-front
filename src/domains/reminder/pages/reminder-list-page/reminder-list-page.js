import useReminderList from "../../services/use-reminder-list";
import ReminderRow from "./reminder-row";
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

	//   // error lorsque la date = null
	//   const sortByDate = () => {
	// 	let sortByDateArr = [...listReminders].sort((a, b) =>
	// 	  a.date.localeCompare(b.date)
	// 	);
	// 	console.log("sortarrayDate", sortByDateArr);
	// 	setListReminders(sortByDateArr);
	//   };
	  
	  

	return(
		<div>
			<h1>Reminder List Page</h1>
			{/* <ul>
				<li>Reminder 1</li>
				{ !isLoading && !isError && reminders.map((reminder) => {
					return <li key={reminder.id}>{reminder.id}</li>;
				})}
			</ul> */}
			<button onClick={sortByName}>Sort by name</button>
			{/* <button onClick={sortByDate}>Sort by date</button> */}
			{/* <button onClick={filterByType}>Filter type</button> */}
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
            	{!isLoading && !isError && !listReminders && reminders.map((reminder) => {
						return (
							<ReminderRow key={reminder.id} {...reminder}/>
						);
					})}
				</tbody>

				<tbody>
            	{listReminders && listReminders.map((reminder) => {
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
