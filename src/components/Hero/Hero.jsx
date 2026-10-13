import "./Hero.css";
import heroImage from "../../assets/images/hero-banner.png";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";

function Hero() {
    return (
        <>
                    <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="overlay">

                <div className="container hero-content">

                    <h1>Welcome to Mealnexa</h1>

                    <h2>Delicious Food, Happy Moments 🍽️</h2>

                    <p>
                        Experience the taste of freshly prepared Indian,
                        Chinese, Italian, Burgers, Desserts and much more.
                    </p>

<div className="hero-buttons">

    <Link to="/menu" className="order-btn">
    Order Now
</Link>

<Link to="/contact" className="contact-btn">
    Contact Us
</Link>

</div>

                </div>

            </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}

<section className="why-section">

    <div className="container">

        <div className="row align-items-center">

            {/* Left Card */}

            <div className="col-lg-4 text-center">

                <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600"
                    className="why-img"
                    alt=""
                />

                <h4 className="mt-4">
                    Fresh & Local Ingredients
                </h4>

                <p>
                    Farm-fresh vegetables, premium spices and carefully
                    selected ingredients make every meal healthy and delicious.
                </p>

            </div>

            {/* Center Card */}

            <div className="col-lg-4 text-center">

                <h3 className="text-warning fw-bold">
                    Authentic Recipes
                </h3>

                <p className="mb-4">
                    Every recipe is prepared by our expert chefs using
                    traditional cooking methods and authentic flavors.
                </p>

                <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                    className="why-img"
                    alt=""
                />

            </div>

            {/* Right Card */}

            <div className="col-lg-4 text-center">

                <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
                    className="why-img"
                    alt=""
                />

                <h4 className="mt-4">
                    Creative Presentation
                </h4>

                <p>
                    Every dish is beautifully presented with creativity,
                    making your dining experience memorable from the first look.
                </p>

            </div>

        </div>

    </div>

</section>

{/* ================= FEATURED DISHES ================= */}

<section className="featured-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="display-5 fw-bold">

                Our <span className="text-warning">Signature Dishes</span>

            </h2>

            <p className="text-secondary">

                Discover our chef's handcrafted specialties made with premium
                ingredients and unforgettable flavors.

            </p>

        </div>

        <div className="row g-4">

            <div className="col-lg-3 col-md-6">

                <div className="food-card">

                    <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
                        alt="Pizza"
                    />

                    <div className="food-content">

                        <h4>Margherita Pizza</h4>

                        <p>
                            Fresh mozzarella, basil leaves,
                            homemade tomato sauce and crispy crust.
                        </p>

                        <h5>₹349</h5>

                    </div>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="food-card">

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkQBdhYrMLNJa6AViIxafWLWg0L7slbjKaPhPb2UAjg&s=10"
                        alt="Burger"
                    />

                    <div className="food-content">

                        <h4>Classic Burger</h4>

                        <p>
                            Juicy grilled patty with cheese,
                            lettuce, tomatoes and signature sauce.
                        </p>

                        <h5>₹249</h5>

                    </div>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="food-card">

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnxsXVwwUOYz6HJizSbcDmECm40N-LP-oo0N9bsNU2Btrx_e_pNuNe2hD&s=10"
                        alt="Biryani"
                    />

                    <div className="food-content">

                        <h4>Hyderabadi Biryani</h4>

                        <p>
                            Aromatic basmati rice layered with
                            tender chicken and authentic spices.
                        </p>

                        <h5>₹399</h5>

                    </div>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="food-card">

                    <img
                        src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700"
                        alt="Dessert"
                    />

                    <div className="food-content">

                        <h4>Chocolate Dessert</h4>

                        <p>
                            Rich chocolate mousse topped with
                            fresh berries and premium cream.
                        </p>

                        <h5>₹199</h5>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ================= TESTIMONIALS ================= */}

<section className="testimonial-section">

    <div className="container">

        <div className="text-center mb-5">

            <h2 className="display-5 fw-bold">
                What Our <span className="text-warning">Guests Say</span>
            </h2>

            <p className="text-secondary">
                We value every customer and strive to provide the best dining
                experience. Here's what our guests have to say.
            </p>

        </div>

        <div className="row g-4">

            <div className="col-lg-4">

                <div className="review-card">

                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="review-img"
                        alt=""
                    />

                    <h5>Rahul Sharma ⭐⭐⭐⭐⭐</h5>

                    <p>
                        The food was absolutely delicious. The staff were very
                        friendly and the ambience was wonderful. I will definitely
                        visit again.
                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="review-card">

                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="review-img"
                        alt=""
                    />

                    <h5>Priya Reddy ⭐⭐⭐⭐⭐</h5>

                    <p>
                        One of the best restaurants in the city. Fresh food,
                        quick service and beautiful presentation. Highly
                        recommended.
                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="review-card">

                    <img
                        src="https://randomuser.me/api/portraits/men/67.jpg"
                        className="review-img"
                        alt=""
                    />

                    <h5>Arjun Kumar ⭐⭐⭐⭐⭐</h5>

                    <p>
                        Loved the desserts and Italian dishes. The restaurant
                        atmosphere is peaceful and perfect for families.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
< Footer/>
</>
    );
}

export default Hero;