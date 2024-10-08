import React from "react";
import "./searchBar.css"
import { useState } from "react";


function SearchBar({handlerSubmit, setSearch, setAddPlaylist, searchResults, addPlaylist, resetResults , setSearchResults , searchResultsTwo,isClicked,setIsClicked,resultHeading}){
    const newArray = [false,false,false,false,false,false,false,false,false,false]    
    const [translateAmount, setTranslateAmount] = useState(0)
    function handleClick(index){
        let arrayOfBool = [...isClicked];
        arrayOfBool[index] = !arrayOfBool[index] ;
        setIsClicked(arrayOfBool);
    }

    function leftButton(){
        let  arrayOfSongs = [...searchResults];
        let  arrayOfClickBool = [...isClicked];
        if(arrayOfSongs.length >4){
            let firstElement = arrayOfClickBool.shift();
            let array = isClicked.slice(1);
            setIsClicked([...array,firstElement])
            let newArray = arrayOfSongs.slice(1);
            setSearchResults(newArray);
           
        }
    }

    function rightButton(){
        let  arrayOfSongs = [...searchResults];
        if(arrayOfSongs.length < 10){
            let arrayOfClickBools = [...isClicked];
            let lastElementBool = arrayOfClickBools.pop();
            arrayOfSongs.unshift(searchResultsTwo[(searchResultsTwo.length - 1) - arrayOfSongs.length]);
            arrayOfClickBools.unshift(lastElementBool)
            setIsClicked(arrayOfClickBools);
            setSearchResults(arrayOfSongs);
            console.log(searchResults);
        
        
        }

    }

    return(
        <div className="main">
            
            <div className="resultsAndPlaylist">
                <div className="results">
                    <div className="ResultAndClear">
                        <h2>{resultHeading}</h2>
                        <img src="/x_.svg" class="clearEmblem" onClick={resetResults} />
                    </div>
                    <div className="groupOfResults">
                    {searchResults.map((element,index)=>{
                        return (
                            <div className="searchResults" style={{transform: `translatex(${translateAmount}%)`}}>
                                <div className="imageAndPlus" data-value={"s"} > 
                                    <img src="plus.svg"  className={isClicked[index] ? "plusSignActive" : "plusSignDeactive"} />
                                    <img src={element.albumPhoto} className={isClicked[index] ? "songPictureActive" : "songPictureDeactive"}  onClick={(e)=>{
                                    let count = 0;
                                    handleClick(index);
                                    console.log(e.target)
                                    
                                console.log(count)
                                if(count === 0){
                                    setAddPlaylist((previous)=>[element,...previous])
                                }

                                count = 0
                                }}/>
                                </div>
                                <div className={isClicked[index] ? "artistAndAlbumActive" : "artistAndAlbumDeactive"}>
                                    <h3><a href={element.link} target="_blank">{element.songName}</a></h3>
                                    <p>{element.artist}</p>
                                </div>
                            
                            </div>
                        )
                    })}
                    
                    </div>
                    
                </div>
                <div className="arrows">
                        <img src="Right Arrow.svg" className="rightArrow" onClick={rightButton}/>
                        <img src="left arrow.svg" className="leftArrow" onClick={leftButton}/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
