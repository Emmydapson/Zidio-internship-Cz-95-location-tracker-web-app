// import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import React,{Component} from "react"
import Login from  './components/login';
import Signup from './components/signup';

export default function App() {
  return (
   <Routes>
   

    <Route path="/" element={<Login />} />

    <Route path="/signup" element={<Signup />} />


    
    </Routes> 
  )
}
