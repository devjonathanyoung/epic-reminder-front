import { Link } from "react-router-dom";
import useDeleteReminder from "../../services/use-delete-reminder";

const ReminderRow = (props) => {
	const deleteReminder = useDeleteReminder;

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
	};
	return(
		<tr key={props.id}>
			
			<td>{props.name}</td>
			<td>{props.type}</td>
			<td>{props.date ? props.date.slice(0,10) : ""}</td>
			<td>{props.comment}</td>
			<td><Link to={`/reminder/${props.id}`}>See more</Link></td>
			<td><Link to={`/reminder/update/${props.id}`}>Update</Link></td>
			<td><button  onClick={() => handleDelete(props.id)}>Delete</button></td>							
		</tr>
	);
};

export default ReminderRow;
