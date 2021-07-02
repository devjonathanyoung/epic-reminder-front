import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SWRConfig } from "swr";
import fetch from "unfetch";
import "./domains/core/index";
import { ReminderListPage } from "./domains/reminder";


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
				<Router>
					<Switch>
						<Route path="/" component={ReminderListPage}/>
					</Switch>
				</Router>
			</SWRConfig>
		</div>
	);
};

export default App;
