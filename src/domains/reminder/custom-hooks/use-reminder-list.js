import { useEffect, useState } from "react";
import getReminderList from "../../reminder/services/get-reminder-list";


const useReminderList = (filter) => {
	const [remindersList, setRemindersList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const initList = () => {
		getReminderList(filter)
			.then((reminders) => {
				setRemindersList(reminders);
				setIsLoading(false);
			}).catch((err) => {
				console.error(err);
				setIsError(!!err);
			});
	};

	useEffect(initList, [filter]);

	return {
		remindersList, isLoading, isError
	};
};
export default useReminderList;