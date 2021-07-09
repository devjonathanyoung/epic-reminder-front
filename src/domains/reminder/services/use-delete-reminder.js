import useSWR from "swr";
import fetch from "unfetch";

const useDeleteReminder = async(reminderId) => {
	const response = await fetch(`http://localhost:3001/reminder/${ reminderId }`, {
		method: "DELETE"
	});
	return response.json();
};

export default useDeleteReminder;