import React, { useState } from "react";
import useReminderList from "../../services/use-reminder-list";
import { ReminderCard } from "../../index";
// import { useTranslation } from "react-i18next";
import "../../../core/theme/reset.scss";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import SearchBar from "../../../core/component/searchbar/searchBar";
import Sidebar from "../../../core/component/sidebar/sidebar";

const ReminderListPage = () => {
	const [filter, setFilter] = useState({ isAsc: "desc", sortOn: "date", type: "all", search: "" });
	const { reminders, isLoading, isError } = useReminderList(filter);
	// const { t } = useTranslation();
	
	const setSearch = (newSearch) => {
		setFilter( (oldState) => ({ 
			...oldState, search: newSearch 
		}));
	};
	
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
	const handleReminderNotFound = () => {
	 if (filter.type === "all") {
			return "No reminder yet.";
		} else {
			return `No reminder of type ${filter.type} yet.`;
		};
	};
	
	return(
		<div className="container">
			<TopNavigation>
				<SearchBar setSearch={setSearch} />
			</TopNavigation>

			<Sidebar handleSortName={() => handleSort("name")} handleSortDate={() => handleSort("date")} handleType={handleType} />

			<div className="content">
				{!isLoading && !isError && reminders.length ? ( reminders.map((reminder) => {
					return (
						<ReminderCard key={reminder.id} {...reminder}/>
					);
				})) : <h3>{handleReminderNotFound()}</h3>	
				}
			</div>
		</div>
	);
};

export default ReminderListPage;
