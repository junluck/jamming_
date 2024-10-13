import React from "react";
import { Link } from "react-router-dom";
import "./DemoAccount.css";


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
                <Link to="/"  className="ex"><img src="x.svg" style={{height: "25px",marginTop:"25px"}} /></Link>
                <div className="welcomeAndHere">
                    <h2 className="welcomeJammingHeading">Welcome to Jammming</h2>
                    <p className="loginDetails">Here are your login details for today!</p>
                 </div>
                    <div className="manUserName">
                        <img src="man.svg" className="man"/>
                        <div className="usernameAndDemoAccount">
                            <h4 className="accounts">Account Username</h4>
                            <h4 className="demoAccountt">DemoAccount234455</h4>
                        </div>
                        <img src="tick.svg" className="tick"/>
                    </div>
                    <div className="manPassword">
                        <img src="lock.svg" className="manTwo"/>
                        <div className="passwordDemo">
                            <h4 className="password">Password</h4>
                            <h4 className="iAmDemo">iamademo5432</h4>
                        </div>
                        <img src="tick.svg" className="tickTwo"/>
                    </div>
                    <button onClick={getAuthForPlaylist} className="takeMeToSpotify">Take me to spotify</button>
            </div>
        </div>
    )
}

export default DemoAccount