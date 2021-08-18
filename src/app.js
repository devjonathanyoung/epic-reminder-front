import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SWRConfig } from "swr";
import fetch from "unfetch";
import "./domains/core/index";
import { 
	ReminderListPage, 
	OneReminderPage, 
	FormCreateReminder, 
	FormUpdateReminder
} from "./domains/reminder";
import { SignInPage } from "./domains/user";

const fetcher = async (ressource) => {
	const response = await fetch(ressource);
	return await response.json();
};


const App = () => {
	return (
		<div>
			<SWRConfig
				value={{
					refreshInterval: 5000,
					fetcher
				}}
			>
				<Router>
					<Switch>
						<Route exact path="/" component={ReminderListPage}/>
						<Route exact path="/sign-in" component={SignInPage}/>
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
