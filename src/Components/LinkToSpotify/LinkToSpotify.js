import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./linkToSpotify.css"


function LinkToSpotify(){

   
    //function that takes away code and equal away from key
    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
    }

    //getting clientId from env and stroing it in variable and aswell ass storing redirect link and authorization link in variables
    const clientId = process.env.REACT_APP_D
    const redirect_uri = `${window.location.origin}/home-page`
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    //storing code that being returned from spotify in variable and removing code word from it
    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);
    //an async functions that redirects app to authorization link
    async function getAuthForPlaylist(){
        window.location.href=authorizationLink 
    }

    return(
        <div class="mainheadingAndSpotify">
            <h1 class="headingHidden">create your own vibe with curated playlists</h1>
            <img src="Header text.svg" className="createYourOwn"/>
            <img src="CreateMobile.svg" className="createYourOwnTwo"/>
            <div id="parentLinkToSpotify">
                <button id="linkToSpotify" onClick={()=>{
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('searchResults');
                    sessionStorage.removeItem('addPlaylist');
                    sessionStorage.removeItem("isClicked");
                    sessionStorage.removeItem("Results");
                    getAuthForPlaylist()}}>Link your Spotify</button>
                <Link to="demopopup"><button id="demo" onClick={()=>{
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('searchResults');
                    sessionStorage.removeItem('addPlaylist');
                    sessionStorage.removeItem("isClicked");
                    sessionStorage.removeItem("Results");
                    }}>Use demo account</button></Link>
            </div>
        </div>
    )
}

export default LinkToSpotify