import fetch from "unfetch";

const userLogin = async(user) => {
	const response = await fetch("http://localhost:3001/user/login", {
		method: "POST",
		headers: { "Content-Type":"application/json" },
		body: JSON.stringify(user)
	});
	return response.json();
};

export default userLogin;