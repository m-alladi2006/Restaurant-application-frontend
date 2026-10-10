import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];

    });

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cartItems));

    }, [cartItems]);

    // Add Item
    const addToCart = (food) => {

        const exist = cartItems.find(item => item.id === food.id);

        if (exist) {

            setCartItems(

                cartItems.map(item =>

                    item.id === food.id

                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }

                        : item

                )

            );

        }

        else {

            setCartItems([

                ...cartItems,

                {

                    ...food,

                    quantity: 1

                }

            ]);

        }

    };

    // Remove Item

    const removeFromCart = (id) => {

        setCartItems(

            cartItems.filter(item => item.id !== id)

        );

    };

    // Increase Quantity

    const increaseQuantity = (id) => {

        setCartItems(

            cartItems.map(item =>

                item.id === id

                    ? {

                        ...item,

                        quantity: item.quantity + 1

                    }

                    : item

            )

        );

    };

    // Decrease Quantity

    const decreaseQuantity = (id) => {

        setCartItems(

            cartItems

                .map(item =>

                    item.id === id

                        ? {

                            ...item,

                            quantity: item.quantity - 1

                        }

                        : item

                )

                .filter(item => item.quantity > 0)

        );

    };

    // Clear Cart

    const clearCart = () => {

        setCartItems([]);

    };

    // Total Items

    const cartCount = cartItems.reduce(

        (total, item) => total + item.quantity,

        0

    );

    // Total Price

    const totalPrice = cartItems.reduce(

        (total, item) => total + item.price * item.quantity,

        0

    );

    return (

        <CartContext.Provider

            value={{

                cartItems,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                clearCart,

                cartCount,

                totalPrice

            }}

        >

            {children}

        </CartContext.Provider>

    );

};

export const useCart = () => useContext(CartContext);