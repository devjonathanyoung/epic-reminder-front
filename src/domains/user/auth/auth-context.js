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

	const getUserConnected = () => {
		getCurrentUser()
			.then((userData) => {
				if(userData){
					setUser(userData);
				}
			})
			.catch(() => history.push("/sign-in"));
	};

	useEffect(getUserConnected, [history]);

	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
