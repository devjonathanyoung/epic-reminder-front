import React, { useState } from "react";
import Icon from "../icon/icon";
import { useTranslation } from "react-i18next";
import "./searchbar.scss";

const SearchBar = ({ setSearch }) => {
	const [tempSearch, setTempSearch] = useState("");
	const { t } = useTranslation();
	
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
		<div className="search">
			<input type="search" placeholder={t("reminder:search.search")} className="search__box" onKeyPress={handleEnter} 
				value={tempSearch} onChange={handleChangeSearch}></input>
			<button className="search__btn" onClick={handleClickSearch}>
				<Icon name="magnifying-glass" className="search__icon" />
			</button>
		</div>
	);
};

export default SearchBar;
