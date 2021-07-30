import React, { useState } from "react";
import Icon from "./icon";
import "./selection.json";
import "./searchbar.scss";

const SearchBar = (props) => {
	const [search, setSearch] = useState("");
	
	const handleClickSearch = async () => {
		console.log("search enter");
		const result = await fetch(`http://localhost:3001/reminder/search/${ search }`);
		const searchedData = await result.json();
		return searchedData;
	};

	const handleChangeSearch = (e) => {
		console.log("value > ", e.target.value);
		setSearch(e.target.value);
	};
	
	const handleEnter = ({ code }) => {
		if(code === "Enter") {
			handleClickSearch();
		};
	};

	return (
		<>
			<div className="search">
				<input type="text" placeholder="search..." className="search__input" onKeyPress={handleEnter} value={search} onChange={handleChangeSearch}></input>
				<button className="search__button" onClick={handleClickSearch}>
					<Icon icon="magnifying-glass" className="search__icon" />
				</button>
			</div>
		</>
	);
};

export default SearchBar;
