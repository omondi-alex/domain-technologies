import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Simplifying your digital Journey …</h1>
          <p className="hero-subtitle">
            Unlock the potential of your organization with our innovative
            solutions
          </p>
          <a href="#contact" className="hero-button">
            Get Started
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            At Domain Technologies, we specialize in delivering advanced
            technology solutions that drive business growth and success. With a
            team of highly skilled professionals, we provide innovative software
            development, consulting, and digital transformation services
            tailored to meet the unique needs of our clients.
          </p>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Custom Software Development</h3>
              <p className="service-description">
                We create bespoke software solutions that empower businesses to
                streamline operations and enhance productivity.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">IT Consulting</h3>
              <p className="service-description">
                Our experienced consultants offer expert guidance and strategies
                to optimize your technology infrastructure.
              </p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Digital Transformation</h3>
              <p className="service-description">
                We help businesses adapt to the digital era by leveraging the
                latest technologies and best practices.
              </p>
            </div>

            <div className="service-card">
              <h3>Web Development</h3>
              <p>We offer customized web development solutions</p>
            </div>
            <div className="service-card">
              <h3>Mobile App Development</h3>
              <p>Build powerful mobile apps for Android and iOS platforms</p>
            </div>
            <div className="service-card">
              <h3>Cloud Services</h3>
              <p>Transform your business with cloud-based solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text">
            Ready to take your business to the next level? Get in touch with our
            team and let's discuss your project requirements.
          </p>
          <Link to="/contact" className="contact-button">
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

// import React from "react";
// import MyServices from "../components/MyServices";

// function App() {
//   return (
//     <div className="container">
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to Domain Technologies</h1>
//           <p>We provide innovative IT solutions for your business</p>
//           <a href="#" className="cta-button">
//             Get Started
//           </a>
//         </div>
//       </section>

//       <section className="services-section">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-item">
//             <h3>Web Development</h3>
//             <p>We offer customized web development solutions</p>
//           </div>
//           <div className="service-item">
//             <h3>Mobile App Development</h3>
//             <p>Build powerful mobile apps for Android and iOS platforms</p>
//           </div>
//           <div className="service-item">
//             <h3>Cloud Services</h3>
//             <p>Transform your business with cloud-based solutions</p>
//           </div>
//         </div>
//       </section>

//       <section className="about-section">
//         <h2>About Us</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nisl
//           eget est auctor tincidunt vitae et lectus. In pharetra magna ut odio
//           venenatis feugiat.
//         </p>
//       </section>

//       <section className="contact-section">
//         <h2>Contact Us</h2>
//         <form>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <textarea placeholder="Message"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </section>

//       <footer>
//         <p>
//           &copy; {new Date().getFullYear()} Domain Technologies. All rights
//           reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;
