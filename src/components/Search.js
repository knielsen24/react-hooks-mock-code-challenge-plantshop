import React from "react";

function Search({ onSearchChange, searchTerm }) {

	

	return (
		<div className="searchbar">
			<label htmlFor="search">Search Plants:</label>
			<input
				value={searchTerm}
				type="text"
				id="search"
				placeholder="Type a name to search..."
				onChange={onSearchChange}
			/>
		</div>
	);
}

export default Search;
