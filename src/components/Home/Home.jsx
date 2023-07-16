import React from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import hand from "../../Images/hand.png";

const Home = () => {
  return (
    <div id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Full-Stack Web Developer </h1>
              <img src="../src/Images/hand.png" alt="waving_hand" />

              <p>
                Hi, I{"'"}m Jai Kushwaha. A passionate Full-stack Developer
                based in Madhya Pradesh, India. 📍
              </p>
              <span>
                <a href="https://www.linkedin.com/in/kushwahajai74/">
                  <LinkedInIcon />
                </a>
                <a href="https://www.github.com/kushwahajai74/">
                  <GitHubIcon />
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech stack</p>
            <div className="logos">
              <ul>
                <img src="../src/Images/html5.svg" alt="" title="HTML5" />
                <img src="../src/Images/css.svg" alt="CSS3" title="CSS3" />
                <img
                  src="src/Images/javascript.svg"
                  alt="javascript"
                  title="Javascript"
                />
                <img src="src/Images/react.svg" alt="React" title="React" />
                <img src="src/Images/redux.svg" alt="Redux" title="Redux" />
                <img src="src/Images/nodejs.svg" alt="Nodejs" title="Nodejs" />
                <img
                  src="src/Images/mongodb.svg"
                  alt="MongoDB"
                  title="MongoDB"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
