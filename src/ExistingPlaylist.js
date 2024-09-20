import React from "react";
import "./ExistingPlaylist.css";


function ExistingPlaylist({handlerL, arrayOfPlayistNamesAndIds, handleExistingPlaylist}){

    return(
        <div className="existingPlaylist">
            <div className="playlistAndButton">
                <h2>My Playlists</h2>
                <button className="loadMyPlaylist" onClick={handlerL}>Load my playlists</button>
            </div>
            <div>{arrayOfPlayistNamesAndIds.map((element,index)=>{
                return(
                    <div className="playlistNameAndSongs">
                        <h3>{element.playlistName}</h3>
                        <img src="x.svg" className="crosss" data-values={index} onClick={handleExistingPlaylist}/>
                    
                        <div className="songs">{element.tracksInPlaylist.map((element)=>{
                            return <p>{element.songName} | {element.artist}</p>
                        })}</div>
                        
                        <span className="divider"></span>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default  ExistingPlaylist;