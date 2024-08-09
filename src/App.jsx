//import React from 'react';
// import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Components/HOmePage/HomePage.jsx'
import Authentication from './Components/Authentication/Authentication'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from './Store/Auth/Action.js'

function App() {
 
  const jwt = localStorage.getItem("email")
  console.log(jwt)
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    // if(auth.jwt){
      dispatch(getUserProfile(auth.jwt))
      navigate("/")
    // }
  },[auth.jwt])
  return (
    <>
      
    <Routes>
      <Route path="/*" element={auth.user?<HomePage/>:<Authentication/>}></Route>
      
    </Routes>
   
    </>
  )
}

export default App
