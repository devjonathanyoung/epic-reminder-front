import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import { useTranslation } from "react-i18next";
import "../reminder-card/reminder-card.scss";
import Icon from "../../../core/component/icon/icon";

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
				<h2>{props.name}</h2>
				<span>{t("reminder:card.type")} {t(`reminder:type.${props.type}`)}</span>
				<span>{t("reminder:card.release-date")} {handleFormatDate(props.date)}</span>
				<span>{t("reminder:card.comment")} {props.comment}</span>
			</Link>
			
			<div className="reminderCard__action" >
				<Link to={`/reminder/update/${ props.id }`}>
					<Icon name="new-message" className="reminderCard__action--icon" />
				</Link>
				
				<Icon onClick={() => handleDelete(props.id)} name="trash" className="reminderCard__action--icon" />
			</div>
		</div>
	);
};

export default ReminderCard;