import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import { useTranslation } from "react-i18next";

import "../../../core/theme/card-reminder.scss";

const ReminderCard = (props) => {
	const { t } = useTranslation();

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
				<h2>
					<span>{t("reminder:card.name")} </span>
					<span>{props.name}</span>
				</h2>
				<div>
					<span>{t("reminder:card.type")} </span>
					<span>{props.type}</span>
				</div>
				<div>
					<span>{t("reminder:card.release-date")} </span>
					<span>{handleFormatDate(props.date)}</span>
				</div>
				<div>
					<span>{t("reminder:card.comment")} </span>
					<span>{props.comment}</span>
				</div>
			</Link>
			<div>
				<button><Link className="link" to={`/reminder/update/${ props.id }`}>Update</Link></button>
				<button  onClick={() => handleDelete(props.id)}>Delete</button>
			</div>
		</div>
	);
};

export default ReminderCard;
