import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.search(searchTerm)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Searchbar</label>
                <input type='text' onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type = 'submit'>SEARCH</button>
            </div>
        </form>
     );
}
 
export default SearchBar;