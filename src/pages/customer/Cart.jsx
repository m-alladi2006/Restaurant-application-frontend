import "./CustomerCss/Cart.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CartCard from "../../components/CartCard/CartCard";

import { useCart } from "../../context/CartContext";
import PageTransition from "../../components/PageTransition";

function Cart() {

    const navigate = useNavigate();

    const {

        cartItems,

        totalPrice,

        clearCart

    } = useCart();

    const deliveryFee = cartItems.length > 0 ? 49 : 0;

    const gst = totalPrice * 0.05;

    const grandTotal = totalPrice + deliveryFee + gst;


    return (

        <>
<PageTransition>
            <Navbar />

            <section className="cart-page">

                <div className="cart-container">

                    <h1>

                        My Cart

                    </h1>

                    {

                        cartItems.length === 0 ?

                            (

                                <div className="empty-cart">

                                    <h2>

                                        Your cart is empty

                                    </h2>

                                    <button

                                        onClick={() => navigate("/menu")}

                                    >

                                        Browse Menu

                                    </button>

                                </div>

                            )

                            :

                            (

                                <>

                                    <div className="cart-items">

                                        {

                                            cartItems.map(item => (

                                                <CartCard

                                                    key={item.id}

                                                    item={item}

                                                />

                                            ))

                                        }

                                    </div>

                                    <div className="cart-summary">

                                        <h2>

                                            Order Summary

                                        </h2>

                                        <div>

                                            <span>Subtotal</span>

                                            <span>

                                                ₹{totalPrice.toFixed(2)}

                                            </span>

                                        </div>

                                        <div>

                                            <span>Delivery Fee</span>

                                            <span>

                                                ₹{deliveryFee.toFixed(2)}

                                            </span>

                                        </div>

                                        <div>

                                            <span>GST (5%)</span>

                                            <span>

                                                ₹{gst.toFixed(2)}

                                            </span>

                                        </div>

                                        <hr />

                                        <div className="grand-total">

                                            <span>

                                                Total

                                            </span>

                                            <span>

                                                ₹{grandTotal.toFixed(2)}

                                            </span>

                                        </div>

<button
    className="checkout-btn"
    disabled={cartItems.length === 0}
    onClick={() => navigate("/payment")}
>
    Payment
</button>

                                        <button

                                            className="clear-btn"

                                            onClick={clearCart}

                                        >

                                            Clear Cart

                                        </button>

                                    </div>

                                </>

                            )

                    }

                </div>

            </section>

            <Footer />
</PageTransition>
        </>

    );

}

export default Cart;