import useReminderList from "../../services/use-reminder-list";
import { ReminderCard } from "../../index";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/searchbar/searchBar";

const ReminderListPage = (props) => {
	const [ isAsc, setIsAsc] = useState("desc");
	const [ sortOn, setSortOn] = useState("date");
	const [ type, setType] = useState("all");
	const [ search, setSearch ] = useState("");
	
	
	const { reminders, isLoading, isError } = useReminderList(sortOn, isAsc, search, type);

const ReminderListPage = () => {
	const { reminders, isLoading, isError } = useReminderList();
	const [listReminders, setListReminders] = useState(reminders);
	const { t } = useTranslation();
	const handleSort = (fieldToSortOn) => {
		if (isAsc === "asc"){
			setIsAsc("desc");
		} else {
			setIsAsc("asc");
		} 
		setSortOn(fieldToSortOn);
		  };  

	const handleType = (typeToFilter) => {
		setType(typeToFilter);
	};

	const typesReminder = ["book", "game", "movie", "all"];

	return(
		<div>
			<h1>{t("reminder:main-page.title")}</h1>
			<button onClick={sortByName}>Sort by name</button>
			<button> <Link className="link" to="/reminder/create">Add a new reminder</Link></button>

			<SearchBar setSearch={setSearch}/>

			<button onClick={() => handleSort("name")}>Sort by name</button>
			<button onClick={() => handleSort("date")}>Sort by date</button>
			<button> <Link className="link" to="/reminder/create">Add a new reminder</Link></button>
			<ul>
				{typesReminder.length ? (typesReminder.map((typeToFilter, index) => {
					return (<li key={index}  onClick={() => handleType(typeToFilter)} >{typeToFilter}</li>);
				})) : ""}
			</ul>
			
			
			{!isLoading && !isError && reminders.length ? ( reminders.map((reminder) => {
				return (
					<ReminderCard key={reminder.id} {...reminder}/>
				);
			})) : <h3>No reminder</h3>	}

		
		</div>
	);
};

export default ReminderListPage;
