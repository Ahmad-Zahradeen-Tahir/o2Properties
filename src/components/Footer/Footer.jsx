import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdCall, MdMail } from "react-icons/md";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./flimg.jpg" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to help you <br />
            find your perfect home.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText info">
            <IoLocationOutline />
            Shagari plaza, area 1, Garki, Abuja Nigeria.
          </span>
          <span className="secondaryText info">
            <MdCall />
            +234 708 378 2114
          </span>
          <span className="secondaryText info">
            <MdMail />
            o2propertiesltd@gmail.com
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
