import React from "react";
import { useNavigate } from "react-router-dom";

function LinkToSpotify(){

    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
    }

    const clientId = process.env.REACT_APP_D
    const redirect_uri = "http://localhost:3000/home-page"
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);

    async function getAuthForPlaylist(){
        window.location.href=authorizationLink 
    }
    return(
        <div id="parentLinkToSpotify">
            <button id="linkToSpotify" onClick={getAuthForPlaylist}>Link your Spotify</button>
        </div>
    )
}

export default LinkToSpotify