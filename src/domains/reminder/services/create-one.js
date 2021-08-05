import fetch from "unfetch";

const createReminder = async(reminder) => {
	const response = await fetch("http://localhost:3001/reminder", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(reminder)
	});
	return response.json();
};

export default createReminder;