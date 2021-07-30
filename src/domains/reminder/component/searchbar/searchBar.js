import React, { useState } from "react";
import Icon from "./icon";
import "./selection.json";
import "./searchbar.scss";

const SearchBar = ({ setSearch }) => {
	const [tempSearch, setTempSearch] = useState("");
	
	const handleClickSearch = async () => {
		setSearch(tempSearch);
	};

	const handleChangeSearch = (e) => setTempSearch(e.target.value);
	
	const handleEnter = ({ code }) => {
		if(code === "Enter") {
			setSearch(tempSearch);
		};
	};

	return (
		<>
			<div className="search">
				<input type="search" placeholder="search..." className="search__input" onKeyPress={handleEnter} 
					value={tempSearch} onChange={handleChangeSearch}></input>
				<button className="search__button" onClick={handleClickSearch}>
					<Icon icon="magnifying-glass" className="search__icon" />
				</button>
			</div>
		</>
	);
};

export default SearchBar;
