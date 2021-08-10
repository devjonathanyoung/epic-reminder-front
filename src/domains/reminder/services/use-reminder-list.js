import useSWR from "swr";
import fetch from "unfetch";
import useEffect from "react";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};

// const useReminderList = (sortOn, isAsc, search, type ) => {
// 	const { data, error } = useSWR(`http://localhost:3001/reminder?sort=${sortOn}&order=${isAsc}&search=${search}&type=${type}`, fetcher);
// 	return {
// 		reminders: data,
// 		isLoading: !error && !data,
// 		isError: error
// 	};
// };

const useReminderList = ( state ) => {
	const { sortOn, isAsc, search, type } = state;
	// trouver pq on ne recupere pas le state
	// useEffect(() => { 
	// 	console.log("state", state);
	// }, [state]);
	const { data, error } = useSWR(`http://localhost:3001/reminder?sort=${sortOn}&order=${isAsc}&search=${search}&type=${type}`, fetcher);
	return {
		reminders: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useReminderList;
