import React from "react";
import './Footer.css';
import FooterSocials from "./FooterSocials";

const Footer = (props) => {
  return (
    <footer>      
      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        {/* <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li> */}
        <li><a href="#qualification">Qualification</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <FooterSocials/>

      <div className="footer__copyright">
        <small>&copy; Guille García. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;
