import fetch from "unfetch";

const getUserByUsername = async(userName) => {

	const response = await fetch(`http://localhost:3001/auth/username/${userName}`, {
		method: "GET",
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

export default getUserByUsername;