import { useEffect, useState } from "react";
import getOneReminder from "../../reminder/services/get-one-reminder";


const useOneReminder = (reminderId) => {
	const [reminder, setReminder] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const loadReminder = () => {
		getOneReminder(reminderId)
			.then((reminderData => {
				setReminder(reminderData);
				setIsLoading(false);
			})).catch((err) => {
				console.error(err);
				setIsError(!!err);
			});
	};

	useEffect(loadReminder, [reminderId]);

	return {
		reminder, setReminder, isLoading, isError
	};
};
export default useOneReminder;