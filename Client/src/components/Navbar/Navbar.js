import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({authState}) {
  const { isAuthenticated, setIsAuthenticated } = authState;

  return (
    <nav>
  
      <Link to="/" className="nav_logo">
        <img src={require("./logo.svg").default} alt="Hack4Pizza" />
      </Link>
      <div className="nav_right">
        <input id="email" className="nav_input" type="email" placeholder="Enter Email address" />

        <div className="nav_container">
          <div className="nav_passcontainer">
            <input id="password" className="nav_input" type="password" placeholder="Enter Password" />
            <Link to="/a">Forgot Password?</Link>
          </div>
          <>
          {
          isAuthenticated ? (
            <Link to="/" onClick={() => setIsAuthenticated(false)} className="nav_button">
              LOGOUT
            </Link>
            ) : (
            <Link to="/profile" onClick={() => setIsAuthenticated(true)} className="nav_button">
              LOGIN
            </Link>
          )}
          </>
         
          <button className="nav_mobilebutton">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
