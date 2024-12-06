import React from "react";
import "../SearchBar/searchBar.css"

//Function component that consist of all the songs being added to the playlist you want to submit to sptify 
function MyPlaylist({addPlaylist,setPlaylistName,setAddPlaylist,makePlaylist,isClicked,setIsClicked,searchResults,isClickedFour,setIsClickedFour,playlistName,addToPlaylist,setAddToPlaylist}){
    
return(
    <div className="addToPlaylist">
        <div className={addToPlaylist?"headingPlaylistActive":"headingPlaylist"}>
            <h3 className="addPlaylistHeading">Add to playlist</h3>
        </div>
        <input className="inputPlaylist" value={isClickedFour?"":playlistName} placeholder="Name my playlist" onChange={(e)=>{
            setIsClickedFour(false) //setting state false
            setPlaylistName(e.target.value) //playlist name will be ste to the target valu being typed in
            
        }} />
        <div className="songArtist">
            <h4>Song</h4>
            <h4>Artist</h4>
            <h4>Album</h4>
        </div>
        <div className="addedSongs">
            { 
            //mapping over entire array a returning each element as jsx 
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
                                    setIsClicked(newArrrayThree)
                                    const newArray = [...newArrrayThree]
                                    const newArrayString = JSON.stringify(newArray)
                                    sessionStorage.setItem('isClicked', newArrayString)
                                    console.log(newArrayString)
                                    

                                }
                                
                            });
                            setAddPlaylist(array)     
                            const newArray = [...array]
                            const newArrayString = JSON.stringify(newArray)
                            console.log(newArrayString)
                            sessionStorage.setItem('addPlaylist', newArrayString) 
                            if(addPlaylist.length === 1){
                                setAddToPlaylist(false);
                                sessionStorage.setItem("addToPlaylist",JSON.stringify(false))
                            }               
                            
                        }}/>
                    </div>
                )
            })}
        </div>
        <button className="submit" onClick={makePlaylist}>Submit</button>
    </div>)}

export default MyPlaylist