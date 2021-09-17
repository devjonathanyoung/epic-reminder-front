/**
 * get current user
 * @return {Promise<Object>}
 */
const getCurrentUser = async () => {
	const response = await fetch("http://localhost:3001/user/current", {
		method: "GET",
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

/**
 * logout and close user session
 * @return {Promise<Object>}
 */
const logout = async () => {
	const response = await fetch("http://localhost:3001/auth/logout", {
		method: "GET",
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};


export { getCurrentUser, logout };
