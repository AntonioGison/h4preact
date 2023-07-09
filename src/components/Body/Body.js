import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="background">
      <img className="body_hero"
        src={require("./hp_first_left.svg").default}
        alt="Hack4pizza awards"
        width="500"
      />
      <div className="body_right">
          <p className="font">Hack. Win. Collect.</p>
    <form>
         <input className="body_input" type="text" id="first-name" name="first-name" placeholder="First Name" required />
         <input  className="body_input" type="text" id="last-name" name="last-name" placeholder="Last Name" required />
        <br/>
        <input className="body_input"  type="email" id="email" name="email" placeholder="Email Address" required />
         <br/>
        <input className="body_input"  type="password" id="password" name="password" placeholder="Password" required />
         <input  className="body_input" type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
        <br/>
        <input className="body_input"  type="text" id="city" name="city" placeholder="City" required />
        <br/>
        <div className="body_terms">
        <input type="checkbox" id="terms" name="terms" value="terms"/>
        <label htmlFor="terms">Accept Terms & Conditions</label>
        </div>
        <br />
        <input  className="body_btn_yellow" type="submit" value="SIGN UP" />
        <div className="body_social">
          <span className="body_before"></span>
          <span className="body_social_text">OR SIGN UP WITH</span>
          <span className="body_after"></span>
        </div>
        <div className="body_social_icons">
        <img
        src={require("./login_with_facebook.svg").default}
        alt="Hack4pizza facebook login"
      />
      <img
        src={require("./login_with_linkedin.svg").default}
        alt="Hack4pizza linkedin login"
      />
        <img
        src={require("./login_with_github.svg").default}
        alt="Hack4pizza github login"
      />
        </div>
    </form>
      </div>
    </div>
  );
}

export default Body;
