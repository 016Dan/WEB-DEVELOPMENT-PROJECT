// Cart.js

import React from "react";

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: Php {item.price}</p>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <p>Total: Php {totalAmount}</p>
      </div>
      {/* Add checkout or other actions here */}
    </section>
  );
};

export default Cart;
