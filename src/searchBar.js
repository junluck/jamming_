import React from "react";
import "./searchBar.css"


function SearchBar({getAuthForPlaylist,makePlaylist,handlerSubmit, setSearch,setPlaylistName,setAddPlaylist,searchResults,addPlaylist}){


    return(
        <div className="main">
            <form className="form" onSubmit={handlerSubmit}>
                <input type="text" className="searchBar" onChange={(e)=>{setSearch(e.target.value);}}/>
                <input type="submit" value="SEARCH" id="search" />
            </form>
            <button id="linkToSpotify" onClick={getAuthForPlaylist}>Link your Spotify</button>
            <div className="resultsAndPlaylist">
                <div className="results">
                <h2>Results</h2>
                {searchResults.map((element)=>{
                    return (
                        <div className="searchResults">
                        <h3><a href={element.link} target="_blank">{element.songName}</a></h3>
                        <div className="artistAndAlbum">
                            <p>{element.album}</p>
                            <p>|</p>
                            <p>{element.artist}</p>
                        </div>
                        <img src="x.svg" className="cross" data-values={element.trackId} onClick={(e)=>{
                            let count = 0;
                           
                            addPlaylist.forEach((elementTwo,index)=>{
                                console.log(addPlaylist[index].songName)
                                if(e.target.getAttribute('data-values') === elementTwo.trackId){
                                    count += 1
                                    
                                }
                            
                            })
                           console.log(count)
                           if(count === 0){
                            setAddPlaylist((previous)=>[element,...previous])
                           }

                           count = 0
                           }}/>
                        <span className="span"></span>
                        </div>
                    )
                })}
                  
                </div>
                <div className="addToPlaylist">
                    <h2>Add to playlist</h2>
                    <input className="inputPlaylist" onChange={(e)=>{
                        setPlaylistName(e.target.value)
                    }} />
                    <span className="spanTwo"></span>
                    {addPlaylist.map((element)=>{
                        return (
                            <div className="searchResults">
                            <h3><a href={element.link} target="_blank">{element.songName}</a></h3>
                            <div className="artistAndAlbum">
                                <p>{element.album}</p>
                                <p>|</p>
                                <p>{element.artist}</p>
                            </div>
                            <img src="minus.svg" className="minus" data-values={element.trackId}  onClick={(e)=>{
                                const array = addPlaylist.filter(element => element.trackId !==  e.target.getAttribute("data-values"))
                                setAddPlaylist(array) 
                            }}/>
                            <span className="span"></span>
                            </div>
                        )
                    })}
                    <button className="submit" onClick={makePlaylist}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
