import React from "react";
import "./mobileBar.css"
import { Link } from "react-router-dom";

//function component that has renders out mobile search bar when on mobile screen size
function MobileBar({makeSearchMobileActive,setPlaylistBool}){
    return(
        <div className="mobileButtons">
           <div className="hoouseHome"> 
           <Link to={"/"}><img src="house.svg" className="house" /></Link>
                <h5>Home</h5>
            </div>
            <div className="magnifyAndSearch" onClick={makeSearchMobileActive}>
                <img src="magnify_mobile.svg" className="maginifySearch"/>
                <h5>Search</h5>
            </div>
            <div className="bookAnsPlaylist">
                <img src="books.svg" className="book" onClick={setPlaylistBool}/>
                <h5>My Playlists</h5>
            </div>
        </div>
    )
}

export default MobileBar