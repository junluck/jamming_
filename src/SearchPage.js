import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar.js"
import MyPlaylist from './myPlaylist.js';
import SearchBar from "./searchBar.js"
import ExistingPlaylist from "./ExistingPlaylist.js"
import React,{useState, useEffect} from "react";
import "./SearchPage.css"
import Search from './search.js';

function SearchPage(){
    
    class Playlist{
        constructor(playlistName, playListId, tracksInPlaylist, playlistNumber,playlistPhoto,isClicked){
            this._playlistName = playlistName;
            this._playListId = playListId;
            this._tracksInPlaylist = tracksInPlaylist;
            this._playlistNumber = playlistNumber;
            this._playlistPhoto = playlistPhoto
            this._isClicked = isClicked;
        }

        get playlistName(){
            return this._playlistName;
        }

        get playListId(){
            return this._playListId;
        }

        get tracksInPlaylist(){
            return this._tracksInPlaylist;
        }

        set tracksInPlaylist(element){
            this._tracksInPlaylist = element;
        }

        get playlistNumber(){
            return this._playlistNumber;
        }

        get playlistPhoto(){
            return this._playlistPhoto
        }
        
        get isClicked(){
            return this._isClicked
        }
    

        
    }

    class Track{
        constructor(songName, artist, album, link, trackId, albumPhoto){
          this._songName = songName;
          this._artist = artist;
          this._album = album;
          this._link = link;
          this._trackId = trackId;
          this._albumPhoto = albumPhoto;
        }
      
        get songName(){
          return this._songName;
        }
      
        get artist(){
          return this._artist;
        }
      
        get album(){
          return this._album ;
        }
      
        get link(){
          return this._link 
        }
      
        get trackId(){
            return this._trackId 
          }
        
        get albumPhoto(){
            return this._albumPhoto
        }
      }

    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
      }


        async function getSong(search){
        
            console.log(authorizationCode)
            if (accessTokenTwoo === ""){
                try{
                    const response = await fetch("https://accounts.spotify.com/api/token",{
                    method:"POST",
                    headers:{
                        "Authorization": `Basic ${authString}`,
                        "Content-Type":'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                            "grant_type":"authorization_code",
                            "code": `${authorizationCode}`,
                            "redirect_uri": `http://localhost:3000/home-page`
        
                        })
                    })
                    if(!response.ok){
                        console.log("Error");
                    }
        
                    const data = await response.json();
                    const token = data.access_token;
                    console.log(data)
                    setaccessTokenTwoo(token)
                    localStorage.setItem("token",token)

                }catch(e){
                    console.log(`Error: ${e}`);
                }

                
            }
            
            let arrayOfObjects = []
            const access_Obj = await getAuth();
            const accessToken = access_Obj.access_token;
            setaccessToken(accessToken);
            const endpoint = "/search?q=";
            const url = "https://api.spotify.com/v1"
            const id = `${search}&type=track&limit=10`
            try{
            
            const response=await fetch(`${url}${endpoint}${id}`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${accessToken}`

                }
            })
            if(!response.ok){
                console.log("error")
            }
            
            const artist = await response.json()
            console.log(artist.tracks.items[0])
            artist.tracks.items.forEach(element => {

                const songInformation = new Track(element.name, element.artists[0].name, element.album.name, element.external_urls.spotify,element.id,element.album.images[0].url)
                arrayOfObjects.push(songInformation)

          });
          
          return arrayOfObjects
        
      }catch(e){
        console.log(`Error: ${e}`)
      }
       
    }
    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);
    const emptyObject = new Track("","","","","")
    const [search, setSearch] = useState("");
    const [searchResults,setSearchResults] = useState([
        new Track("Guess featuring Billie Eilish", "Charli XCX", "Guess featuring Billie Eilish", "https://open.spotify.com/track/3WOhcATHxK2SLNeP5W3v1v", "3WOhcATHxK2SLNeP5W3v1v", "https://i.scdn.co/image/ab67616d0000b2731ac297d16bee7cf072601a21"),
        new Track("Good Luck, Babe!", "Chappell Roan", "Good Luck, Babe!", "https://open.spotify.com/track/0WbMK4wrZ1wFSty9F7FCgu", "0WbMK4wrZ1wFSty9F7FCgu", "https://i.scdn.co/image/ab67616d0000b27391b4bc7c88d91a42e0f3a8b7"),
        new Track("Good Graces", "Sabrina Carpenter", "Short n' Sweet", "https://open.spotify.com/track/102YUQbYmwdBXS7jwamI90", "102YUQbYmwdBXS7jwamI90", "https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626"),
        new Track("Gata Only", "FloyyMenor", "Gata Only", "https://open.spotify.com/track/6XjDF6nds4DE2BBbagZol6", "6XjDF6nds4DE2BBbagZol6", "https://i.scdn.co/image/ab67616d0000b273c4583f3ad76630879a75450a"),
        new Track("HOT TO GO!", "Chappell Roan", "The Rise and Fall of a Midwest Princess", "https://open.spotify.com/track/4xdBrk0nFZaP54vvZj0yx7", "4xdBrk0nFZaP54vvZj0yx7", "https://i.scdn.co/image/ab67616d0000b27396fa88fb1789be437d5cb4b6"),
        new Track("greedy", "Tate McRae", "greedy", "https://open.spotify.com/track/3rUGC1vUpkDG9CZFHMur1t", "3rUGC1vUpkDG9CZFHMur1t", "https://i.scdn.co/image/ab67616d0000b27322fd802bc61db666c7c81aa8"),
        new Track("Girls", "The Dare", "The Sex EP", "https://open.spotify.com/track/6WpZwkzyjINc6wDghg8Gzv", "6WpZwkzyjINc6wDghg8Gzv", "https://i.scdn.co/image/ab67616d0000b273902a7e451c257ffb996e1e6d"),
        new Track("Good Looking", "Suki Waterhouse", "Good Looking", "https://open.spotify.com/track/0j3mqDTK4Z6lvrLzFCUUz6", "0j3mqDTK4Z6lvrLzFCUUz6", "https://i.scdn.co/image/ab67616d0000b27343bff43a592efe047d2ab9ff"),
        new Track("Girl, so confusing featuring lorde", "Charli XCX", "Girl, so confusing featuring lorde", "https://open.spotify.com/track/2YFhqZvhTpyK13gKXMKV7R", "2YFhqZvhTpyK13gKXMKV7R", "https://i.scdn.co/image/ab67616d0000b2738de3b7558f97bcb9b06fdf9b"), 
        new Track("Get You (feat. Kali Uchis)", "Daniel Caesar", "Freudian", "https://open.spotify.com/track/7zFXmv6vqI4qOt4yGf3jYZ", "7zFXmv6vqI4qOt4yGf3jYZ", "https://i.scdn.co/image/ab67616d0000b2733138f891f3075c9c5d944037")
      ]);
    const [addPlaylist,setAddPlaylist] = useState([])
    const [array, setArray] = useState(["bob","sam", "kop"])
    const [name,setName] = useState("");
    const [arrayOfPlayistNamesAndIds, setArrayOfPlayistNamesAndIds] = useState([])
    const [playlistName, setPlaylistName] = useState("")
    const [result, setResult] = useState();
    const [isClickedTwo,setIsClickedTwo] = useState([])
    const [isClickedThree,setIsClickedThree] = useState([])
    const [resultHeading, setResultHeading] = useState("Recommended songs")
    const [counter, setCounter] = useState(0) 
    const [accessToken, setaccessToken] = useState("");
    const [authorizationCode, setauthorizationCode] = useState(code)
    const [accessTokenTwoo , setaccessTokenTwoo] = useState("") 
    const [accessTokenThree, setaccessTokenThree] = useState("")
    const [authorization, setAuthorization] = useState("")
    const [redirected, setRedirected] = useState("");
    const [playlistId, setPlaylistId] = useState("");
    const [createdPlaylist, setCreatedPlaylist] = useState([])
    const [defaultSongs, setdefaultSongs] = useState([])
    const [isClicked, setIsClicked] = useState([false,false,false,false,false,false,false,false,false,false]);
    const [loading,setLoading] = useState(false)
    const [test, setTest] = useState()
    const clientId = process.env.REACT_APP_D
    const clientSecret= process.env.REACT_APP_S
    const redirect_uri = "http://localhost:3000/home-page"
    const authString = btoa(`${clientId}:${clientSecret}`);
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    const authorizationLinkTwo = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    const [searchResultsTwo, setSearchResultsTwo] = useState([ 
        new Track("Guess featuring Billie Eilish", "Charli XCX", "Guess featuring Billie Eilish", "https://open.spotify.com/track/3WOhcATHxK2SLNeP5W3v1v", "3WOhcATHxK2SLNeP5W3v1v", "https://i.scdn.co/image/ab67616d0000b2731ac297d16bee7cf072601a21"),
        new Track("Good Luck, Babe!", "Chappell Roan", "Good Luck, Babe!", "https://open.spotify.com/track/0WbMK4wrZ1wFSty9F7FCgu", "0WbMK4wrZ1wFSty9F7FCgu", "https://i.scdn.co/image/ab67616d0000b27391b4bc7c88d91a42e0f3a8b7"),
        new Track("Good Graces", "Sabrina Carpenter", "Short n' Sweet", "https://open.spotify.com/track/102YUQbYmwdBXS7jwamI90", "102YUQbYmwdBXS7jwamI90", "https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626"),
        new Track("Gata Only", "FloyyMenor", "Gata Only", "https://open.spotify.com/track/6XjDF6nds4DE2BBbagZol6", "6XjDF6nds4DE2BBbagZol6", "https://i.scdn.co/image/ab67616d0000b273c4583f3ad76630879a75450a"),
        new Track("HOT TO GO!", "Chappell Roan", "The Rise and Fall of a Midwest Princess", "https://open.spotify.com/track/4xdBrk0nFZaP54vvZj0yx7", "4xdBrk0nFZaP54vvZj0yx7", "https://i.scdn.co/image/ab67616d0000b27396fa88fb1789be437d5cb4b6"),
        new Track("greedy", "Tate McRae", "greedy", "https://open.spotify.com/track/3rUGC1vUpkDG9CZFHMur1t", "3rUGC1vUpkDG9CZFHMur1t", "https://i.scdn.co/image/ab67616d0000b27322fd802bc61db666c7c81aa8"),
        new Track("Girls", "The Dare", "The Sex EP", "https://open.spotify.com/track/6WpZwkzyjINc6wDghg8Gzv", "6WpZwkzyjINc6wDghg8Gzv", "https://i.scdn.co/image/ab67616d0000b273902a7e451c257ffb996e1e6d"),
        new Track("Good Looking", "Suki Waterhouse", "Good Looking", "https://open.spotify.com/track/0j3mqDTK4Z6lvrLzFCUUz6", "0j3mqDTK4Z6lvrLzFCUUz6", "https://i.scdn.co/image/ab67616d0000b27343bff43a592efe047d2ab9ff"),
        new Track("Girl, so confusing featuring lorde", "Charli XCX", "Girl, so confusing featuring lorde", "https://open.spotify.com/track/2YFhqZvhTpyK13gKXMKV7R", "2YFhqZvhTpyK13gKXMKV7R", "https://i.scdn.co/image/ab67616d0000b2738de3b7558f97bcb9b06fdf9b"), 
        new Track("Get You (feat. Kali Uchis)", "Daniel Caesar", "Freudian", "https://open.spotify.com/track/7zFXmv6vqI4qOt4yGf3jYZ", "7zFXmv6vqI4qOt4yGf3jYZ", "https://i.scdn.co/image/ab67616d0000b2733138f891f3075c9c5d944037")
      ])



    async function getAuth(){
        try{
            const response = await fetch("https://accounts.spotify.com/api/token",{
            method:"POST",
            headers:{
                "Authorization": `Basic ${authString}`,
                "Content-Type":'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                "grant_type":"client_credentials"
                })
            })
            if(!response.ok){
                console.log("Error");
            }

            const data = await response.json();

            return data;
        }catch(e){
            console.log(`Error: ${e}`);
        }
    }
 

    async function getAuthForPlaylist(){
        window.location.href=authorizationLink 
    }

    
    async function getsSongsFromPlaylist(playlistId){
        try{
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${accessTokenTwoo}` 
                }

            })
            if(!response.ok){
                console.log("Error")
                }
            const data = await response.json();
            console.log(data.items)
            return data.items;

        }catch(e){
            console.log(e)
        }

    }
        async function fecthTracksFromPlay(ele){
        
            let tracks = await getsSongsFromPlaylist(ele.id);
            console.log(tracks)
            let tracksSorted = tracks.map((element)=>{
                let images = "./no image.svg"
                if(element.track.album.images.length > 0 ){
                    images =  element.track.album.images[0].url
                }
                let sortedTracks = new Track(element.track.name,  element.track.artists[0].name, element.track.album.name, element.track.external_urls.spotify, element.track.id,images)
                return sortedTracks
        })
            return tracksSorted
       
        
    }

    async function getExistingPlaylist(accessToken){
        const url= "https://api.spotify.com/v1/me"
        const endpoint = "/playlists"
        const arrayOfPlayistNamesAndId = []
        try{
            const response = await fetch(`${url}${endpoint}`,{
                method:"GET",
                headers:{
                    
                    "Authorization":`Bearer ${accessToken}`,
                    "Content-Type":`application/json`
                },
            })

            if(!response.ok){
                console.log("Error");
            }
            
         

            const data = await response.json();
            console.log(data)
            
            data.items.forEach(async (element, index)=>{
                let tracks = await fecthTracksFromPlay(element)
                const playlistIdAndName = new Playlist(element.name, element.id, tracks, index,element.images[0].url,false);
                arrayOfPlayistNamesAndId.push(playlistIdAndName);
                setTest(element.name)
            })

         

            setArrayOfPlayistNamesAndIds(arrayOfPlayistNamesAndId);
            let arrayOfBooleans = data.items.map((e)=>{
                return false
            })
            setIsClickedTwo(arrayOfBooleans);
            setIsClickedThree(arrayOfBooleans);
        }catch(e){
            console.log(e)
        }
       
    }

    useEffect(()=>{
        setLoading(false)
    },[arrayOfPlayistNamesAndIds])

    useEffect(()=>{
        console.log(accessTokenTwoo)
        const getData = async()=>{
            const data = await getExistingPlaylist(accessTokenTwoo)
            
            
        }
        
        if(accessTokenTwoo){
            getData()  
        }
       
       
    },[accessTokenThree])
    

    async function handlerL(){
        console.log(code)
        
        if (accessTokenTwoo === "" ){
            setLoading(true)
            try{
                const response = await fetch("https://accounts.spotify.com/api/token",{
                method:"POST",
                headers:{
                    "Authorization": `Basic ${authString}`,
                    "Content-Type":'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                        "grant_type":"authorization_code",
                        "code": `${code}`,
                        "redirect_uri": `http://localhost:3000/home-page`
    
                    })
                })
                if(!response.ok){
                    console.log("Error");
                }
    
                const data = await response.json();
                const token = data.access_token;



                setaccessTokenTwoo(token)
                setaccessTokenThree(token)
                
            }catch(e){
                console.log(`Error: ${e}`);
            }

           
        }
        const playlist = await getExistingPlaylist(accessTokenTwoo);
       


         
    }

   
    function arrowDown(e){
        let index = Number(e.target.getAttribute('data-values'));
        let arrayOfBools = [...isClickedThree];
        arrayOfBools[index] = !arrayOfBools[index];
        setIsClickedThree(arrayOfBools);
    }
   
   
    //Function that submits songs to playlist and makes a new playist or updates existing
    async function makePlaylist(){
        async function getUsername(){
            console.log(accessTokenTwoo)
            try{
                const response = await fetch("https://api.spotify.com/v1/me",{
                    method:"GET",
                    headers:{
                        "Authorization":`Bearer ${accessTokenTwoo}`,
                        'Content-Type': 'application/json'
                    }

                })

                if(!response.ok){
                    console.log("error")
                }

                const data = await response.json()
                return data.id
            }catch(e){

            }
        } 
       
        
        const userName  = await getUsername();
       

        let playid = "";
        try{    
        const response = await fetch(`https://api.spotify.com/v1/users/${userName}/playlists`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${accessTokenTwoo}`,
                "Content-Type":`application/json`
            },
            body:JSON.stringify({
                "name":playlistName,
                "description":"myPlaylist",
                "public": true
            })
            
        })

        if(!response.ok){
                console.log(`error ${response.ok}`)
        }
        const data = await response.json()
        console.log(data)
        playid = data.id;
        }catch(error){
            console.log(error)
        } 
        let tracksArray = addPlaylist.map((element)=>{
            return "spotify:track:"+element.trackId ;
        })
        try{
            console.log(tracksArray)
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playid}/tracks`, {
                method:"POST",
                headers:{
                    
                    "Authorization":`Bearer ${accessTokenTwoo}`,
                    "Content-Type":`application/json`
                },
                body:JSON.stringify({
                    "uris":tracksArray,
                    "position": 0
                })
            })
        }catch(error){
            console.log(error)
        }
        setAddPlaylist([]);
        setIsClicked([false,false,false,false,false,false,false,false,false,false]);
        
    }

    async function handlerSubmit(e){
        e.preventDefault()
        if(search!==""){
            const array = await getSong(search)
            setSearchResults(array)
            setSearchResultsTwo(array)
            setName(array[0].artist)
            setIsClicked([false,false,false,false,false,false,false,false,false,false]);
            setResultHeading("Results")
        }
    }

    function resetResults(){
        setSearchResults([]);
        
    }

    function handleExistingPlaylist(e){
      
        let index = Number(e.target.getAttribute('data-values'))
        setAddPlaylist((prev)=>[ ...prev, ...arrayOfPlayistNamesAndIds[index].tracksInPlaylist]);
        let arrayofbool = [...isClickedTwo];
        arrayofbool[index] =  arrayofbool[index]
        setIsClickedTwo(arrayofbool)
        console.log(arrayOfPlayistNamesAndIds)
    }
   
  return (
      <div className='components'>
        <div className='searching'>
            <Search  handlerSubmit={handlerSubmit} setSearch={setSearch}/>
        </div>
        <div className='search'>
            <SearchBar getAuthForPlaylist={getAuthForPlaylist} makePlaylist={makePlaylist} handlerSubmit={handlerSubmit} setSearch={setSearch} setPlaylistName={setPlaylistName} setAddPlaylist={setAddPlaylist} searchResults={searchResults} addPlaylist={addPlaylist} resetResults={resetResults}  setSearchResults={setSearchResults} searchResultsTwo={searchResultsTwo} isClicked={isClicked} setIsClicked={setIsClicked} resultHeading={resultHeading} className/>
        </div>
        <div className='playlists'>
            <MyPlaylist setAddPlaylist = {setAddPlaylist} setPlaylistName={setPlaylistName} makePlaylist={makePlaylist} addPlaylist={addPlaylist} isClicked={isClicked} setIsClicked={setIsClicked} searchResults={searchResults} />
        </div>
        <div className='existingPlay'>
            <ExistingPlaylist handlerL={handlerL} arrayOfPlayistNamesAndIds={arrayOfPlayistNamesAndIds} handleExistingPlaylist={handleExistingPlaylist} isClickedTwo={isClickedTwo} arrowDown={arrowDown} isClickedThree={isClickedThree} loading={loading} setLoading={setLoading}/>
        </div>
      </div>
  );
}

export default SearchPage;
