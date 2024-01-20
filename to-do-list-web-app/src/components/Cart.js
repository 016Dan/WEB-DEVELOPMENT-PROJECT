// Cart.js

import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

const handleQuantityChange = (item, event) => {
  setUpdatedCartItems((prevCartItems) =>
    prevCartItems.map((i) =>
      i.id === item.id ? { ...i, quantity: Number(event.target.value) } : i
    )
  );
};

  const handleRemoveFromCart = (item) => {
    setUpdatedCartItems(updatedCartItems.filter((i) => i.id !== item.id));
  };

  const calculateTotal = () => {
    return updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>
      {updatedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {updatedCartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>
                Quantity:{" "}
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleQuantityChange(item, e)}
                />
              </p>
              <p>Price: Php {item.price * item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <p>Total: Php {calculateTotal()}</p>
      </div>
      {}
    </section>
  );
};

export default Cart;