import React from 'react';
import "./Services.css"
import { FaBuilding, FaHome, FaDraftingCompass } from 'react-icons/fa'; // Importing FontAwesome icons

const servicesData = [
  {
    title: "CONSTRUCTION",
    description:
      "Turning blueprints into reality requires a combination of skill, precision, and dedication. Our construction team embodies these qualities, working tirelessly to bring architectural visions to life. We are committed to executing projects with the highest quality standards, adhering to timelines, and delivering results that exceed expectations.",
    imgSrc: "./cnstrtn.jpg",
    icon: <FaBuilding />, // FontAwesome icon for construction
    readMoreLink: "#"
  },
  {
    title: "REAL ESTATE",
    description:
      "Understanding the nuances of the real estate landscape is crucial to delivering value to our clients. Our real estate experts possess an in-depth knowledge of market trends, investment opportunities, and property management. We specialize in identifying properties with exceptional potential, ensuring that each investment aligns with our clients' goals and aspirations.",
    imgSrc: "./estbnr.jpg",
    icon: <FaHome />, // FontAwesome icon for real estate
    readMoreLink: "#"
  },
  {
    title: "ARCHITECTURAL DESIGN",
    description:
      "We believe that architecture has the power to transcend the ordinary and evoke emotions. Our architectural designs tell stories, capturing the essence of a place and its purpose. Whether it's crafting awe-inspiring commercial structures, innovative residential complexes, or transformative public spaces, we consistently push boundaries to create landmarks that inspire admiration.",
    imgSrc: "./sld1.jpeg",
    icon: <FaDraftingCompass />, // FontAwesome icon for architectural design
    readMoreLink: "#"
  }
];

const Services = () => {
  return (
    <section id='services' className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-wrapper">
              <img
                src={service.imgSrc}
                alt={`${service.title} image`}
                className="service-image"
              />
              <div className="service-icon-overlay">
                <div className="service-icon">{service.icon}</div>
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description secondaryText">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
