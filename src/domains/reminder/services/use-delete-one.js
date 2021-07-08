import useSWR from "swr";
// import fetch from "unfetch";
import axios from "axios";

const fetcher = url => axios.delete(url).then(res => res.data);

// const fetcher = async (ressource) => {
// 	const response = await fetch(ressource);
// 	return await response.json();
// };


const useDeleteOne = (idReminder) => {
	const { data, error } = useSWR(`http://localhost:3001/reminder/${ idReminder }`, fetcher);
	return {
		reminder: data,
		isLoading: !error && !data,
		isError: error
	};
};

export default useDeleteOne;