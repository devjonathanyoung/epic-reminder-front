import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SWRConfig } from "swr";
import fetch from "unfetch";
import "./domains/core/index";
import { Header } from "./domains/reminder";
import { ReminderListPage } from "./domains/reminder";
import { OneReminderPage } from "./domains/reminder";
import { FormCreateReminder } from "./domains/reminder";
import { FormUpdateReminder } from "./domains/reminder";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};


const App = () => {
	return (
		<div className="App">
			<SWRConfig
				value={{
					refreshInterval: 5000,
					fetcher
				}}
			>
				<h1>EPIC REMINDER</h1>
				<Router>
					<Switch>
						<Route exact path="/" component={ReminderListPage}/>
						<Route path="/reminder/create" component={FormCreateReminder}/>
						<Route path="/reminder/update/:id" component={FormUpdateReminder}/>
						<Route path="/reminder/:id" component={OneReminderPage}/>
					</Switch>
				</Router>
			</SWRConfig>
		</div>
	);
};

export default App;
