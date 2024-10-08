import React from "react";
import "./searchBar.css"


function MyPlaylist({addPlaylist,setPlaylistName,setAddPlaylist,makePlaylist}){
    
return(
    <div className="addToPlaylist">
        <div className="headingPlaylist">
            <h3 className="addPlaylistHeading">Add to playlist</h3>
        </div>
        <input className="inputPlaylist" placeholder="Name my playlist" onChange={(e)=>{
            setPlaylistName(e.target.value)
        }} />
        <div className="songArtist">
            <h4>Song</h4>
            <h4>Artist</h4>
            <h4>Album</h4>
            <h4>Time</h4>
        </div>
        <div className="addedSongs">
            {   
            addPlaylist.map((element)=>{
                return (
                    <div className="searchResultsTwo">
                        <div className="albumPhotoAndSongName">
                            <img src={element.albumPhoto} className="albumPhotos"/>
                            <h3><a href={element.link} target="_blank">{element.songName}</a></h3>
                        </div>
                        <h6 className="album">{element.album}</h6>
                        <h6 className="artist">{element.artist}</h6>
                        <img src="minus.svg" className="minus" data-values={element.trackId}  onClick={(e)=>{
                            const array = addPlaylist.filter(element => element.trackId !==  e.target.getAttribute("data-values"))
                            setAddPlaylist(array) 
                        }}/>
                    </div>
                )
            })}
        </div>
        <button className="submit" onClick={makePlaylist}>Submit</button>
    </div>)}

export default MyPlaylist