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

const App = () => {
	const protectedRoutesList = [
		{ path: "/reminder/create", component: FormCreateReminder },
		{ path: "/reminder/update/:id", component: FormUpdateReminder },
		{ path: "/reminder/:id", component: OneReminderPage },
		{ path: "/", component: ReminderListPage }
	];

	const renderProtectedRoutes = (route) => {
		const { component: Component, path } = route;
		return (
			<Route key={path} exact path={path}>
				<AuthProvider>
					<Component />
				</AuthProvider>
			</Route>
		);
	};

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/sign-in" component={SignInPage}/>
					{protectedRoutesList.map(renderProtectedRoutes)}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
