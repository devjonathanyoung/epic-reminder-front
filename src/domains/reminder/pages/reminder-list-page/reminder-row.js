import { Link } from "react-router-dom";

const ReminderRow = (props) => {
	return(
		<tr key={props.id}>
			
			<td>{props.name}</td>
			<td>{props.type}</td>
			<td>{props.date}</td>
			<td>{props.comment}</td>
			<td><Link to={`/reminder/${props.id}`}>See more</Link></td>
			<td>Update</td>
			<td>Delete</td>							
		</tr>
	);
};

export default ReminderRow;
