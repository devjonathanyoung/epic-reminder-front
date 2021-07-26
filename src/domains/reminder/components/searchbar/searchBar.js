import React from "react";
import { useState } from "react";

const SearchBar = ({ setSearch }) => {

	const handleEnter = ({ code }) => {
		if(code === "Enter") {
			setSearch(tempSearch);
		};
	};

	const handleClickSearch = async () => {
		setSearch(tempSearch);
	};


	const [tempSearch, setTempSearch] = useState("");
	const handleChangeSearch = (e) => setTempSearch(e.target.value);

	return (
		<div className="search">
			<input type="search" placeholder="search..." className="search__input" onKeyPress={handleEnter} 
				value={tempSearch} onChange={handleChangeSearch}></input>
			<button className="search__button" onClick={handleClickSearch}  > Go
			</button>
		</div>
	);
};

export default SearchBar;
