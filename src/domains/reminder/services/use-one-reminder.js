import useSWR from "swr";
import fetch from "unfetch";

const fetcher = async (ressource) => {
	const response = await fetch(ressource,  {
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return await response.json();
};


const useOneReminder = (idReminder) => {
	const { data, error } = useSWR(`http://localhost:3001/reminder/${ idReminder }`, fetcher);
	return {
		reminder: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useOneReminder;