/**
 * set CSRF protection
 * @return {Promise<any>}
 */
//TODO: supprimer cette ligne:
//const setupCsrfProtection = async () => http.get("/auth/csrf");

const setupCsrfProtection = async () => {
	const response = await fetch("http://localhost:3001/auth/csrf", {
		method: "GET",
		headers: { "Content-Type":"application/json" },
		credentials: "include"
	});
	return response.json();
};

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


export { setupCsrfProtection, getCurrentUser };
