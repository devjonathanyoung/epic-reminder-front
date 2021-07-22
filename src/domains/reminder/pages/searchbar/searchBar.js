import React, { useState } from "react";
import fetch from "unfetch";

const SearchBar = (props) => {
	const { reminders } = props;
	const [search, setSearch] = useState("");
	
	const handleClickSearch = async () => {
		const result = await fetch(`http://localhost:3001/reminder/search/${ search }`);
		const searchedData = await result.json();
		return searchedData;
	};
    
	const handleChangeSearch = (e) => setSearch(e.target.value);

	return (
		<>
			<input type="text" placeholder="search..." value={search} onChange={handleChangeSearch}></input>
			<button onClick={handleClickSearch}>Go</button>  
		</>
	);
};

export default SearchBar;
