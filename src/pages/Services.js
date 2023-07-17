import React from "react";

const Services = () => {
  return (
    <div>
      <div className="services-page">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">
              Unlock the potential of your business with our innovative
              solutions
            </p>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="service">
              <div className="service-icon">
                <img
                  src="custom-software-icon.png"
                  alt="Custom Software Development"
                />
              </div>
              <h2 className="service-title">Custom Software Development</h2>
              <p className="service-description">
                We deliver tailored software solutions to meet your unique
                business requirements, enhancing productivity and efficiency.
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <img src="it-consulting-icon.png" alt="IT Consulting" />
              </div>
              <h2 className="service-title">IT Consulting</h2>
              <p className="service-description">
                Our experienced consultants provide expert guidance and
                strategies to optimize your technology infrastructure and drive
                growth.
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <img
                  src="digital-transformation-icon.png"
                  alt="Digital Transformation"
                />
              </div>
              <h2 className="service-title">Digital Transformation</h2>
              <p className="service-description">
                We assist businesses in embracing the digital era by leveraging
                cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
