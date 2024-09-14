import React from "react";
import "./ExistingPlaylist.css";

function ExistingPlaylist({handlerL, arrayOfPlayistNamesAndIds}){

    return(
        <div className="existingPlaylist">
            <div className="playlistAndButton">
                <h2>My Playlists</h2>
                <button className="loadMyPlaylist" onClick={handlerL}>Load my playlists</button>
            </div>
            <div>{arrayOfPlayistNamesAndIds.map((element)=>{
                return(
                    <div className="playlistNameAndSongs">
                        <h3>{element.playlistName}</h3>
                        <div className="songs">{element.tracksInPlaylist.map((element)=>{
                            return <p>{element.songName}</p>
                            
                        })}</div>
                        <span className="divider"></span>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default  ExistingPlaylist;