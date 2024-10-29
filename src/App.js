import logo from './logo.svg';
import './App.css'; 
import NavBar from "./Components/NavBar/navbar.js"
import React,{useState, useEffect} from "react";
import SearchPage from './Components/SearchPage/SearchPage.js';
import DemoAccount from './Components/DemoAccount/DemoAccount.js';
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Homepage from './Components/HomePage/homepage.js';

//function that removes code and eqaul sign from code being returned from spotify
function convertUrlIntoCode(url){
  let appendedString = "";
      for(let i = 6;i < url.length;i++){
          appendedString +=url[i]; 
      }
  return appendedString
}

// gets Auth code from spotify and storing it in variable 
const getAuthCode = window.location.search;

//Envolking function that stores the code inside variable
const code = convertUrlIntoCode(getAuthCode);

//Using app router variable to create routes for different components
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavBar />}>
     <Route path=""element={<Homepage />}>
        <Route path="demopopup" element={<DemoAccount />}/>
     </Route>
     
     <Route path={`home-page`} element={<SearchPage code={code}/>} />
     
  </Route>
))


//Returning the Routerprovider so the app can be render in index.js 
function App(){
    
  return (
    <RouterProvider router={appRouter} />
  );
}

//Exporting app component
export default App;
