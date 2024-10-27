import React, { useState } from "react";
import "./Header.css";
import { BiMailSend, BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { BsMailbox, BsMailbox2 } from "react-icons/bs";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./nwlg.png" alt="logo" width={70} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a
              onClick={() => {
                setMenuOpened(false);
              }}
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => {
                setMenuOpened(false);
              }}
              href="#services"
            >
              Services
            </a>
            <a
              onClick={() => {
                setMenuOpened(false);
              }}
              href="#residencies"
            >
              Residencies
            </a>
            <a
              onClick={() => {
                setMenuOpened(false);
              }}
              href="#value"
            >
              Why Us
            </a>
            <a
              onClick={() => {
                setMenuOpened(false);
              }}
              href="#contact-us"
            >
              Contact Us
            </a>
            <button
              onClick={() => {
                setMenuOpened(false);
              }}
              className="button"
            >
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "18px",
                }}
                href="mailto:o2propertiesltd@gmail.com"
              >
                <BsMailbox2 /> Mail
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
