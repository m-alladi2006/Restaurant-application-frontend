import { useState } from "react";
import {
    FaStar,
    FaShoppingCart,
    FaHeart,
    FaLeaf,
    FaDrumstickBite
} from "react-icons/fa";

function FoodCard({ item, onAddToCart }) {
    const [liked, setLiked] = useState(false);

    return (

        <div className="food-card">

            <div className="food-image">

                {
                    item.bestseller &&

                    <div className="best-seller">

                        Best Seller

                    </div>
                }

                <img
                    src={item.image}
                    alt={item.name}
                />

                <div className="food-type">

                    {

                        item.type === "Veg"

                            ?

                            <div className="veg">

                                <FaLeaf />

                                Veg

                            </div>

                            :

                            <div className="nonveg">

                                <FaDrumstickBite />

                                Non Veg

                            </div>

                    }

                    <button 
                        className={`wishlist ${liked ? 'active' : ''}`}
                        style={liked ? { background: '#FF6B35', color: '#fff' } : {}}
                        onClick={() => setLiked(prev => !prev)}
                        title={liked ? "Remove from Favorites" : "Add to Favorites"}
                    >

                        <FaHeart />

                    </button>

                </div>

            </div>

            <div className="food-content">

                <div className="food-top">

                    <h3>

                        {item.name}

                    </h3>

                    <span>

                        ₹{item.price}

                    </span>

                </div>

                <p>

                    {item.description}

                </p>

                <div className="food-bottom">

                    <div className="rating">

    {
        [...Array(Math.floor(item.rating))].map((_, index) => (

            <FaStar key={index} />

        ))
    }

    <span>
        {item.rating}
    </span>

</div>

                    <button

                        onClick={() => onAddToCart(item)}

                    >

                        <FaShoppingCart />

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    );

}

export default FoodCard;