
import './App.css';
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from '../Profile/Profile';

const App = () => {

const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <Router>
      <Navbar authState={{ isAuthenticated, setIsAuthenticated }} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={ !isAuthenticated ? <Home /> : <Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
