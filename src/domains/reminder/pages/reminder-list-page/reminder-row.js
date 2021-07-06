import { Link } from "react-router-dom";

const ReminderRow = (props) => {
	return(
		<tr key={props.id}>
			
			<td>{props.name}</td>
			<td>{props.type}</td>
			<td>{props.date}</td>
			<td>{props.comment}</td>
			<Link to={`/reminder/${props.id}`}><td>See more</td></Link>
			<td>Update</td>
			<td>Delete</td>							
		</tr>
	);
};

export default ReminderRow;
