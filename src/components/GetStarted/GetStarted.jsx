import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with O2 Properties</span>
          <span className="secondaryText">
            Get started today and unlock access to exclusive, unbeatable price
            quotes on our premium properties.
            <br />
            Be the first to discover the best deals we have to offer!
          </span>
          <button className="button" href>
            <a href="mailto:o2properties@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
