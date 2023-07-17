import React from "react";

const Contacts = () => {
  return (
    <div className="contactWrapper">
      <h2>Contact Us </h2>
      <form className="contact-form">
        <div className="form-control">
          <input type="text" placeholder="e.g John Doe" />
          <input type="text" placeholder="e.g 0706134387" />
        </div>

        <div className="form-control">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
        </div>

        <textarea placeholder="Type your message here" />
        <input className="contact-btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contacts;
