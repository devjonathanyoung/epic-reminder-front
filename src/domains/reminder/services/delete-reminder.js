import fetch from "unfetch";

const deleteReminder = async(reminderId) => {
	const response = await fetch(`http://localhost:3001/reminder/${ reminderId }`, {
		method: "DELETE",
		credentials: "include"
	});
	return response.json();
};

export default deleteReminder;