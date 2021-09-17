import fetch from "unfetch";

const createUser = async(user) => {
	const { confirmedPassword, ...newUserToSend } = user;

	const response = await fetch("http://localhost:3001/auth/sign-up", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(newUserToSend),
		credentials: "include"
	});
	return response.json();
};

export default createUser;