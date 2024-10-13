import React from "react";
import "./Contact.css";
import { MdCall, MdMail } from "react-icons/md";
import { BsFillChatDotsFill, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">It's easy to contact us</span>
          <span className="secondaryText">
            Have any questions or need more information? Our team is here to
            help! Whether you're looking to buy, invest, or learn more about our
            properties, feel free to reach out to us.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">070 837 821 14</span>
                  </div>
                </div>
                <a href="tel:+2347083782114" className="flexCenter button">Call now</a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+2348033811419</span>
                  </div>
                </div>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=2348033811419" className="flexCenter button">Chat now</a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">@o2propertiesltd</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/o2propertiesltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="flexCenter button"
                >
                  view profile
                </a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdMail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText">o2propertiesltd</span>
                  </div>
                </div>
                <a
                  href="mailto:o2propertiesltd@gmail.com"
                  className="flexCenter button"
                >
                  Message now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./cmage.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
