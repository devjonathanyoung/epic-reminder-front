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

	const getUserConnected = () => {
		getCurrentUser().then((response) => {
			if(response){
				setUser(response);
			}
		});
	};

	useEffect(getUserConnected, []);

	const setupCSRF = async () => {
		const storedCsrfToken = csrf.getCSRFToken();
		if(!storedCsrfToken){
			const response = await setupCsrfProtection();
			const csrfToken = response.csrfToken;
			csrf.saveCSRFToken(csrfToken);
		}
	};

	useEffect(() => {
		const isAuthenticated = user.id;
		if (isAuthenticated) {
			setupCSRF().catch((err) =>console.log("error setup csrf", err));
		}
	}, [user]);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };