import React from "react";
import "./searchBar.css"


function MyPlaylist({addPlaylist,setPlaylistName,setAddPlaylist,makePlaylist,isClicked,setIsClicked,searchResults,isClickedFour,setIsClickedFour,playlistName}){
    
return(
    <div className="addToPlaylist">
        <div className="headingPlaylist">
            <h3 className="addPlaylistHeading">Add to playlist</h3>
        </div>
        <input className="inputPlaylist" value={isClickedFour?"":playlistName} placeholder="Name my playlist" onChange={(e)=>{
            setIsClickedFour(false)
            setPlaylistName(e.target.value)
            
        }} />
        <div className="songArtist">
            <h4>Song</h4>
            <h4>Artist</h4>
            <h4>Album</h4>
        </div>
        <div className="addedSongs">
            {   
            addPlaylist.map((element)=>{
                
                return (
                    <div className="searchResultsTwo">
                        <div className="albumPhotoAndSongName">
                            <img src={element.albumPhoto} className="albumPhotos"/>
                            <div className="songNameArtistAndAlbum">
                                <h3 className="songNameOfAddedSong"><a href={element.link} target="_blank">{element.songName}</a></h3>
                                <h6 className="albumTwo">{element.album}</h6>
                                <h6 className="artistTwo">{element.artist}</h6>
                            </div>
                        </div>
                        <h6 className="album">{element.album}</h6>
                        <h6 className="artist">{element.artist}</h6>
                        <img src="minus.svg" className="minus" data-values={element.trackId}  onClick={(e)=>{
                            const array = addPlaylist.filter((element,index) => element.trackId !==  e.target.getAttribute("data-values"))
                            searchResults.forEach((element,index) => {
                                if(element.trackId === e.target.getAttribute("data-values")){
                                    let newArrrayThree = [...isClicked];
                                    newArrrayThree[index] = false;
                                    console.log(newArrrayThree)
                                    setIsClicked(newArrrayThree)
                                    console.log(index)
                                    

                                }
                                
                            });
                            setAddPlaylist(array)                     
                            
                        }}/>
                    </div>
                )
            })}
        </div>
        <button className="submit" onClick={makePlaylist}>Submit</button>
    </div>)}

export default MyPlaylist