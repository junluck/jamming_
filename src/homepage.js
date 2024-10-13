import React from "react";
import LinkToSpotify from "./LinkToSpotify";
import "./homepage.css"
import { Outlet } from "react-router-dom";

function Homepage(){
    return (
        <div className="parentHomeDiv">
            <Outlet />
           
            <img src="guitarist.svg" className="guitarist"/>
            <img src="pianist.svg" className="pianist"/>
            <img src="singer.svg" className="singer"/>
            <img src="drummer.svg" className="drummer"/>
            <img src="women.svg" className="women"/>
            <img src="punkman.svg" className="punkman"/>
            <img src="curvedlineNew.svg" className="curvedLine"/>
            <div className="linkToSpotify">
                <LinkToSpotify />
            </div>
        </div>
    )
}

export default Homepage