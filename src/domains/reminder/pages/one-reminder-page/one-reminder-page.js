import useOneReminder from "../../services/use-one-reminder";
import { useHistory } from "react-router-dom";
import deleteReminder from "../../services/delete-reminder";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import Sidebar from "../../../core/component/sidebar/sidebar";
import Breadcrumb from "../../../core/component/breadcrumb/breadcrumb";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import ReminderBtn from "../../component/reminder-btn/reminder-btn";
import LinkButton from "../../component/reminder-details-btn/reminder-details-btn";
import "./one-reminder-page.scss";

const OneReminderPage = (props) => {
	const idReminder = props.match.params.id;
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	const history = useHistory(); 

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
				<ActiveBtn to="/" value="Back to the list" />
			</Sidebar>

			{ !isLoading && !isError && <div>
				<Breadcrumb to="/" path="Home >" page="Reminder details" />

				<section className="reminder-details">
					<h1>{reminder.name}</h1>
					<div>Type: {reminder.type}</div>
					<div>Date of release: {handleFormatDate(reminder.date)} </div>
					<p>Comment: {reminder.comment}</p>
					<LinkButton className="reminder-btn" to={`/reminder/update/${ idReminder }`}>Update</LinkButton>
					<ReminderBtn className="reminder-btn" onClick={() => handleDelete(idReminder)}>Delete</ReminderBtn>
				</section>
			</div>}
		</div>
	);
};

export default OneReminderPage;
