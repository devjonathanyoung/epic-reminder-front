import React, { useState } from "react";
import { Link } from "react-router-dom";
import useReminderList from "../../services/use-reminder-list";
import { ReminderCard } from "../../index";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/searchbar/searchBar";

const ReminderListPage = () => {
	const [filter, setFilter] = useState({ isAsc: "desc", sortOn: "date", type: "all", search: "" });
	const { reminders, isLoading, isError } = useReminderList(filter);
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
			return "No reminder yet.";
		} else {
			return `No reminder of type ${filter.type} yet.`;
		};
	};

	return(
		<div>
			<h1>{t("reminder:main-page.title")}</h1>

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
