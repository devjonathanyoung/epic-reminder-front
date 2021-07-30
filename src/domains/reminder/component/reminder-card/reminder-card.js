import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import { useTranslation } from "react-i18next";
import "../reminder-card/reminder-card.scss";
import Icon from "./icon";
import "./selection.json";

const ReminderCard = (props) => {
	const { t } = useTranslation();

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
	};

	const handleFormatDate = (date) => {
		return (date?.slice(0,10) ?? "");
	};

	return(

		<div className="reminderCard" key={props.id}>

			<Link className="reminderCard__info" to={`/reminder/${ props.id }`}>
				<img src="https://via.placeholder.com/100x100?text=image" alt="reminder poster"/>
				
				<div className="reminderCard__info--elements">
					<h2>{props.name}</h2>
					
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

