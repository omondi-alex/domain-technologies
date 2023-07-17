import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Domain Technologies</h4>
                <p>
                  Uper hill, Nairobi, Kenya
                  <br />
                  Phone: +254 707750879
                  <br />
                  Email: info@domaintech.com
                </p>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Software Consulting</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>About Us</h4>
                <p>
                  Comprehensive Online Platform dedicated to providing a wide
                  range of IT and software services for individuals and
                  businesses.From website development and software engineering
                  to cloud computing and cybersecurity, It will offer a diverse
                  array of services to optimize efficiency, productivity, and
                  digital transformation.
                </p>
              </div>
              <div className="footer-column">
                <h4>Contact Us</h4>
                <p>
                  Don't hesitate to reach out if you have any questions or
                  inquiries. We'd love to hear from you!
                </p>
                <a href="mailto:info@domaintech.com">Email Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Domain Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
