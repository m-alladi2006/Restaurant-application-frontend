import "./CommonCss/Register.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaCalendarAlt
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const Register = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({

        firstName: "",

        lastName: "",

        username: "",

        email: "",

        phone: "",

        dob: "",

        gender: "",

        password: "",

        confirmPassword: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match ❌");
        return;
    }

    const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender,
        password: formData.password
    };


    localStorage.setItem(
        "user",
        JSON.stringify(userData)
    );


    alert("Registration Successful ✅ Please log in with your credentials.");
    navigate("/login");

};

    return (

        <>
<PageTransition>
            <Navbar />

            <section className="register-page">

                <div className="register-overlay">

                    <div className="register-card">

                        <span className="register-subtitle">

                            CREATE ACCOUNT

                        </span>

                        <h1>

                            Join Mealnexa

                        </h1>

                        <p>

                            Register today and reserve tables, order delicious
                            food, and enjoy an unforgettable dining experience.

                        </p>

                        <form onSubmit={handleSubmit}>

                            {/* First & Last Name */}

                            <div className="register-row">

                                <div className="register-input">

                                    <FaUser />

                                    <input

                                        type="text"

                                        name="firstName"

                                        placeholder="First Name"

                                        value={formData.firstName}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="register-input">

                                    <FaUser />

                                    <input

                                        type="text"

                                        name="lastName"

                                        placeholder="Last Name"

                                        value={formData.lastName}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                            </div>

                            {/* Username */}

                            <div className="register-input">

                                <FaUser />

                                <input

                                    type="text"

                                    name="username"

                                    placeholder="Username"

                                    value={formData.username}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            {/* Email */}

                            <div className="register-input">

                                <FaEnvelope />

                                <input

                                    type="email"

                                    name="email"

                                    placeholder="Email Address"

                                    value={formData.email}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            {/* Phone & DOB */}

                            <div className="register-row">

                                <div className="register-input">

                                    <FaPhoneAlt />

                                    <input

                                        type="tel"

                                        name="phone"

                                        placeholder="Phone Number"

                                        value={formData.phone}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="register-input">

                                    <FaCalendarAlt />

                                    <input

                                        type="date"

                                        name="dob"

                                        value={formData.dob}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                            </div>

                            {/* Gender */}

                            <div className="register-gender">

                                <label>

                                    <input

                                        type="radio"

                                        name="gender"

                                        value="Male"

                                        onChange={handleChange}

                                    />

                                    Male

                                </label>

                                <label>

                                    <input

                                        type="radio"

                                        name="gender"

                                        value="Female"

                                        onChange={handleChange}

                                    />

                                    Female

                                </label>

                                <label>

                                    <input

                                        type="radio"

                                        name="gender"

                                        value="Other"

                                        onChange={handleChange}

                                    />

                                    Other

                                </label>

                            </div>

                            {/* Password */}

                            <div className="register-input">

                                <FaLock />

                                <input

                                    type={showPassword ? "text" : "password"}

                                    name="password"

                                    placeholder="Password"

                                    value={formData.password}

                                    onChange={handleChange}

                                    required

                                />

                                <span

                                    className="register-eye"

                                    onClick={() => setShowPassword(!showPassword)}

                                >

                                    {showPassword ? <FaEyeSlash /> : <FaEye />}

                                </span>

                            </div>

                            {/* Confirm Password */}

                            <div className="register-input">

                                <FaLock />

                                <input

                                    type={showConfirmPassword ? "text" : "password"}

                                    name="confirmPassword"

                                    placeholder="Confirm Password"

                                    value={formData.confirmPassword}

                                    onChange={handleChange}

                                    required

                                />

                                <span

                                    className="register-eye"

                                    onClick={() =>

                                        setShowConfirmPassword(!showConfirmPassword)

                                    }

                                >

                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}

                                </span>

                            </div>

                            {/* Terms */}

                            <div className="register-terms">

                                <label>

                                    <input type="checkbox" required />

                                    I agree to the Terms & Conditions

                                </label>

                            </div>

                            <button className="register-btn">

                                CREATE ACCOUNT

                            </button>

                        </form>

                        <div className="register-login">

                            Already have an account?

                            <Link to="/login">

                                Login

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
</PageTransition>
        </>

    );

};

export default Register;