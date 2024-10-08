 import React from "react";
 import "./navbar.css"
 import { Outlet } from "react-router-dom";
 import { useNavigate, Navigate , Link} from "react-router-dom";

 function NavBar(){
    return(
        <div>
            <Link className="mainHeading" to="/"><img src="logo.svg" className="logo"/></Link>
            <Outlet />

        </div>
    )
 }

 export default NavBar