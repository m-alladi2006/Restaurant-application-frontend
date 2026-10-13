import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock
} from "react-icons/fa6";

function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!newsletterEmail.trim()) {
            alert("Please enter a valid email address.");
            return;
        }
        alert(`Thank you for subscribing! Exclusive offers will be sent to ${newsletterEmail}.`);
        setNewsletterEmail("");
    };

    return (

        <footer className="footer">

            <div className="container">

                <div className="row gy-4">

                    {/* Logo Section */}

                    <div className="col-lg-4 col-md-6 footer-column">

                        {/* <img
                            src={logo}
                            alt="Mealnexa"
                            className="footer-logo-img"
                        /> */}

                        <h2 className="footer-logo">
                            Mealnexa
                        </h2>

                        <p className="footer-text">
                            Experience premium dining with authentic flavours,
                            fresh ingredients and exceptional hospitality.
                            Every meal is crafted with love and served with care.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-4 col-md-6 footer-column">

                        <h4 className="footer-title">
                            Quick Links
                        </h4>

                        <ul className="footer-links">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/menu">Menu</Link></li>

                            <li><Link to="/reservation">Reservation</Link></li>

                            <li><Link to="/about">About Us</Link></li>

                            <li><Link to="/contact">Contact Us</Link></li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-4 col-md-12 footer-column">

                        <h4 className="footer-title">
                            Contact Us
                        </h4>

                        <p>
                            <FaLocationDot className="icon" />
                            xxxxxxx
                        </p>

                        <p>
                            <FaPhone className="icon" />
                            xxxxxxx
                        </p>

                        <p>
                            <FaEnvelope className="icon" />
                            xxxxxxx
                        </p>

                        <p>
                            <FaClock className="icon" />
                            Open Daily : 10:00 AM - 11:00 PM
                        </p>

                    </div>

                </div>

                <div className="footer-divider"></div>

                {/* Newsletter */}

                <div className="newsletter">

                    <h4>
                        Subscribe To Our Newsletter
                    </h4>

                    <form className="newsletter-box" onSubmit={handleSubscribe}>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            required
                        />

                        <button type="submit">
                            Subscribe
                        </button>

                    </form>

                </div>

                <div className="footer-divider"></div>

                {/* Social */}

                <div className="social-icons">

                    <FaFacebookF />

                    <FaInstagram />

                    <FaYoutube />

                    <FaLinkedinIn />

                    <FaWhatsapp />

                    <FaXTwitter />

                </div>

                <p className="copyright">
                    © 2026 Mealnexa Restaurant. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;