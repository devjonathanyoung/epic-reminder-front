import useOneReminder from "../../services/use-one-reminder";


const OneReminderPage = (props) => {
	const idReminder = props.location.pathname.slice(10);
	const { reminder, isLoading, isError } = useOneReminder(idReminder);
	return(
		// check isLoading, isError ok ? 
		// balise section pas adaptée => table ? 
		<div>
			{ !isLoading && !isError && <div>
				<h1>One reminder details</h1>
				<section>
					<h2>Name: {reminder[0].name}</h2>
					<p>Date of release: {reminder[0].date} </p>
					<p>Comment: {reminder[0].comment}</p>
					<div>
						<button>Update</button>
						<button>Delete</button>
					</div>
				</section>
			</div>}
		</div>
	);
};

export default OneReminderPage;
