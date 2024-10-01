import React from "react";
import LinkToSpotify from "./LinkToSpotify";
import "./homepage.css"
import { Outlet } from "react-router-dom";

function Homepage(){
    return (
        <div className="parentHomeDiv">
            <Outlet />
            <img src="music note one.svg" className="musicNotOne"/>
            <img src="Musicnote3.svg" className="musicNotTwo"/>
            <img src="Musicnote5.svg" className="musicNotThree"/>
            <img src="Musicnote 7.svg" className="musicNotFour"/>
            <img src="music note 8.svg" className="musicNotFive"/>
            <img src="music note 9.svg" className="musicNotSix"/>
            <img src="Musicnote3.svg" className="musicNotSeven"/>
            <img src="Musicnote3.svg" className="musicNotEight"/>
            <img src="music note 10.svg" className="musicNotNine"/>
            <img src="music note 11.svg" className="musicNotTen"/>
            <img src="musicNote12.svg" className="musicNotEleven"/>
            <img src="guitarist.svg" className="guitarist"/>
            <img src="pianist.svg" className="pianist"/>
            <img src="singer.svg" className="singer"/>
            <img src="drummer.svg" className="drummer"/>
            <img src="women.svg" className="women"/>
            <img src="punkman.svg" className="punkman"/>
            <img src="curved line.svg" className="curvedLine"/>
            <div className="linkToSpotify">
                <LinkToSpotify />
            </div>
        </div>
    )
}

export default Homepage