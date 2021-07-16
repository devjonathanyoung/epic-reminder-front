import fetch from "unfetch";


const useUpdateReminder = async(reminder) => {
	const response = await fetch(`http://localhost:3001/reminder/${ reminder.id }`, {
		method: "PUT",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(reminder)
	});
	return response.json();
};

export default useUpdateReminder;