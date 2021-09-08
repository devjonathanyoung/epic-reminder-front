import React, { useContext, useEffect } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth-context";

const ProtectedRoute = (props) => {
	const { path, Component } = props;
	const { user } = useContext(AuthContext);
	console.log("component", Component);
	useEffect(() => {
		console.log("user dans protected", user);
	}, [user]);

	const render = (superprops) => {
		console.log("user.id", user?.id);
		if (!user?.id) {
			return <Redirect to="/sign-in" />;
		} else {
			return <Component {...superprops}/>;
		}
	};

	return (
		<Route key={path} exact path={path} render={render}></Route>
	);

};

export default ProtectedRoute;