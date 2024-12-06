import React from "react";
import LinkToSpotify from "../LinkToSpotify/LinkToSpotify";
import "./homepage.css"
import { Outlet } from "react-router-dom";

//function component that is the homepage that consists of the buttons title and different vector artwork 
function Homepage(){
    return (
        <div className="parentDiv">
            <div className="parentHomeDiv">
                <Outlet />
            <div className="stageAndArtist">
                    <img src="guitarist.svg" className="guitarist"/>
                    <img src="pianist.svg" className="pianist"/>
                    <img src="singer.svg" className="singer"/>
                    <img src="drummer.svg" className="drummer"/>
                    <img src="women.svg" className="women"/>
                    <img src="stage.svg" className="stage"/>
                    <img src="stage.svg" className="stageTwo"/>
                    <img src="ShadowCircle.svg" className="shadowCircle"/>
                    <img src="ShadowCircle.svg" className="shadowCircleTwo"/>
                </div>
                <div className="linkToSpotify">
                    <LinkToSpotify />
                </div>
        </div>
    </div>
    )
}

export default Homepage