import fetch from "unfetch";

const getOneReminder = async (idReminder) => {
	const response = await fetch(`http://localhost:3001/reminder/${idReminder}`, {
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

export default getOneReminder;