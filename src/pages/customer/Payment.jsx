import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CustomerCss/payment.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";
import upiQr from "../../assets/images/upi-qr.png";

import { useCart } from "../../context/CartContext";

function Payment() {

    const navigate = useNavigate();
    const { cartItems, totalPrice, clearCart } = useCart();

    const [showQR, setShowQR] = useState(false);

    const delivery = cartItems.length ? 49 : 0;

    const gst = totalPrice * 0.05;

    const total = totalPrice + delivery + gst;

    const handlePaid = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            navigate("/menu");
            return;
        }
        const orderId = "SPICE-" + Math.floor(100000 + Math.random() * 900000);
        clearCart();
        alert(`🎉 Payment Confirmed!\n\nOrder ID: ${orderId}\nAmount Paid: ₹${total.toFixed(2)}\n\nThank you! Your delicious meal is being prepared.`);
        navigate("/home");
    };

    return (

        <PageTransition>

            <Navbar />

            <section className="payment-page">

                <div className="payment-container">

                    {/* LEFT SIDE */}

                    <div className="payment-left">

                        <h2>Order Summary</h2>

                        {

                            cartItems.map(item => (

                                <div
                                    className="payment-item"
                                    key={item.id}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>

                                        <h4>{item.name}</h4>

                                        <p>
                                            Qty : {item.quantity}
                                        </p>

                                    </div>

                                    <span>

                                        ₹{item.price * item.quantity}

                                    </span>

                                </div>

                            ))

                        }

                        {/* QR Appears Here */}

                        {

                            showQR && (

                                <div className="qr-payment">

                                    <h3>Scan & Pay</h3>

                                    <img
                                        src={upiQr}
                                        alt="UPI QR"
                                        className="qr-image"
                                    />

                                    <p>

                                        Scan using any UPI App

                                    </p>

                                    <div className="upi-apps">

                                        <span>Google Pay</span>

                                        <span>PhonePe</span>

                                        <span>Paytm</span>

                                        <span>BHIM</span>

                                    </div>

                                    <button 
                                        className="confirm-btn"
                                        onClick={handlePaid}
                                    >

                                        I've Paid

                                    </button>

                                </div>

                            )

                        }

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="payment-right">

                        <h2>Payment</h2>

                        <div className="bill">

                            <p>

                                <span>Subtotal</span>

                                <span>

                                    ₹{totalPrice.toFixed(2)}

                                </span>

                            </p>

                            <p>

                                <span>Delivery</span>

                                <span>

                                    ₹{delivery}

                                </span>

                            </p>

                            <p>

                                <span>GST</span>

                                <span>

                                    ₹{gst.toFixed(2)}

                                </span>

                            </p>

                            <hr />

                            <h3>

                                <span>Total</span>

                                <span>

                                    ₹{total.toFixed(2)}

                                </span>

                            </h3>

                        </div>

                        <h3>

                            Payment Method

                        </h3>

                        <div className="upi-method">

                            <span>

                                📱 UPI QR Scan

                            </span>

                        </div>

                        <button
                            className="pay-btn"
                            onClick={() => setShowQR(true)}
                        >

                            Pay ₹{total.toFixed(2)}

                        </button>

                    </div>

                </div>

            </section>

            <Footer />

        </PageTransition>

    );

}

export default Payment;