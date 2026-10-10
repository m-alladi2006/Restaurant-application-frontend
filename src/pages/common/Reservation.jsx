import "./CommonCss/Reservation.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimePicker from "../../components/TimePicker/TimePicker";
import PageTransition from "../../components/PageTransition";

const Reservation = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("07:00 PM");
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        guests: 2,
        specialRequest: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleReservation = (e) => {
        e.preventDefault();

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            alert("⚠ Please login to reserve a table.");
            navigate("/login");
            return;
        }

        const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });

        alert(`🎉 Table Reserved Successfully!\n\nName: ${form.name}\nDate: ${formattedDate}\nTime: ${time}\nGuests: ${form.guests}\n\nWe look forward to serving you!`);

        setForm({
            name: "",
            email: "",
            phone: "",
            guests: 2,
            specialRequest: ""
        });
    };

    return (

        <>
<PageTransition>
            <Navbar />

            {/* ================= HERO ================= */}

            <section className="reservation-hero">

                <div className="reservation-overlay">

                    <h1>Reserve Your Table</h1>

                    <p>
                        Experience unforgettable dining moments at Spice Haven.
                        Book your table today for a premium culinary experience.
                    </p>

                </div>

            </section>

            {/* ================= RESERVATION ================= */}

            <section className="reservation-section">

                {/* Left */}

                <div className="reservation-calendar">

                    <h2>Select Date</h2>

                    <Calendar
    onChange={setDate}
    value={date}
    minDate={new Date()}
    showNeighboringMonth={true}
/>

<TimePicker onChange={setTime} />

                </div>

                {/* Right */}

                <div className="reservation-form">

                    <h2>Book A Table</h2>
 
                  <form onSubmit={handleReservation}>
                        <div className="reservation-row">

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="reservation-row">

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                name="guests"
                                placeholder="Guests"
                                min="1"
                                max="20"
                                value={form.guests}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <textarea

                            rows="6"
                            name="specialRequest"
                            placeholder="Special Request (optional)"
                            value={form.specialRequest}
                            onChange={handleChange}

                        ></textarea>

                        <button
                            type="submit"
                            className="reservation-btn"
                        >

                            Reserve Now

                        </button>

                    </form>

                </div>

            </section>

            {/* ================= LOCATION ================= */}

            <section className="reservation-location">

                <div className="reservation-info">

                    <h2>Visit Spice Haven</h2>

                    <p>

                        📍 Banjara Hills, Hyderabad

                    </p>

                    <p>

                        📞 +91 98765 43210

                    </p>

                    <p>

                        ✉ spicehaven@gmail.com

                    </p>

                    <p>

                        🕒 Mon - Sun : 10 AM - 11 PM

                    </p>

                </div>

                <div className="reservation-map">

                    <iframe

                        title="Hyderabad"

                        src="https://www.google.com/maps?q=Banjara+Hills+Hyderabad&output=embed"

                        loading="lazy"

                    ></iframe>

                </div>

            </section>

            <Footer />
</PageTransition>
        </>

    );

};

export default Reservation;