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
import { SignInPage, AuthProvider } from "./domains/user";

const fetcher = async (ressource) => {
	//TODO: mettre tous les headers des request ici plutôt que dans chacun des fetchers /fichier
	const response = await fetch(ressource);
	return await response.json();
};


const App = () => {
	return (
		<div>
			<SWRConfig
				value={{
					//refreshInterval: 5000,
					fetcher
				}}
			>
				<Router>
					<Switch>
						<Route exact path="/sign-in" component={SignInPage}/>
						<AuthProvider>
							{/* TODO: changer url de la page d'accueil */}
							<Route exact path="/" component={ReminderListPage}/>
							<Route exact path="/reminder/create" component={FormCreateReminder}/>
							<Route exact path="/reminder/update/:id" component={FormUpdateReminder}/>
							<Route exact path="/reminder/:id" component={OneReminderPage}/>
						</AuthProvider>
					</Switch>

				</Router>
			</SWRConfig>
		</div>
	);
};

export default App;
