import React from "react";
import "./searchResults.css"



function SearchResults(props){
    console.log(props.results)
    return(
    <div className="resultsAndPlaylist">
        <div className="results">
        </div>
        <div className="addToPlaylist">
        </div>
    </div>)
}

export default SearchResults