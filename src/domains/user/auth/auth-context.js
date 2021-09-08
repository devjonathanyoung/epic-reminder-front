import React, { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "./auth-services";

const AuthContext = createContext({});

/**
 * Context provider for authentication. Retrieves current user from api
 * @param props
 * @return {JSX.Element}
 */
const AuthProvider = props => {
	const { children } = props;
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const getUserConnected = () => {
		getCurrentUser()
			.then((userData) => {
				console.log("userData", userData);
				if(userData){
					setUser(userData);
				}
			})
			.finally(() => {
				console.log("rentre finally");
				setLoading(false);
			});
	};

	useEffect(() => {
		console.log("user dans useContext", user);
	}, [user]);

	useEffect(getUserConnected, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? children : null}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
