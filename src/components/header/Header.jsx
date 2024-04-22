import React from "react"
import './Header.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import profilepicturenobg from '../../assets/profilepicturenobg.png'

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Guille García</h1>
        <h5 className="text-light">Director of Product & Full-Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="profile-picture">
          <img src={profilepicturenobg} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
};

export default Header;
