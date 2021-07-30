import useSWR from "swr";
import fetch from "unfetch";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	const searchedData = await response.json();
	return searchedData;
};

const useFilterReminder = (search) => {
	const { data } = useSWR(`http://localhost:3001/reminder/search/${ search }`, fetcher);
    
	return {
		reminders: data
	};
};
export default useFilterReminder;
