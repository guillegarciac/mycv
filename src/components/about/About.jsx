import React, { useState, useEffect } from "react";
import './About.css';
import AboutCard from "./AboutCard";
import profilePicture1 from '../../assets/profilepicture-1.jpg'; // assuming you have this image
import profilePicture2 from '../../assets/profilepicture-2.jpg';
import profilePicture3 from '../../assets/profilepicture-3.jpg'; // assuming you have this image
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';

const About = () => {
  const images = [profilePicture1, profilePicture2, profilePicture3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <img src={images[currentImageIndex]} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              Icon={FaAward}
              title="Experience"
              subtitle={[
                "2+ Years Full Stack Developer",
                "8+ Years Product Management"
              ]}
            />
            <AboutCard
              Icon={FaUsers}
              title="Clients"
              subtitle={[
                "+20 Projects",
                "+7 Countries"
              ]}
            />
            <AboutCard
              Icon={FaFolderOpen}
              title="Projects"
              subtitle={[
                "Full Stack Developer",
                "Hands-on Consultant",
                "Product Design & Management"
              ]}
            />
          </div>
          <p>I'm Guille! I have 10+ years of experience working in software & IT, with roles ranging from Account Manager to Director of Product. I excel in transforming good ideas into successful executions, specializing in agile software product development—from concept through to production. Recognized for my cross-functional team leadership and commitment to customer-focused solutions, I identify and leverage selling opportunities effectively.
          <br />
          <br />
          Colleagues and leaders value my dedication and problem-solving skills, while clients appreciate my quick, intelligent, and supportive approach. Skilled at managing multiple projects simultaneously, I thrive in dynamic, challenging environments.
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk</a>

        </div>

      </div>
    </section>
  );
};

export default About;
