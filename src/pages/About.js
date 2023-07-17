import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-us-page">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-subtitle">
              Delivering advanced technology solutions for business growth
            </p>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-info">
                <h2 className="section-title">Who We Are</h2>
                <p className="section-text">
                  At Domain Technologies, we are a team of passionate
                  individuals dedicated to transforming businesses with
                  cutting-edge technology. Our mission is to empower
                  organizations by providing innovative software development,
                  consulting, and digital transformation services.
                </p>
                <a href="#values" className="learn-more-button">
                  Learn More
                </a>
              </div>
              <div className="about-image">
                <img src="about-image.png" alt="About Us" />
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="values">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <ul className="values-list">
              <li className="value-item">
                <div className="value-icon">
                  {/* <img src="innovation-icon.png" alt="Innovation" /> */}
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We embrace creativity and drive continuous innovation to
                  deliver exceptional solutions.
                </p>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  {/* <img src="quality-icon.png" alt="Quality" /> */}
                </div>
                <h3 className="value-title">Quality</h3>
                <p className="value-description">
                  We are committed to delivering high-quality services and
                  solutions that exceed expectations.
                </p>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  {/* <img src="collaboration-icon.png" alt="Collaboration" /> */}
                </div>
                <h3 className="value-title">Collaboration</h3>
                <p className="value-description">
                  We foster a collaborative environment and work closely with
                  clients to achieve mutual success.
                </p>
              </li>
              <li className="value-item">
                <div className="value-icon">
                  <img
                    src="satisfaction-icon.png"
                    alt="Customer Satisfaction"
                  />
                </div>
                <h3 className="value-title">Customer Satisfaction</h3>
                <p className="value-description">
                  We prioritize customer satisfaction and strive to build
                  long-lasting partnerships.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
