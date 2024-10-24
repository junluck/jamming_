import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./linkToSpotify.css"


function LinkToSpotify(){

    const navigate = useNavigate();

    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
    }

    const clientId = process.env.REACT_APP_D
    const redirect_uri = `${window.location.origin}/home-page`
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
            <img src="CreateMobile.svg" className="createYourOwnTwo"/>
            <div id="parentLinkToSpotify">
                <button id="linkToSpotify" onClick={getAuthForPlaylist}>Link your Spotify</button>
                <Link to="demopopup"><button id="demo" onClick={console.log(window.location.origin)}>Use demo account</button></Link>
            </div>
        </div>
    )
}

export default LinkToSpotify