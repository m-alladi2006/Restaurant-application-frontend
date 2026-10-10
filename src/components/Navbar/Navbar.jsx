import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaRobot } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

import AIChat from "../AIChat/AIChat";

import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const { cartCount } = useCart();

    const isLoggedIn = localStorage.getItem("isLoggedIn");
 
    const handleCartClick = () => {
//const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn === "true") {

        navigate("/cart");

    } else {

        alert("⚠ Please login first.");

        navigate("/login");

    }

}
;

const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    navigate("/login");

};

    const [showAIChat, setShowAIChat] = useState(false);

    return (

        <>

            <nav className="navbar navbar-expand-lg custom-navbar">

                <div className="container">

                    {/* Logo */}

                    <Link className="navbar-brand logo" to="/">
                        🍽️ Spice Haven
                    </Link>

                    {/* Mobile Toggle */}

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar */}

                    <div className="collapse navbar-collapse" id="navbarContent">

                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">
                                    Menu
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/reservation">
                                    Reservation
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Right Side */}

                        <div className="d-flex align-items-center gap-3">

                            {
    !isLoggedIn ? (
        <>
            <Link to="/login" className="btn login-btn">
                <FaUser /> Login
            </Link>

            <Link to="/register" className="btn login-btn">
                <FaUser /> Register
            </Link>
        </>
    ) : (
        <button
            className="btn login-btn"
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}

                            <div
    className="cart-icon"
    onClick={handleCartClick}
>

    <FaShoppingCart />

<span className="cart-count">

    {cartCount}

</span>
</div>

                            {/* <button
                                className="ai-navbar-btn"
                                onClick={() => setShowAIChat(!showAIChat)}
                            >

                                <FaRobot />

                                <span>AI Assistant</span>

                            </button> */}

                        </div>

                    </div>

                </div>

            </nav>

            {/* AI Chat */}

            {showAIChat &&

                <AIChat />

            }

        </>

    );

}

export default Navbar;