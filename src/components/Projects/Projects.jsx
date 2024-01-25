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
            title="Course Hub 📚"
            mockup="/Images/courseHubMockup.png"
            live="https://coursehub-webapp.vercel.app/"
            desc="A course sharing platform, where you can share your course on a subsciption basis. It is a platform where you can share your knowledge and earn money."
            git="https://github.com/kushwahajai74/coursehub/"
          />
          <ProjectCardReverse
            title="shopEkart 🛒"
            mockup="/Images/shopekartMochup.png"
            live="https://shopekart.onrender.com/"
            desc="An ecommerce platform, with a focus on simplicity and clean design,
          this store prioritize user experience, making it easy for customers to
          find and purchase the products they need."
            git="https://github.com/kushwahajai74/shopekart/"
          />
          <ProjectCard
            title="BingeFlix 🍿"
            mockup="/Images/book-my-show.png"
            live="https://book-my-show-indol.vercel.app/"
            desc="A clone of BookMyShow landing page, a movie ticketing service that allows users to book tickets for movies, plays, sports and live events through its website, mobile app and mobile site."
            git="https://github.com/kushwahajai74/book-my-show"
          />
          <ProjectCardReverse
            title="Zomato clone 🍴"
            mockup="/Images/zomato.png"
            live="https://zomato-frontend.netlify.app/"
            desc="A clone of Zomato landing page, a restaurant search and discovery service. It provides information and reviews on restaurants, including images of menus where the restaurant does not have its own website."
            git="https://github.com/kushwahajai74/zomato-landing-page"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
