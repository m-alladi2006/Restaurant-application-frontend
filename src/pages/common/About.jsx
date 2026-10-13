import "./CommonCss/About.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaLeaf,
  FaUtensils,
  FaUsers,
  FaAward
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const About = () => {
  return (
    <>
<PageTransition>
      <Navbar />

      <div className="about-page">

        {/* ================= HERO ================= */}

        <section className="about-hero-section">

          <div className="about-hero-container">

            <div className="about-hero-left">

              <span className="about-sub-title">
                Welcome To
              </span>

              <h1 className="about-main-heading">
                Mealnexa Restaurant
              </h1>

              <p className="about-description">

                Mealnexa is where authentic flavors meet elegant
                dining. Every dish is carefully crafted using fresh
                ingredients and premium spices, creating an unforgettable
                experience for every guest.

              </p>

              <div className="about-contact-info">

                <p>📍 xxxxxxx</p>

                <p>🕒 Open Daily : 10:00 AM – 11:00 PM</p>

                <p>📞 xxxxxxx</p>

              </div>

              <div className="about-button-group">

                <Link to="/menu" className="about-primary-btn">
                  Explore Menu
                </Link>

                <Link to="/reservation" className="about-secondary-btn">
                  Reserve Table
                </Link>

              </div>

            </div>

            <div className="about-hero-right">

              <iframe
                title="Hyderabad Map"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </section>

        {/* ================= STORY ================= */}

        <section className="about-story-section">

          <div className="about-story-image">

            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900"
              alt="Restaurant"
            />

          </div>

          <div className="about-story-content">

            <span className="about-story-subtitle">
              OUR STORY
            </span>

            <h2 className="about-story-heading">
              Crafted With Passion Since 2010
            </h2>

            <p>

              What started as a small family restaurant has grown into
              one of Hyderabad's favorite dining destinations. Every
              recipe reflects our passion for quality and hospitality.

            </p>

            <p>

              Whether you're celebrating a special occasion or enjoying
              dinner with family, we promise exceptional food and
              memorable service.

            </p>

            <a href="#experience" className="about-primary-btn">
              Learn More
            </a>

          </div>

        </section>

        {/* ================= SIGNATURE EXPERIENCE ================= */}

<section className="about-experience-section" id="experience">

    <div className="about-section-heading">

        <span>OUR EXPERIENCE</span>

        <h2>More Than Just A Restaurant</h2>

        <p>
            We create memorable dining moments through exceptional food,
            elegant ambiance, and outstanding hospitality.
        </p>

    </div>

    <div className="about-experience-grid">

        <div className="about-experience-card">

            <h3>🍽 Fine Dining</h3>

            <p>
                Elegant interiors with a luxurious atmosphere for every occasion.
            </p>

        </div>

        <div className="about-experience-card">

            <h3>🎉 Private Events</h3>

            <p>
                Celebrate birthdays, anniversaries, and corporate events with us.
            </p>

        </div>

        <div className="about-experience-card">

            <h3>👨‍👩‍👧 Family Friendly</h3>

            <p>
                Comfortable seating and delicious meals for the entire family.
            </p>

        </div>

        <div className="about-experience-card">

            <h3>🚚 Fast Delivery</h3>

            <p>
                Enjoy your favorite dishes delivered fresh to your doorstep.
            </p>

        </div>

    </div>

</section>

{/* ================= GALLERY ================= */}

<section className="about-gallery-section">

    <div className="about-gallery-heading">

        <span>OUR GALLERY</span>

        <h2>Discover The Beauty Of Mealnexa</h2>

        <p>
            Explore our elegant interiors, signature dishes, and warm atmosphere
            that make every visit a memorable experience.
        </p>

    </div>

    <div className="about-gallery-grid">

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700"
                alt="Restaurant Interior"
            />
        </div>

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700"
                alt="Dining Area"
            />
        </div>

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700"
                alt="Chef Special"
            />
        </div>

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700"
                alt="Steak"
            />
        </div>

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700"
                alt="Restaurant"
            />
        </div>

        <div className="about-gallery-item">
            <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700"
                alt="Dining"
            />
        </div>

    </div>

</section>

{/* ================= RESERVE CTA ================= */}

<section className="about-reserve-section">

    <div className="about-reserve-content">

        <span>BOOK YOUR TABLE</span>

        <h2>Enjoy An Unforgettable Dining Experience</h2>

        <p>
            Reserve your table today and enjoy authentic cuisine,
            elegant ambiance, and exceptional hospitality with your
            family and friends.
        </p>

        

        <div className="about-reserve-buttons">

    <Link
        to="/reservation"
        className="about-primary-btn"
    >
        Reserve Now
    </Link>

    <Link
        to="/menu"
        className="about-secondary-btn"
    >
        View Menu
    </Link>

</div>

    </div>

</section>

      </div>

      <Footer />
</PageTransition>
    </>
  );
};

export default About;