import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "./auth-services";

const AuthContext = createContext({});

/**
 * Context provider for authentication. Retrieves current user from api
 * @param props
 * @return {JSX.Element}
 */
const AuthProvider = props => {
	const { children } = props;
	const history = useHistory();
	const [user, setUser] = useState({});
	const [userAuthenticated, setUserAuthenticated] = useState(false);

	const getUserConnected = () => {
		getCurrentUser()
			.then((userData) => {
				if(userData){
					setUser(userData);
					setUserAuthenticated(!!userData.id);
				}
			})
			.catch(() => history.push("/sign-in"));
	};

	useEffect(getUserConnected, [history]);

	return (
		<AuthContext.Provider value={{ user, userAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
