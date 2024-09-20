 import React from "react";
 import "./navbar.css"
 import { Outlet } from "react-router-dom";
 import { useNavigate, Navigate } from "react-router-dom";

 function NavBar(){

    function convertUrlIntoCode(url){
        let appendedString = "";
            for(let i = 6;i < url.length;i++){
                appendedString +=url[i]; 
            }
        return appendedString
    }

    const getAuthCode = window.location.search;
    const code = convertUrlIntoCode(getAuthCode);
    const navigate = useNavigate();
    function navigateToHomepage(){
        if(code.length > 0){
           return <Navigate to={`search=${code}`}/>
        }
    }
    

    return(
        <div>
            <h1 className="mainHeading">Ja<span className="mmm">mmm</span>ing</h1>
            {navigateToHomepage()}
            <Outlet/>

        </div>
    )
 }

 export default NavBar