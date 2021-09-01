import fetch from "unfetch";

const getReminderList = async ( state ) => {
	const { sortOn, isAsc, search, type } = state;

	const response = await fetch(`http://localhost:3001/reminder?sort=${sortOn}&order=${isAsc}&search=${search}&type=${type}`, {
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

export default getReminderList;