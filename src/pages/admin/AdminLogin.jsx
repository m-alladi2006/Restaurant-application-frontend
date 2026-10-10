import "../common/CommonCss/Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaUserShield
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Specific logic for admin authentication
        if (
            loginData.email === "admin@example.com" &&
            loginData.password === "admin123"
        ) {
            localStorage.setItem("isAdminLoggedIn", "true");
            localStorage.setItem("adminEmail", loginData.email);

            alert("Admin Login Successful ✅");
            navigate("/admin/dashboard"); // Assuming you will create an admin dashboard route
        } else {
            alert("Invalid Admin Credentials ❌");
        }
    };

    return (
        <>
            <PageTransition>
                <Navbar />

                <section className="login-page">
                    <div className="login-overlay">
                        <div className="login-card" style={{ borderTop: "4px solid #dc2626" }}>
                            <span className="login-subtitle text-red-500" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: "#dc2626" }}>
                                <FaUserShield /> Admin Portal
                            </span>

                            <h1>
                                Admin Access Only
                            </h1>

                            <p>
                                Sign in to manage restaurant operations, orders, and system settings.
                            </p>

                            <form onSubmit={handleSubmit}>
                                {/* Email */}
                                <div className="login-input-box">
                                    <FaEnvelope />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Admin Email (e.g. admin@example.com)"
                                        value={loginData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="login-input-box">
                                    <FaLock />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter Password (e.g. admin123)"
                                        value={loginData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span
                                        className="login-eye"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <button className="login-btn" style={{ backgroundColor: "#dc2626" }}>
                                    ADMIN LOGIN
                                </button>
                            </form>
                            
                            <div className="login-register" style={{ marginTop: '20px' }}>
                                Not an admin? 
                                <Link to="/login" style={{ color: "#dc2626" }}>
                                    Customer Login
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

export default AdminLogin;
