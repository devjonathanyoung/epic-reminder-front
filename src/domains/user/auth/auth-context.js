import React, { createContext, useEffect, useState } from "react";
import { csrf } from "../../../config";
import { setupCsrfProtection, getCurrentUser } from "../auth/auth-services";

const AuthContext = createContext({});
//TODO: setup csrf quand currentUser marchera

/**
 * Context provider for authentication + csrf protection. Retrieves current user from api
 * @param props
 * @return {JSX.Element}
 */
const AuthProvider = props => {
	const { children } = props;

	const [user, setUser] = useState({});
	//const [csrfTokenLoaded, setCsrfTokenLoaded] = useState(false);
	console.log("user in auth-context:", user);

	const getUserConnected = () => {
		getCurrentUser().then((response) => {
			if(response){
				setUser(response);
			}
		});
	};

	useEffect(getUserConnected, []);

	/* const setupCSRF = async () => {
		const storedCsrfToken = csrf.getCSRFToken();
		if(!storedCsrfToken){
			const response = await setupCsrfProtection();
			const csrfToken = response.headers["csrf-token"];
			csrf.saveCSRFToken(csrfToken);
		}
	}; */

	useEffect(() => {
		const isAuthenticated = user?.role && user?.active;
		/* if (isAuthenticated) {
			setCsrfTokenLoaded(false);
			setupCSRF()
				.catch(() =>console.log("error setup csrf"))
				.finally(() => setCsrfTokenLoaded(true));
		} */
	}, [user]);

	return (
		<AuthContext.Provider value={{ user }}>
			{/* {csrfTokenLoaded && children} */}
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };