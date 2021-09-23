import fetch from "unfetch";

const getAllReminderFavByUser = async ( userId ) => {
	const response = await fetch(`http://localhost:3001/reminder-fav?userId=${userId}`, {
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

export default getAllReminderFavByUser;