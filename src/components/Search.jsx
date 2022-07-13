import React from "react";
import { MdSearch } from "react-icons/md";


const Search = ({handleSearch})=>{
    return (
        <div className='search'>
            <MdSearch className="search-icon" size='1.3rem'/> 
            <input 
            onChange={(e) => handleSearch(e.target.value)}
            type="text " 
            placeholder=" konnen sie ein Wort eingeben" />

        </div>
    )
}
export default Search