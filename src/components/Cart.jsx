// Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems); // Access cart items from the Redux store

    return (
        <div className="cart-container">
            <Nav />
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
