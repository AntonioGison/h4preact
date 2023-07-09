
import './App.css';
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from '../Profile/Profile';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
