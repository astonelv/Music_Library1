import React, { useState } from "react";

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Search"
            onChange={(e) => props.handleSearch(e, e.target.value)} />

            <input type="submit" />

        </form>
    )
}


export default SearchBar
    