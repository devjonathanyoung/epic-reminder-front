import React, {  useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ReminderCard } from "../../index";
import ReminderWrapper from "../../component/reminder-wrapper/reminder-wrapper";
import TopNavigation from "../../../core/component/top-navigation/top-navigation";
import SearchBar from "../../../core/component/searchbar/searchBar";
import Sidebar from "../../../core/component/sidebar/sidebar";
import ReminderContent from "../../component/reminder-content/reminder-content";
import ActiveBtn from "../../../core/component/sidebar-btn/sidebar-active-btn";
import AnimatedBtn from "../../../core/component/sidebar-btn/sidebar-animated-btn";
import FilterType from "../../../core/component/filter-type/filter-type";
import useReminderList from "../../custom-hooks/use-reminder-list";
import FavoriteBtn from "../../component/favorite-btn/favorite-btn";
import getAllReminderFavByUser from "../../services/get-all-fav-by-user";
import { AuthContext } from "../../../user/auth/auth-context.js";


const ReminderListPage = () => {
	const [filter, setFilter] = useState({ isAsc: "desc", sortOn: "date", type: "all", search: "", userId: "dce4aba2-0658-4cda-9412-253e5d2c0c59" });
	const { remindersList, setRemindersList, isLoading, isError } = useReminderList(filter);
	const [ favList, setFavList ] = useState([]);
	//TODO: 1) une fois qu'on aura remindersList avec isFavorite value: on pourra juste passer en props isFavorite et plus FavList
	//TODO: 2) passer le bon userId à la requete

	const { t } = useTranslation();
	const { user } = useContext(AuthContext);

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

	const displayFav = () => {
		setRemindersList(favList);
	};

	//TODO: ne pas faire de requete avec les fav. Mais dans la requete du useReminderList,
	// remindersList doit comporter un champ "isFavorite"
	/* useEffect(() => {
		getAllReminderFavByUser(user?.id)
			.then((allFavList) => {
				const allFavListModified = allFavList.map(fav => ({
					fav_id: fav.id,
					id: fav.reminder_id,
					date: fav.date,
					name: fav.name, 
					type: fav.type, 
					comment: fav.comment
				}));
				setFavList(allFavListModified);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [user, setFavList]); */

	useEffect(() => {
		//TODO: remove le userId test que j'ai mis ici pour test mais utiliser celui du Context
		setRemindersList((oldFilter) => ({ ...oldFilter, userId: "dce4aba2-0658-4cda-9412-253e5d2c0c59" }));
	}, []);
	
	return(
		<ReminderWrapper>
			<TopNavigation>
				<SearchBar setSearch={setSearch} />
			</TopNavigation>

			<Sidebar>
				<ActiveBtn to="/reminder/create" value={t("reminder:create.title")} />
				<AnimatedBtn handleSortName={() => handleSort("name")} handleSortDate={() => handleSort("date")} />
				<FilterType handleType={handleType} />
				<FavoriteBtn showFav={displayFav}/>
			</Sidebar>
			
			<ReminderContent>
				{!isLoading && !isError && remindersList.length ? ( remindersList.map((reminder) => {
					return (
						<ReminderCard key={reminder.id} reminder={reminder} favList={favList}/>
					);
				})) : <h3>{handleReminderNotFound()}</h3>	
				}
			</ReminderContent>
		</ReminderWrapper>
	);
};

export default ReminderListPage;
