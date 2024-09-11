import React from "react";
import "./ExistingPlaylist.css";

function ExistingPlaylist({handlerL}){

    return(
        <div className="existingPlaylist">
            <h2>My Playlists</h2>
            <button className="loadMyPlaylist" onClick={handlerL}>Load my playlists</button>
        </div>
    )
}

export default  ExistingPlaylist;