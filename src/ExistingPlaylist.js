import React from "react";
import "./ExistingPlaylist.css";


function ExistingPlaylist({handlerL, arrayOfPlayistNamesAndIds, handleExistingPlaylist,isClickedTwo,arrowDown,isClickedThree}){

    return(
        <div className="existingPlaylist">
             <h2 className="myPlaylist">My Playlists</h2>
            <div className="outerbox">
            <div className="groupOfPlaylists">
            <div className="playlistAndButton">
               <button className="loadMyPlaylist" onClick={handlerL}>Load my playlists</button>
           </div>
                
                {arrayOfPlayistNamesAndIds.map((element,index)=>{
                return(
                    <div className="playlistNameAndSongs">
                        <div className="imageAndAlbumPhotoPlaylistName">
                            <div className="imageOfPlayAndPlusSign">
                                <img src="./plus.svg" className="plusTwoActive"/>
                                <img src={element.playlistPhoto} className="albumPhotoActive" data-values={index} onClick={handleExistingPlaylist}/>
                            </div>
                            <div className="nameOfPlayAndTracks">
                                <h3 className="playlistName">{element.playlistName}</h3>
                                    <div className={isClickedThree[index]?"groupOfSongsTwoActive":"groupOfSongsTwoDeactive" }>
                                        {element.tracksInPlaylist.map((ele)=>{
                                            return(
                                                <div className="song">
                                                    <p>{ele.songName}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        </div>
                        <img src="arrowDownVector.svg" className="arrowDownVector" data-values={index} onClick={arrowDown}/>
                    </div>
                )
            })}</div>
                </div>
        </div>
    )
}

export default  ExistingPlaylist;