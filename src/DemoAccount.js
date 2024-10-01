import React from "react";
import { Link } from "react-router-dom";
import "./DemoAccount.css"

function DemoAccount(){
    const clientId = process.env.REACT_APP_D
    const redirect_uri = "http://localhost:3000/home-page"
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`

    async function getAuthForPlaylist(){
        window.location.href=authorizationLink 
    }
    return(
        <div className="blurBackground">
            <div className="demoAccount">
                <h3>UserName for account:</h3>
                <h4>DemoAccount234455</h4>
                <h3>Password:</h3>
                <h4>iamademo5432</h4>
                <button onClick={getAuthForPlaylist} className="takeMeToSpotify">Take me to spotify</button>
            </div>
        </div>
    )
}

export default DemoAccount