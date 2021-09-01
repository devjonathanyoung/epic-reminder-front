import React, { useEffect, useState } from "react";
import getReminderList from "../../services/get-reminder-list";
import { ReminderCard } from "../../index";
import ReminderWrapper from "../../component/reminder-wrapper/reminder-wrapper";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import SearchBar from "../../../core/component/searchbar/searchBar";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ReminderContent from "../../component/reminder-content/reminder-content";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import AnimatedBtn from "../../../core/component/sidebar-btn/sidebar-animated-btn";
import FilterType from "../../../core/component/filter-type/filter-type";

const ReminderListPage = () => {
	const [filter, setFilter] = useState({ isAsc: "desc", sortOn: "date", type: "all", search: "" });
	const [remindersList, setRemindersList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

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

	const initList = () => {
		getReminderList(filter)
			.then((reminders) => {
				setRemindersList(reminders);
				setIsLoading(false);
			}).catch((err) => {
				console.error(err);
				setIsError(!!err);
			});
	};

	useEffect(initList, [filter]);
	
	return(
		<ReminderWrapper>
			<TopNavigation>
				<SearchBar setSearch={setSearch} />
			</TopNavigation>

			<Sidebar>
				<ActiveBtn to="/reminder/create" value="Add a new reminder" />
				<AnimatedBtn handleSortName={() => handleSort("name")} handleSortDate={() => handleSort("date")} />
				<FilterType handleType={handleType} />
			</Sidebar>
			
			<ReminderContent>
				{!isLoading && !isError && remindersList.length ? ( remindersList.map((reminder) => {
					return (
						<ReminderCard key={reminder.id} {...reminder}/>
					);
				})) : <h3>{handleReminderNotFound()}</h3>	
				}
			</ReminderContent>
		</ReminderWrapper>
	);
};

export default ReminderListPage;
