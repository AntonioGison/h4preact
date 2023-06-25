import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="changeitlater" className="nav_logo">
        <img src={require("./logo.svg").default} alt="Hack4Pizza" />
      </a>
      <div className="nav_right">
        <input className="nav_input" type="email" placeholder="Enter Email address" />

        <div className="nav_container">
          <div className="nav_passcontainer">
            <input className="nav_input" type="password" placeholder="Enter Password" />
            <a href="changeitlater">Forgot Password?</a>
          </div>
          <button className="nav_button">LOGIN</button>
          <button className="nav_mobilebutton">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
