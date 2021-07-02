import useSWR from "swr";
import fetch from "unfetch";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};


const useReminderList = () => {
	const { data, error } = useSWR("http://localhost:3001/reminder", fetcher);

	return {
		reminders: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useReminderList;
