import React, { useState } from "react";
import { Link } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import { useTranslation } from "react-i18next";
import "../reminder-card/reminder-card.scss";
import Icon from "../../../core/component/icon/icon";

const ReminderCard = (props) => {
	const { t } = useTranslation();
	const [fav, setFav ] = useState(false);

	const handleDelete = (id) => {
		deleteReminder(id).then(response => console.log(response));
	};

	const handleFormatDate = (date) => {
		return (date?.slice(0,10) ?? "");
	};

	const handleFav = (e) => {
		e.preventDefault();
		setFav(prevState => !prevState);
	};

	return(

		<div className="reminder-card" key={props.id} to={`/reminder/${ props.id }`}>

			<Link className="reminder-card__info" to={`/reminder/${ props.id }`}>
				<img src="https://via.placeholder.com/100x100?text=image" alt="reminder poster"/>
				<div className="reminder-card__info__title">
					<h2>{props.name}</h2>
					<Icon name="heart" className={`fav-icon ${fav ? "fav-selected" : ""}`} onClick={handleFav}/>
				</div>
				<div className="reminder-card__info__data">{t("reminder:card.type")} {t(`reminder:type.${props.type}`)}</div>
				<div className="reminder-card__info__data">{t("reminder:card.release-date")} {handleFormatDate(props.date)}</div>
				<div className="reminder-card__info__data">{t("reminder:card.comment")} {props.comment}</div>
			</Link>
			
			<div className="reminder-card__action" >
				<Link to={`/reminder/update/${ props.id }`}>
					<Icon name="new-message" className="reminder-card__action--icon" />
				</Link>
				
				<Icon onClick={() => handleDelete(props.id)} name="trash" className="reminder-card__action--icon" />
			</div>
		</div>
	);
};

export default ReminderCard;