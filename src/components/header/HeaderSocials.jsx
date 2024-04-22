import React from "react"
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/guilletheproductmanager/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/guillegarciac" target="_blank" rel="noopener noreferrer"><BsGithub/></a>      
    </div>
  )
};

export default HeaderSocials;
