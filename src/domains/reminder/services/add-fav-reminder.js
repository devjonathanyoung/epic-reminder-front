import fetch from "unfetch";

const addFavReminder = async(reminder) => {
	const response = await fetch("http://localhost:3001/reminder-fav", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(reminder),
		credentials: "include"
	});
	return response.json();
};

export default addFavReminder;
