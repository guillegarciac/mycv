import React from "react";
import './Portfolio.css';
import atmineapp from '../../assets/atmineapp.jpg';
import devaultapp from '../../assets/devaultapp.jpg';
import supercharge from '../../assets/supercharge.jpg';
import playground from '../../assets/playground.jpg';


const Portfolio = () => {
  const projects = [
    {
      name: "atmine-app (mobile only)",
      url: "https://atmine-app.netlify.app/",
      image: atmineapp,
      description: "Launched a venue rental marketplace that connects clients with venue managers, making it easy for everyone to book events."
    },
    {
      name: "devault-app",
      url: "https://devault-app.fly.dev/",
      image: devaultapp,
      description: "Launched this project to help developers, designers and productmanagers keeping their tools in one place while being able to discover and share with the community."
    },
    {
      name: "Hotel Software Solutions",
      url: "https://insights.shijigroup.com/how-integrations-supercharge-hotel-software-solutions/",
      image: supercharge,
      description: "Breaking down exactly how integrations work and the role they play in the hospitality world - through APIs to help hoteliers work more efficiently through seamless technology solutions. "
    },
    {
      name: "Multi Tenant Backoffice (wip)",
      url: "https://backoffice-umber.vercel.app/",
      image: playground,
      description: "NextJs Cutting-edge multi-tenant application designed to create unique guest experiences for hotel guests"
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Projects & Articles</h5>
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`Preview of ${project.name}`} />
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;