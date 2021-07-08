import useSWR from "swr";
import fetch from "unfetch";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};


const useCreateOne = (datas) => {
	const { data, error } = useSWR("http://localhost:3001/reminder", fetcher(datas));
	return {
		newReminder: data,
		isLoading: !error && !data,
		isError: error
	};
};

// const useCreateOne = (newReminder) => {
// 	const { data, error } = useSWR("http://localhost:3001/reminder", fetcher);
// 	return {
// 		newReminder: data,
// 		isLoading: !error && !data,
// 		isError: error
// 	};
// };

export default useCreateOne;