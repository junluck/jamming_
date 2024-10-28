import React from "react";
import "./searchBar.css"
import { useState ,useEffect} from "react";


function SearchBar({handlerSubmit, setSearch, setAddPlaylist, searchResults, addPlaylist, resetResults , setSearchResults , searchResultsTwo,isClicked,setIsClicked,resultHeading,searchResultsThree,isClickedFive,setSearchResultsThree}){
       
    const [translateAmount, setTranslateAmount] = useState(0);
    const newArray = [false,false,false,false,false,false,false,false,false,false];
    const [switcher, setSwitcher] = useState(false)

    function leftButton(){
        console.log(isClicked)

        console.log(addPlaylist)
        let  arrayOfSongs = [...searchResults];
        let  arrayOfClickBool = [...isClicked];
        console.log(window.innerWidth);
        if((arrayOfSongs.length > 4 && window.innerWidth > 1870)||(arrayOfSongs.length > 3 && window.innerWidth > 1354 && window.innerWidth <= 1870 )||((arrayOfSongs.length > 2 && window.innerWidth > 930 && window.innerWidth <= 1354)||(arrayOfSongs.length > 1 && window.innerWidth <=930))){
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
        }

    }


    
    const resetOnWindowSize = () => {
      
        
        setSwitcher(true)
        


    }
    
    useEffect(()=>{
        window.addEventListener("resize",resetOnWindowSize)

        return()=>{
            window.removeEventListener("resize",resetOnWindowSize)
        }
       
    },[])

    useEffect(()=>{
       
        if(window.innerWidth<701){
            setSearchResults(searchResultsThree)
            setIsClicked(newArray)
            

        }
      
        if(switcher === true){
           
            
            
            setSwitcher(false)
        }
    },[switcher])



    function handleClick(index){
        let arrayOfBool = [...isClicked];
        arrayOfBool[index] = !arrayOfBool[index] ;
        setIsClicked(arrayOfBool);
    }

    
    return(
        <div className="main">
            
            <div className="resultsAndPlaylist">
                <div className="results">
                    <div className="ResultAndClear">
                        <h2 className="resultHeading">{resultHeading}</h2>
                        <img src="/x_.svg" class="clearEmblem" onClick={resetResults} />
                    </div>
                    <div className="groupOfResults">
                    {searchResults.map((element,index)=>{
                        return (
                            <div className="searchResults" style={{transform: `translatex(${translateAmount}%)`}}>
                                <div className="imageAndPlus"> 
                                    <img src="plus.svg" data-value={index}  className={ isClicked[index] ? "plusSignActive" : "plusSignDeactive"} onClick={(e)=>{
                                        let arrayOfSongsTwo = [...addPlaylist];
                                        let arrayOfBooleans = [...isClicked];
                                        let theIndexOfTheElement = Number(e.target.getAttribute("data-value"))
                                        element.isClick = false
                                        searchResultsThree[index].isClick = false
                                        arrayOfBooleans[index] = false;
                                        setIsClicked(arrayOfBooleans);
                                        addPlaylist.forEach((element,index) => {
                                            if(searchResults[theIndexOfTheElement].trackId===element.trackId){
                                                arrayOfSongsTwo.splice(index,1);
                                                setAddPlaylist(arrayOfSongsTwo)
                                            }
                                            
                                        });
                                        
                                       console.log(arrayOfSongsTwo)
                                    }}/>
                                    <img src={element.albumPhoto} className={ isClicked[index] ? "songPictureActive" : "songPictureDeactive"}  onClick={(e)=>{
                                    let count = 0;
                                    handleClick(index);
                                    console.log(e.target)
                                    element.isClick = true
                                    searchResultsThree[index].isClick = true
                                console.log(count)
                                if(count === 0){
                                    setAddPlaylist((previous)=>[element,...previous])
                                }

                                count = 0
                                }}/>
                                </div>
                                <div className={isClicked[index] ? "artistAndAlbumActive" : "artistAndAlbumDeactive"}>
                                    <h3 className="songNameFor"><a href={element.link} target="_blank">{element.songName}</a></h3>
                                    <p>{element.artist}</p>
                                </div>
                            
                            </div>
                        )
                    })}
                    
                    </div>
                    <div className="arrows">
                        <img src="Right Arrow.svg" className="rightArrow" onClick={rightButton}/>
                        <img src="left arrow.svg" className="leftArrow" onClick={leftButton}/>
                    </div>
                </div>
                
            </div>
            <div className="resultsAndPlaylistTwo">
                <div className="results">
                    <div className="ResultAndClear">
                        <h2 className="resultHeading">{resultHeading}</h2>
                        <img src="/x_.svg" class="clearEmblem" onClick={resetResults} />
                    </div>
                    <div className="groupOfResults">
                    {searchResults.map((element,index)=>{
                        return (
                            <div className="searchResults" style={{transform: `translatex(${translateAmount}%)`}}>
                                <div className="imageAndPlus"> 
                                    <img src="plus.svg" data-value={index}  className={isClicked[index] ? "plusSignActive" : "plusSignDeactive"} onClick={(e)=>{
                                        let arrayOfSongsTwo = [...addPlaylist];
                                        let arrayOfBooleans = [...isClicked];
                                        let theIndexOfTheElement = Number(e.target.getAttribute("data-value"))
                                        
                                        arrayOfBooleans[index] = false;
                                        setIsClicked(arrayOfBooleans);
                                        addPlaylist.forEach((element,index) => {
                                            if(searchResults[theIndexOfTheElement].trackId===element.trackId){
                                                arrayOfSongsTwo.splice(index,1);
                                                setAddPlaylist(arrayOfSongsTwo)
                                            }
                                            
                                        });
                                        
                                       console.log(arrayOfSongsTwo)
                                    }}/>
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
                                    <h3 className="songNameFor"><a href={element.link} target="_blank">{element.songName}</a></h3>
                                    <p>{element.artist}</p>
                                </div>
                            
                            </div>
                        )
                    })}
                    
                    </div>
                    <div className="arrows">
                        <img src="Right Arrow.svg" className="rightArrow" onClick={rightButton}/>
                        <img src="left arrow.svg" className="leftArrow" onClick={leftButton}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SearchBar
