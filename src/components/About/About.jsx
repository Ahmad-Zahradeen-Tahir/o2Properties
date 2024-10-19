import React from "react";
import "./About.css"; // Link to CSS file

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Our Company</h1>
          <p>
            O2 Properties is a dynamic real estate company that specializes in
            both property development and brokerage services. With a focus on
            delivering exceptional quality and innovative solutions, we are
            committed to transforming the real estate landscape.
          </p>
          <p>
            designed to meet the evolving needs of our clients. We pride
            ourselves on our attention to detail, use of high-quality materials,
            and commitment to sustainable practices.
          </p>
          <a href="#services" className="cta-button">
            Learn More
          </a>
        </div>
        <div className="about-image-wrapper">
          <img src="cl.jpg" alt="Company Logo" className="about-logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
