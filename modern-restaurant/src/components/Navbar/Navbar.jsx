import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.gericht} alt="" /> */}
        <h1>Soltan</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Başy</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Biz hakda</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menýu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Baýraklar</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Habarlaşmak</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Registrasiýa
        </a>
        <div />
        <a href="/" className="p__opensans">
          Stol bronlamak
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="overlay__menu"
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Başy</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Biz hakda</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menýu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Baýraklar</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Habarlaşmak</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
