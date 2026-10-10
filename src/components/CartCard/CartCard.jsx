import {
    FaPlus,
    FaMinus,
    FaTrash
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

import "./CartCard.css";

function CartCard({ item }) {

    const {

        increaseQuantity,

        decreaseQuantity,

        removeFromCart

    } = useCart();

    return (

        <div className="cart-card">

            <img

                src={item.image}

                alt={item.name}

            />

            <div className="cart-details">

                <h3>

                    {item.name}

                </h3>

                <p>

                    {item.description}

                </p>

                <h4>

                    ₹{item.price}

                </h4>

            </div>

            <div className="cart-actions">

                <div className="quantity-box">

                    <button

                        onClick={() =>

                            decreaseQuantity(item.id)

                        }

                    >

                        <FaMinus />

                    </button>

                    <span>

                        {item.quantity}

                    </span>

                    <button

                        onClick={() =>

                            increaseQuantity(item.id)

                        }

                    >

                        <FaPlus />

                    </button>

                </div>

                <h5>

                    ₹{item.price * item.quantity}

                </h5>

                <button

                    className="remove-btn"

                    onClick={() =>

                        removeFromCart(item.id)

                    }

                >

                    <FaTrash />

                    Remove

                </button>

            </div>

        </div>

    );

}

export default CartCard;