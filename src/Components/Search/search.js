import React from "react";

//Function component for search 
function Search({setSearch,handlerSubmit}){
    return(
        <form className="form" onSubmit={handlerSubmit}>
            <img src="magnify.svg" className="magnify" onClick={handlerSubmit}/>
            <input type="text" className="searchBar" onChange={(e)=>{setSearch(e.target.value);}} placeholder="Search by Song, Artist or Album"/>
        </form>
    )
}

export default Search