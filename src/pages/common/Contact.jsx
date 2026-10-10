import { useState } from "react";
import "./CommonCss/Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received. We will get back to you shortly.`);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
<PageTransition>
      <Navbar />

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="contact-overlay">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h1>CONTACT US</h1>

          <p>
            We'd love to hear from you.
            Reach out for reservations,
            inquiries or special requests.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact-section">

        {/* Left */}

        <div className="contact-info">

          <h2>CONTACT INFORMATION</h2>

          <div className="info-card">

            <FaMapMarkerAlt />

            <div>

              <h4>Address</h4>

              <p>
                Banjara Hills, Road No. 12
                <br />
                Hyderabad, Telangana 500034
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt />

            <div>

              <h4>Phone</h4>

              <p>
                +91 98765 43210
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>
                support@spicehaven.com
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaClock />

            <div>

              <h4>Opening Hours</h4>

              <p>
                Mon - Sun
                <br />
                10:00 AM - 11:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form">

          <h2>SEND US A MESSAGE</h2>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="8"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">

              SEND MESSAGE

              <FaPaperPlane />

            </button>

          </form>

        </div>

      </section>

      <Footer />
</PageTransition>
    </>
  );
};

export default Contact;