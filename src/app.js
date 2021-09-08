import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./domains/core/index";
import {
	ReminderListPage,
	OneReminderPage,
	FormCreateReminder,
	FormUpdateReminder
} from "./domains/reminder";
import { SignInPage, AuthProvider } from "./domains/user";
import ProtectedRoute from "./domains/user/auth/protected-route";

const App = () => {
	const protectedRoutesList = [
		{ path: "/reminder/create", component: FormCreateReminder },
		{ path: "/reminder/:id", component: OneReminderPage },
		{ path: "/reminder/update/:id", component: FormUpdateReminder },
		{ path: "/", component: ReminderListPage }
	];

	const renderProtectedRoutes = (route) => {
		const { component: Component, path } = route;
		return (
			<ProtectedRoute key={path} exact path={path} Component={Component}></ProtectedRoute>
		);
	};

	return (
		<Router>
			<AuthProvider>
				<div>	
					<Switch>
						<Route exact path="/sign-in" component={SignInPage}/>
						{protectedRoutesList.map(renderProtectedRoutes)}
					</Switch>
				</div>	
			</AuthProvider>
		</Router>
	);
};

export default App;
