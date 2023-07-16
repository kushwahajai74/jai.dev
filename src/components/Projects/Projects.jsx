import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";
import ProjectCardReverse from "./ProjectCardReverse.jsx";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="project-content">
          <p>PORTFOLIO</p>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        <div className="projects-grid">
          <ProjectCard
            title="shopEkart 🛒"
            mockup="src/Images/shopekartMochup.png"
            live="https://shopekart.onrender.com/"
            desc="An ecommerce platform, with a focus on simplicity and clean design,
          this store prioritize user experience, making it easy for customers to
          find and purchase the products they need."
            git="https://github.com/kushwahajai74/shopekart/"
          />
          <ProjectCardReverse
            title="BingeFlix 🍿"
            mockup="src/Images/book-my-show.png"
            live="https://shopekart.onrender.com/"
            desc="An ecommerce platform, with a focus on simplicity and clean design,
          this store prioritize user experience, making it easy for customers to
          find and purchase the products they need."
            git="https://github.com/kushwahajai74/shopekart/"
          />
          <ProjectCard
            title="Zomato clone 🍴"
            mockup="src/Images/zomato.png"
            live="https://shopekart.onrender.com/"
            desc="An ecommerce platform, with a focus on simplicity and clean design,
          this store prioritize user experience, making it easy for customers to
          find and purchase the products they need."
            git="https://github.com/kushwahajai74/shopekart/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
