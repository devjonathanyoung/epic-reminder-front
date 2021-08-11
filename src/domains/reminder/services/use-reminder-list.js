import useSWR from "swr";
import fetch from "unfetch";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};

const useReminderList = ( state ) => {
	const { sortOn, isAsc, search, type } = state;

	const { data, error } = useSWR(`http://localhost:3001/reminder?sort=${sortOn}&order=${isAsc}&search=${search}&type=${type}`, fetcher);
	return {
		reminders: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useReminderList;