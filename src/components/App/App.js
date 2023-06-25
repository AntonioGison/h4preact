import React from "react";
import './App.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import Howitworks from '../Howitworks/Howitworks';
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
        <Navbar />
        <Body />
        <Howitworks />
        <Footer />
    </div>
  );
}

export default App;
