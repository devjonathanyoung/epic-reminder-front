import React, { useState } from "react";
import fetch from "unfetch";


const SearchBar = (props) => {
	const [search, setSearch] = useState("");
	
	const handleClickSearch = () => {
		fetch(`http://localhost:3001/reminder/search/${ search }`).then((res) => {
			console.log(res.data);
			//TODO don't forget to change the log with real data
		}).catch((err) => {
			console.log(err);
		});
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
