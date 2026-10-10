import "./CommonCss/Menu.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
    FaStar,
    FaShoppingCart,
    FaHeart,
    FaLeaf,
    FaDrumstickBite,
    FaSearch
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";
import Pagination from "../../components/Pagination/Pagination";
import FoodCard from "../../components/FoodCard/FoodCard";
import menuData from "../../data/menuData";

function Menu() {

    const navigate = useNavigate();
    
const { addToCart } = useCart();
    const [category, setCategory] = useState("All");

    const [search, setSearch] = useState("");

    const categories = [
        "All",
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Beverages"
    ];
        const filteredItems = menuData.filter((item) => {

        const categoryMatch =
            category === "All" || item.category === category;

        const searchMatch =
            item.name.toLowerCase().includes(search.toLowerCase());

        return categoryMatch && searchMatch;

    });

    const [popup, setPopup] = useState({
  show: false,
  message: "",
  type: "",
});

const showPopup = (message, type = "success") => {
  setPopup({
    show: true,
    message,
    type,
  });

  setTimeout(() => {
    setPopup({
      show: false,
      message: "",
      type: "",
    });
  }, 2500);
};

    const handleAddToCart = (item) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

showPopup("⚠ Please login to add items to your cart.", "error");
navigate("/login");
        return;

    }

    addToCart(item);

showPopup(`${item.name} added to cart successfully!`, "success");
};
const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 8;

const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
);
    return (

        <>
<PageTransition>
            <Navbar />

            {/* ================= HERO ================= */}

            <section className="menu-hero">

                <div className="menu-overlay">

                    <h1>

                        Our Delicious Menu

                    </h1>

                    <p>

                        Fresh Ingredients • Authentic Recipes • Premium Dining Experience

                    </p>

                </div>

            </section>

            {/* ================= MENU ================= */}

            <section className="menu-section">

                <div className="menu-heading">

                    <span>

                        FOOD MENU

                    </span>

                    <h2>

                        Explore Our Signature Dishes

                    </h2>

                    <p>

                        Discover delicious meals carefully prepared by our expert chefs using premium ingredients.

                    </p>

                </div>

                {/* ================= CATEGORY ================= */}

                <div className="menu-category">

                    {

                        categories.map((cat) => (

                            <button

                                key={cat}

                                className={
                                    category === cat
                                        ? "active-category"
                                        : ""
                                }

onClick={() => {
    setCategory(cat);
    setCurrentPage(1);
}}
                            >

                                {cat}

                            </button>

                        ))

                    }

                </div>

                {/* ================= SEARCH ================= */}

                <div className="menu-search">

                    <input

                        type="text"

                        placeholder="Search your favorite food..."

                        value={search}

                        onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
}}

                    />

                    <FaSearch />

                </div>

                {/* ================= FOOD GRID ================= */}

<div className="menu-grid">

    {

currentItems.map((item) => (
            <FoodCard

                key={item.id}

                item={item}

                onAddToCart={handleAddToCart}

            />

        ))

    }

</div>


{totalPages > 1 && (
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
    />
)}

            </section>
{popup.show && (
  <div className={`popup-message ${popup.type}`}>
    {popup.message}
  </div>
)}
            <Footer />
</PageTransition>
        </>


    );

}

export default Menu;