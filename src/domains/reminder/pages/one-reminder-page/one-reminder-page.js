import useOneReminder from "../../services/use-one-reminder";
import { useHistory, useParams } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import LinkButton from "../../component/reminder-details-btn/reminder-details-btn";
import { useTranslation } from "react-i18next";
import "./one-reminder-page.scss";

const OneReminderPage = () => {
	const { id: idReminder } = useParams();
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const history = useHistory(); 
	const { t } = useTranslation();

	const handleDelete = (id) => {
		deleteReminder(id)
			.then(() => {
				history.push("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleFormatDate = (date) => {
		return (date?.slice(0,10) ?? "");
	};

	return(
		<div className="page-wrap">
			
			<TopNavigation />
			<Sidebar>
				<ActiveBtn to="/" value={t("reminder:one.back")} />
			</Sidebar>

			{ !isLoading && !isError && <div>
				<Breadcrumb to="/" path={t("reminder:one.home")} page={t("reminder:one.title")} />

				<section className="reminder-details">
					<h1>{reminder.name}</h1>
					<div>{t("reminder:one.type")}: {reminder.type}</div>
					<div>{t("reminder:one.date")}: {handleFormatDate(reminder.date)} </div>
					<p>{t("reminder:one.comment")}: {reminder.comment}</p>
					<LinkButton className="reminder-btn" to={`/reminder/update/${ idReminder }`}>{t("reminder:one.update")}</LinkButton>
					<ReminderBtn className="reminder-btn" onClick={() => handleDelete(idReminder)}>{t("reminder:one.delete")}</ReminderBtn>
				</section>
			</div>}
		</div>
	);
};

export default OneReminderPage;
