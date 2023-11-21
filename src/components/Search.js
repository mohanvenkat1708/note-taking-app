import React from "react";
import { MdSearch } from "react-icons/md";
const Search=({handleSearchNote})=>{
    return <div className="search-container">
        <MdSearch className="search-icons" size="1.3em"/>
        <input onChange={(event)=>handleSearchNote(event.target.value)} className="search-input" type="text" placeholder="Type to Search ⌨️ 💜💙❤️‍🔥❤️‍🔥"/>
    </div>
}

export default Search;