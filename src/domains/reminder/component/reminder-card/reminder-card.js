import { Link } from "react-router-dom";
import useDeleteReminder from "../../services/use-delete-reminder";
import "../reminder-card/reminder-card.scss";
import Icon from "./icon";
import "./selection.json";

const ReminderCard = (props) => {
	const deleteReminder = useDeleteReminder;

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
	};
	return(

		<div className="reminderCard" key={props.id}>
			
			<Link className="reminderCard__info" to={`/reminder/${ props.id }`}>
				<img src="https://via.placeholder.com/100x100?text=image" alt="reminder poster"/>
				<div className="reminderCard__info--elements">
					<h2>{props.name}</h2>
					<div>Type: {props.type}</div>
					<div>Date of release: {props.date ? props.date.slice(0,10) : ""}</div>
					<div>Comment: {props.comment}</div>
				</div>
			</Link>
			
			<div className="reminderCard__action" >
				<Link to={`/reminder/update/${ props.id }`}>
					<Icon icon="new-message" className="reminderCard__action--icon" />
				</Link>

				<Icon onClick={() => handleDelete(props.id)} icon="trash" className="reminderCard__action--icon" />
			</div>
		</div>
	);
};

export default ReminderCard;
