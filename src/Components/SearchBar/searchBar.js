import React from "react";
import "./searchBar.css"
import { useState ,useEffect,useRef} from "react";

//Function component that exports song search results
function SearchBar({handlerSubmit, setSearch, setAddPlaylist, searchResults, addPlaylist, resetResults , isClicked,setIsClicked,resultHeading,searchResultsThree, setAddToPlaylist,addtoPlaylist}){
       
    const [translateAmount, setTranslateAmount] = useState(0);
    //useRef for div 
    const inputRef = useRef()
    //state for scrollamount on div
    const [scrollAmount, setScrollAmount] = useState(200)
    //function for left button that will move div scrollbar
    function leftButton(){
       
        if(window.innerWidth>1354){
           let amount =  scrollAmount + 180
           inputRef.current.scrollLeft = amount
           if(amount > 1467){
            amount = 1300
           }
           setScrollAmount(amount)
          
           
        }

        else if(window.innerWidth <= 1354 && window.innerWidth > 930){
            let amount =  scrollAmount + 180
            inputRef.current.scrollLeft = amount
            if(amount > 1467){
             amount = 1500
            }
            setScrollAmount(amount)       
        }

        else{
            let amount =  scrollAmount + 130
            inputRef.current.scrollLeft = amount
            if(amount > 1767){
             amount = 1800
            }
            setScrollAmount(amount)     
        }
    }
    //function for right button that will move div scrollbar
    function rightButton(){
        console.log(inputRef)
       
        if(window.innerWidth > 1354){    
            let amount =  scrollAmount - 180
            inputRef.current.scrollLeft = amount
            if(amount < 1){
                amount = 0
            }
            setScrollAmount(amount)
        }

        else if(window.innerWidth <= 1354 && window.innerWidth > 930){    
            let amount =  scrollAmount - 100
            inputRef.current.scrollLeft = amount
            if(amount < 1){
                amount = 0
            }
            setScrollAmount(amount)
        }

        else{
            let amount =  scrollAmount - 100
            inputRef.current.scrollLeft = amount
            if(amount < 1){
                amount = 0
            }
            setScrollAmount(amount)
        }
        
    }




    // function that set array element to opposite boolean
    function handleClick(index){
        let arrayOfBool = [...isClicked];
        arrayOfBool[index] = !arrayOfBool[index] ;
        setIsClicked(arrayOfBool);
        sessionStorage.setItem('isClicked', JSON.stringify(arrayOfBool))
    }

    
    return(
        <div className="main">
            
            <div className="resultsAndPlaylist">
                <div className="results">
                    <div className="ResultAndClear">
                        <h2 className="resultHeading">{resultHeading}</h2>
                        <img src="/x_.svg" class="clearEmblem" onClick={resetResults} />
                    </div>
                    <div className="groupOfResults" ref={inputRef}>
                    
                    {
                    //mapping over search results array and rendering out each result
                    searchResults.map((element,index)=>{
                        return (
                            <div className="searchResults" style={{transform: `translatex(${translateAmount}%)`}}>
                                <div className="imageAndPlus"> 
                                    <img src="plus.svg" data-value={index}  className={ isClicked[index] ? "plusSignActive" : "plusSignDeactive"} onClick={(e)=>{
                                        let arrayOfSongsTwo = [...addPlaylist]; //setting array to the values
                                        let arrayOfBooleans = [...isClicked]; //setting array to  booleans
                                        let theIndexOfTheElement = Number(e.target.getAttribute("data-value"))//convert string number index into int
                                        element.isClick = false //make clicked false
                                        searchResultsThree[index].isClick = false //make clicked false
                                        arrayOfBooleans[index] = false; //make index of array false
                                        setIsClicked(arrayOfBooleans);//update state for boolean array
                                        sessionStorage.setItem('isClicked', JSON.stringify(arrayOfBooleans));
                                        addPlaylist.forEach((element,index) => {
                                            if(searchResults[theIndexOfTheElement].trackId===element.trackId){
                                                arrayOfSongsTwo.splice(index,1);
                                                setAddPlaylist(arrayOfSongsTwo)
                                                
                                            }
                                            
                                        });
                                        if(addPlaylist.length === 1){
                                            setAddToPlaylist(false)
                                        }

                                        const newArray = [...arrayOfSongsTwo]
                                        const newArrayString = JSON.stringify(newArray)
                                        console.log(newArrayString)
                                        sessionStorage.setItem('addPlaylist', newArrayString)
                                       
                                        
                                    }}/>
                                    <img src={element.albumPhoto} className={ isClicked[index] ? "songPictureActive" : "songPictureDeactive"}  onClick={(e)=>{
                                        
                                    let count = 0;
                                    handleClick(index);//update the state of isclicked array when clicked
                                    element.isClick = true //make clicked true
                                    searchResultsThree[index].isClick = true //make clicked true
                                    if(addPlaylist.length === 0){
                                            
                                    }
                                let array = []
                                if(count === 0){
                                    setAddPlaylist((previous)=>[element,...previous])
                                    array = [element,...addPlaylist]
                                }
                                if(addPlaylist.length === 0){
                                    setAddToPlaylist(true)                               
                                }
                                const newArray = [...array]
                                const newArrayString = JSON.stringify(newArray)
                                console.log(newArrayString)
                                sessionStorage.setItem('addPlaylist', newArrayString)
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
                    {
                    //mapping over search results array and rendering out each result
                    searchResults.map((element,index)=>{
                        return (
                            <div className="searchResults" style={{transform: `translatex(${translateAmount}%)`}}>
                                <div className="imageAndPlus"> 
                                    <img src="plus.svg" data-value={index}  className={isClicked[index] ? "plusSignActive" : "plusSignDeactive"} onClick={(e)=>{
                                        let arrayOfSongsTwo = [...addPlaylist]; //setting array to the values
                                        let arrayOfBooleans = [...isClicked]; //setting array to  booleans
                                        let theIndexOfTheElement = Number(e.target.getAttribute("data-value"))//convert string number index into int
                                        
                                        arrayOfBooleans[index] = false; //make index of array false
                                        setIsClicked(arrayOfBooleans); //set state of booleans
                                        sessionStorage.setItem('isClicked', JSON.stringify(arrayOfBooleans));
                                        addPlaylist.forEach((element,index) => {
                                            if(searchResults[theIndexOfTheElement].trackId===element.trackId){
                                                arrayOfSongsTwo.splice(index,1);
                                                setAddPlaylist(arrayOfSongsTwo)
                                            }
                                            
                                        });
                                      
                                        if(addPlaylist.length === 1){
                                            setAddToPlaylist(false)
                                        }

                                        const newArray = [...arrayOfSongsTwo]
                                        const newArrayString = JSON.stringify(newArray)
                                        console.log(newArrayString)
                                        sessionStorage.setItem('addPlaylist', newArrayString)
                                     
                                    }}/>
                                    <img src={element.albumPhoto} className={isClicked[index] ? "songPictureActive" : "songPictureDeactive"}  onClick={(e)=>{
                                    let count = 0;
                                    handleClick(index);//update the state of isclicked array when clicked
                                let array = []
                                if(count === 0){
                                    setAddPlaylist((previous)=>[element,...previous])
                                    array = [element,...addPlaylist]
                                }
                             
                                if(addPlaylist.length === 0){
                                    setAddToPlaylist(true)                               
                                }
                                const newArray = [...array]
                                const newArrayString = JSON.stringify(newArray)
                                console.log(newArrayString)
                                sessionStorage.setItem('addPlaylist', newArrayString)
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
