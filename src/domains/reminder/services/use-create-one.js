// import useSWR from "swr";
import fetch from "unfetch";


const useCreateReminder = async(reminder) => {
	const response = await fetch("http://localhost:3001/reminder", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(reminder)
	});
	return response.json();
};


// const useCreateReminder = (datas) => {
// 	const { data, error } = useSWR("http://localhost:3001/reminder", fetcher(datas));
// 	return {
// 		newReminder: data,
// 		isLoading: !error && !data,
// 		isError: error
// 	};
// };


export default useCreateReminder;