import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar.js"
import SearchBar from "./searchBar.js"
import ExistingPlaylist from "./ExistingPlaylist.js"
import React,{useState, useEffect} from "react";


function SearchPage(){
    
    class Playlist{
        constructor(playlistName, playListId, tracksInPlaylist, playlistNumber){
            this._playlistName = playlistName;
            this._playListId = playListId;
            this._tracksInPlaylist = tracksInPlaylist;
            this._playlistNumber = playlistNumber;
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

    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);
    const emptyObject = new Track("","","","","")
    const [search, setSearch] = useState("");
    const [searchResults,setSearchResults] = useState([]);
    const [addPlaylist,setAddPlaylist] = useState([])
    const [array, setArray] = useState(["bob","sam", "kop"])
    const [name,setName] = useState("");
    const [arrayOfPlayistNamesAndIds, setArrayOfPlayistNamesAndIds] = useState([])
    const [playlistName, setPlaylistName] = useState("")
    const [result, setResult] = useState();
    const [counter, setCounter] = useState(0) 
    const [accessToken, setaccessToken] = useState("");
    const [authorizationCode, setauthorizationCode] = useState(code)
    const [accessTokenTwoo , setaccessTokenTwoo] = useState("") 
    const [accessTokenThree, setaccessTokenThree] = useState("")
    const [authorization, setAuthorization] = useState("")
    const [redirected, setRedirected] = useState("");
    const [playlistId, setPlaylistId] = useState("");
    const [createdPlaylist, setCreatedPlaylist] = useState([])
    const [test, setTest] = useState()
    const clientId = process.env.REACT_APP_D
    const clientSecret= process.env.REACT_APP_S
    const redirect_uri = "http://localhost:3000/home-page"
    const authString = btoa(`${clientId}:${clientSecret}`);
    const authorizationLink = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    const authorizationLinkTwo = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private user-read-email app-remote-control playlist-modify-public playlist-read-private playlist-modify-private playlist-modify-public`
    



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
                let sortedTracks = new Track(element.track.name,  element.track.artists[0].name, element.track.album.name, element.track.external_urls.spotify, element.track.id)
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
            
            
            data.items.forEach(async (element, index)=>{
                let tracks = await fecthTracksFromPlay(element)
                const playlistIdAndName = new Playlist(element.name, element.id, tracks, index);
                arrayOfPlayistNamesAndId.push(playlistIdAndName);
                setTest(element.name)
            })

            console.log(arrayOfPlayistNamesAndId)
            setArrayOfPlayistNamesAndIds(arrayOfPlayistNamesAndId);

        }catch(e){
            console.log(e)
        }

    }


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

    //Function that gets songs on search using the spotify api
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

        
    }

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

    function handleExistingPlaylist(e){
      
        let index = Number(e.target.getAttribute('data-values'))
        setAddPlaylist((prev)=>[ ...prev, ...arrayOfPlayistNamesAndIds[index].tracksInPlaylist]);
    }
   
  return (
      <>
      <SearchBar getAuthForPlaylist={getAuthForPlaylist} makePlaylist={makePlaylist} handlerSubmit={handlerSubmit} setSearch={setSearch} setPlaylistName={setPlaylistName} setAddPlaylist={setAddPlaylist} searchResults={searchResults} addPlaylist={addPlaylist} resetResults={resetResults}  />
      <ExistingPlaylist  handlerL={handlerL} arrayOfPlayistNamesAndIds={arrayOfPlayistNamesAndIds} test = {test} handleExistingPlaylist={handleExistingPlaylist} />
      </>
  );
}

export default SearchPage;
