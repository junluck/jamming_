import React from "react";
import { useNavigate } from "react-router-dom";
import "./linkToSpotify.css"

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
        <div class="mainheadingAndSpotify">
            <h1 class="headingHidden">create your own vibe with curated playlists</h1>
            <img src="Header text.svg" className="createYourOwn"/>
            <div id="parentLinkToSpotify">
               
                <button id="linkToSpotify" onClick={getAuthForPlaylist}>Link your Spotify</button>
                <button id="demo">Use demo account</button>
            </div>
        </div>
    )
}

export default LinkToSpotify