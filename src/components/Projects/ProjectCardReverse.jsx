import React from "react";
import "./Projects.css";

// eslint-disable-next-line react/prop-types
const ProjectCardReverse = ({ title, desc, mockup, git, live }) => {
  return (
    <div className="pro pro__1">
      <div className="pro__text">
        <h3>{title} </h3>
        <p>{desc}</p>
        <div className="pro__links">
          <a target="_blank" href={git} rel="noreferrer">
            Code <i className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href={live} rel="noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>
      </div>
      <div className="pro__img">
        <a target="_blank" href={live} rel="noreferrer">
          <img src={mockup} alt="website" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCardReverse;
