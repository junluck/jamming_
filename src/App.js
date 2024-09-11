import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar.js"
import SearchBar from "./searchBar.js"
import ExistingPlaylist from "./ExistingPlaylist.js"
import React,{useState, useEffect} from "react";


function App(){
    class Playlist{
        constructor(playlistName, playListId){
            this._playlistName = playlistName;
            this._playListId = playListId;
        }

        get playlistName(){
            return this._playlistName;
        }

        get playListId(){
            return this._playListId;
        }
    }

    class Track{
        constructor(songName, artist, album, link, trackId){
          this._songName = songName;
          this._artist = artist;
          this._album = album;
          this._link = link;
          this._trackId = trackId
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
        
      
      }

    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
    }

    const emptyObject = new Track("","","","","")
    const [search, setSearch] = useState("");
    const [searchResults,setSearchResults] = useState([]);
    const [addPlaylist,setAddPlaylist] = useState([])
    const [array, setArray] = useState(["bob","sam", "kop"])
    const [name,setName] = useState("");
    const [playlistName, setPlaylistName] = useState("")
    const [result, setResult] = useState();
    const [counter, setCounter] = useState(0) 
    const [accessToken, setaccessToken] = useState("");
    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);
    const [authorizationCode, setauthorizationCode] = useState(code)
    const [accessTokenTwoo , setaccessTokenTwoo] = useState("") 
    const [authorization, setAuthorization] = useState("")
    const [redirected, setRedirected] = useState("");
    const [playlistId, setPlaylistId] = useState("");
    const [createdPlaylist, setCreatedPlaylist] = useState([])
    const clientId = process.env.REACT_APP_D
    const clientSecret= process.env.REACT_APP_S
    const redirect_uri = "http://localhost:3000/"
    const authString = btoa(`${clientId}:${clientSecret}`);
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=playlist-modify-public user-read-private`
   
    console.log(clientId)
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

    async function getExistingPlaylist(accessToken){
       
        const url= "https://api.spotify.com/v1/me"
        const endpoint = "/playlists"
        const arrayOfPlayistNamesAndIds = []
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
            console.log(data.items[0])
            data.items.forEach((element)=>{
                const playlistIdAndName = new Playlist(element.name, element.id);
                arrayOfPlayistNamesAndIds.push(playlistIdAndName);

            })
            return arrayOfPlayistNamesAndIds;

        }catch(e){
            console.log(e)
        }

    }

  
    useEffect(()=>{
        const getData = async()=>{
            const data = await getExistingPlaylist(accessTokenTwoo)
            
            
        }
        getData()

  
    },[accessTokenTwoo])
    

    async function handlerL(){

        setCounter((prev)=> prev + 1)
        console.log(counter)
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
                        "redirect_uri": `http://localhost:3000/`
    
                    })
                })
                if(!response.ok){
                    console.log("Error");
                }
    
                const data = await response.json();
                const token = data.access_token;
                console.log(token)
                setaccessTokenTwoo(token)
                
            }catch(e){
                console.log(`Error: ${e}`);
            }

            
        }
    }

    async function getSong(search){
        let key;
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
                        "redirect_uri": `http://localhost:3000/`
    
                    })
                })
                if(!response.ok){
                    console.log("Error");
                }
    
                const data = await response.json();
                const token = data.access_token;
                setaccessTokenTwoo(token)
                
            }catch(e){
                console.log(`Error: ${e}`);
            }

            
        }
        console.log(accessTokenTwoo)
        let arrayOfObjects = []
        const access_Obj = await getAuth();
        const accessToken = access_Obj.access_token;
        setaccessToken(accessToken);
        const endpoint = "/search?q=";
        const url = "https://api.spotify.com/v1"
        const id = `${search}&type=track&limit=19`
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
        console.log(artist)
        artist.tracks.items.forEach(element => {

            const songInformation = new Track(element.name, element.artists[0].name, element.album.name, element.external_urls.spotify,element.id)
            arrayOfObjects.push(songInformation)

          });
          
          return arrayOfObjects
        
      }catch(e){
        console.log(`Error: ${e}`)
      }
       
    }
   
    
   
   

    async function makePlaylist(){
       
        const userName  = "jun78621";
        const endpoint = "/playlists";
        const url = "https://api.spotify.com/v1/users/jun78621/playlists";
        let playid = "";
        try{    
        const response = await fetch(`https://api.spotify.com/v1/users/jun78621/playlists`,{
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

        
    }

    //window.onload =  makePlaylist

    async function handlerSubmit(e){
        e.preventDefault()
        if(search!==""){
        const array = await getSong(search)
        setSearchResults(array)
        console.log(array)
        console.log(searchResults)
        setName(array[0].artist
        
        )}
    }

    function resetResults(){
        setSearchResults([]);
        
    }

    
   
  return (
      <>
      <NavBar />
      <SearchBar getAuthForPlaylist={getAuthForPlaylist} makePlaylist={makePlaylist} handlerSubmit={handlerSubmit} setSearch={setSearch} setPlaylistName={setPlaylistName} setAddPlaylist={setAddPlaylist} searchResults={searchResults} addPlaylist={addPlaylist} resetResults={resetResults}  />
      <ExistingPlaylist  handlerL={handlerL} />
      </>
  );
}

export default App;
