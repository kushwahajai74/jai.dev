import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="img-side">
            <img src="/Images/working.jpg" alt="aboutImg" />
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              A dedicated Full-stack Developer
              <br />
              based in Madhya Pradesh, India 📍
            </h4>
            <p>
              As a Full Stack (MERN) Developer, I possess expertise in MongoDB,
              Express.js, React, and Node.js. With a strong foundation in HTML,
              CSS, and JavaScript, I excel at designing responsive web apps with
              a seamless user experience. My skills include crafting engaging
              interfaces through optimized code and utilizing cutting-edge
              development tools. I thrive in collaborative environments, working
              closely with cross-functional teams to deliver outstanding web
              solutions. With a commitment to staying updated on industry
              trends, I consistently deliver innovative and high-quality results
              in the form of robust and scalable applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
