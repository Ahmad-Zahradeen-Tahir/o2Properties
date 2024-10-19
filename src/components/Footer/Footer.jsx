import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./o2logo.jpg" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to help you <br />
            find your perfect home.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Shagari plaza area 1, Abuja, Nigeria.
          </span>
          <div className="flexCenter f-menu">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#residencies">Residencies</a>
            <a href="#value">Why Us</a>
            <a href="#contact-us">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
