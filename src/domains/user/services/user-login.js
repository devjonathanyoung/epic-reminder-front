import fetch from "unfetch";

const userLogin = async(user) => {
	const response = await fetch("http://localhost:3001/auth/login", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(user),
		credentials: "include"
	});
	return response.json();
};

export default userLogin;