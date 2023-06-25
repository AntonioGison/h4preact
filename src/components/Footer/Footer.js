import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_col">
          <h3>Social Links</h3>
          <div className="footer_row">
            <img
              src={require("./ft_facebook.svg").default}
              alt="facebook social"
            ></img>
            <p>Facebook</p>
          </div>

          <div className="footer_row">
            <img
              src={require("./ft_instagram.svg").default}
              alt="instagram social"
            ></img>
            <p>Instagram</p>
          </div>

          <div className="footer_row">
            <img
              src={require("./ft_twitter.svg").default}
              alt="twitter social"
            ></img>
            <p>Twitter</p>
          </div>
        </div>

        <div className="footer_col">
          <h3>Menu</h3>
          <p>Sign Up</p>
          <p>Login</p>
          <p>How it Works</p>
          <p>Privacy policy</p>
        </div>

        <div className="footer_col">
          <h3>App</h3>
          <img
            width="200em"
            src={require("./ft_app_store.svg").default}
            alt="download the app in the App store"
          ></img>
          <img
            width="200em"
            src={require("./ft_play_store.svg").default}
            alt="download the app in the Play store"
          ></img>
        </div>
      </div>

      <div className="footer_bot">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
