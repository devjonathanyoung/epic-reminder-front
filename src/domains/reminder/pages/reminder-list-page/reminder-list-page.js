import React, { useState } from "react";
import { Link } from "react-router-dom";
import useReminderList from "../../services/use-reminder-list";
import { ReminderCard } from "../../index";
import { useTranslation } from "react-i18next";
import SearchBar from "../../component/searchbar/searchBar";
import "../reminder-list-page/reminder-list-page.scss";
import "../../../core/theme/reset.scss";
import logo from "../../../../img/logo_large.png";
import user from "../../../../img/Jon_Snow.png";


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
		<div className="container">
			<header className="header">
				<img src={logo} alt="reminder poster" className="header__logo"/>
				
				<SearchBar setSearch={setSearch}/>

				<img src={user} alt="user profile" className="header__user" />
			</header>

			<nav className="sidebar">
				<ul className="side-nav">
			 		<li className="side-nav__sort side-nav__sort--active">
						 <Link className="side-nav__link" to="/reminder/create">Add a new reminder</Link>
					</li>
			 		<li className="side-nav__sort">
						 <Link className="side-nav__link" onClick={() => handleSort("name")}>Sort by name</Link>
					</li>
			 		<li className="side-nav__sort">
						 <Link className="side-nav__link" onClick={() => handleSort("date")}>Sort by date</Link>
					</li>
				</ul>
	
				<ul className="side-nav__filter">
					{typesReminder.length ? (typesReminder.map((typeToFilter, index) => {
						return (<li key={index}  onClick={() => handleType(typeToFilter)} className="side-nav__filter--item" >{typeToFilter}</li>);
					})) : ""}
				</ul>
			</nav>

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
