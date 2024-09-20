import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar.js"
import React,{useState, useEffect} from "react";
import SearchPage from './SearchPage.js';
import LinkToSpotify from './LinkToSpotify.js';
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';

const getAuthCode = window.location.search;
const code = convertUrlIntoCode(getAuthCode);

function convertUrlIntoCode(url){
  let appendedString = "";
      for(let i = 6;i < url.length;i++){
          appendedString +=url[i]; 
      }
  return appendedString
}

function findCode(code){
  if (code.length === 0){
    return <Route index element={<LinkToSpotify />} />
  }
}


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavBar />}>
     {findCode(code)}
     <Route path={`search=${code}`} element={<SearchPage code={code}/>} />
  </Route>
))



function App(){
    
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
