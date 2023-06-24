import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="changeitlater" className="logo">
        <img src={require("./logo.svg").default} alt="Hack4Pizza" />
      </a>
      <div className="right">
        <input type="email" placeholder="Enter Email address" />

        <div className="container">
          <div className="passcontainer">
            <input type="password" placeholder="Enter Password" />
            <a href="changeitlater">Forgot Password?</a>
          </div>
          <button>LOGIN</button>
          <button className="mobilebutton">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
