import React from "react";
import "./Howitworks.css";

function Howitworks() {
  return (
    <div className="how_container">
      <div className="how_fix_container">
        <div className="how_co_container">
          <div>
            <h2 className="how_left">How it works</h2>
            <p>Keep track and collect your Hackathons!</p>
            <p>it's like Linkedin but with Hackathons</p>
          </div>

          <div className="co_co_container">
            <div>
              <img
                src={require("./location_pin.svg").default}
                alt="Here for pizza Badge"
              ></img>
            </div>
            <div>
              <h3 className="how_right">Are you a Noob with no wins?</h3>
              <p>No problem! you can unlock the here for the pizza badge!</p>
            </div>
          </div>
        </div>
        <div className="co_co_co_container">

          <div>
            <img
              src={require("./step1.svg").default}
              alt="Here for pizza Badge"
            ></img>
            <h3 className="space">Step 1</h3>
            <p>Add the attended hackathon to your collection with all the information you want</p>
          </div>

          <div>
            <img
              src={require("./step2.svg").default}
              alt="Here for pizza Badge"
            ></img>
            <h3 className="space">Step 2</h3>
            <p>Unlock and collect badges!</p>
          </div>

          <div>
            <img
              src={require("./step3.svg").default}
              alt="Here for pizza Badge"
            ></img>
            <h3 className="space">Step 3</h3>
            <p>Share your profile with friends, family and potential Big tech willing to hire you!</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Howitworks;
