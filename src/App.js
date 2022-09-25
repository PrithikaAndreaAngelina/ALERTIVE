import React from "react";
import Home from './Home';
import Login from './Login';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
      <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
                </Routes>
  )
}
export default App;
