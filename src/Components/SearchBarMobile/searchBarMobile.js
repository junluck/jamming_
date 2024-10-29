import React from "react";
import "./searchBarMobile.css"

//function component for SearchBarMobile 
function SearchBarMobile({handlerSubmit,setSearch,searchMobileClicked}){
    return(
        <div className={searchMobileClicked?"searchBoxOuterActive":"searchBoxOuterDeactive"}>
            <form className="searchBoxInner" onSubmit={handlerSubmit}>
                <img src="magnify.svg" className="magnifyForMobile" onClick={handlerSubmit}/>
                <input type="search" onChange={(e)=>{setSearch(e.target.value)}}  placeholder="Search by Song, Artist or Album" className="searchBarMobile" />
            </form>
        </div>
    )
}

export default SearchBarMobile