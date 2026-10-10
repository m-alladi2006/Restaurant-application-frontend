import "./MenuCard.css";

function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <img
        src={item.image}
        alt={item.name}
        className="menu-image"
      />

      <div className="menu-content">
        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="menu-rating">
          ⭐ {item.rating}
        </div>

        <div className="menu-bottom">
          <span className="price">
            ₹{item.price}
          </span>

          <button
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;