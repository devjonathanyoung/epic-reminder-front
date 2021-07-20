import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";

import "../../../core/theme/card-reminder.scss";

const ReminderCard = (props) => {

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
	};

	const handleFormatDate = (date) => {
		if (date === null) {
			return "";
		} else {
			return date.slice(0,10);
		}
	};


	return(
        
		<div className="card-reminder" key={props.id}>
			<Link className="link" to={`/reminder/${ props.id }`}>
				<h2>Name: {props.name}</h2>
				<div>Type: {props.type}</div>
				<div>Date of release: {handleFormatDate(props.date)} </div>
				<p>Comment: {props.comment}</p>
			</Link>
			<div>
				<button><Link className="link" to={`/reminder/update/${ props.id }`}>Update</Link></button>
				<button  onClick={() => handleDelete(props.id)}>Delete</button>
			</div>
		</div>
	);
};

export default ReminderCard;
