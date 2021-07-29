import useReminderList from "../../services/use-reminder-list";
import { ReminderCard } from "../../index";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/searchbar/searchBar";

const ReminderListPage = () => {
	// const [ isAsc, setIsAsc] = useState("desc");
	// const [ sortOn, setSortOn] = useState("date");
	// const [ type, setType] = useState("all");
	// const [ search, setSearch ] = useState("");

	// const { reminders, isLoading, isError } = useReminderList(sortOn, isAsc, search, type);
	
	// const handleSort = (fieldToSortOn) => {
	// 	if (isAsc === "asc"){
	// 		setIsAsc("desc");
	// 	} else {
	// 		setIsAsc("asc");
	// 	} 
	// 	setSortOn(fieldToSortOn);
	// 	  };  

	// const handleType = (typeToFilter) => {
	// 	setType(typeToFilter);
	// };

	// TEST REFACTO

	const [filter, setFilter] = useState({ isAsc: "desc", sortOn: "date", type: "all", search: "" });
	const { reminders, isLoading, isError } = useReminderList(filter);

const ReminderListPage = () => {
	const { reminders, isLoading, isError } = useReminderList();
	const [listReminders, setListReminders] = useState(reminders);
	const { t } = useTranslation();
	const handleSort = (fieldToSortOn) => {
		if (filter.isAsc === "asc"){
			setFilter((oldState) => ({ 
				...oldState, isAsc: "desc" 
			}));
		} else {
			setFilter((oldState) => ({ 
				...oldState, isAsc: "asc" 
			}));
		} 
		setFilter((oldState) => ({ 
			...oldState, sortOn: fieldToSortOn 
		}));
		  }; 

	const handleType = (newType) => {
		setFilter((oldState) => ({ 
			...oldState, type: newType 
		}));
	};

	const setSearch = (newSearch) => {
		setFilter( (oldState) => ({ 
			...oldState, search: newSearch 
		}));
	};


	const typesReminder = ["book", "game", "movie", "all"];

	const handleReminderNotFound = () => {
	 if (filter.type === "all") {
			//  if (type === "all") {
			return "No reminder yet.";
		} else {
			return `No reminder of type ${filter.type} yet.`;
			// return `No reminder of type ${type} yet.`;

		};
	};

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
			})) : <h3>{handleReminderNotFound()}</h3>	}

		
		</div>
	);
};

export default ReminderListPage;
