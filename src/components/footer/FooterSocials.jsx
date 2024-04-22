import React from "react"
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/guilletheproductmanager/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/guillegarciac" target="_blank" rel="noreferrer"><BsGithub/></a>      
    </div>
  )
};

export default FooterSocials;
