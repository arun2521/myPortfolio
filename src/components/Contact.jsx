import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>📬 Contact Me</h2>
      <p className="contact-subtitle">
        Have a project or want to work together? Reach out!
      </p>

      <div className="contact-container">
        <div className="contact-details">
          <p>
            <FaEnvelope /> arunlee810@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> +91- 9666780806
          </p>
          <p>
            <FaMapMarkerAlt /> Chennai, India
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/arunsalindra/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/arun2521"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="/public/ARUN_FE.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Optional: Contact Form */}
        {/* <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit">Send Message</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
