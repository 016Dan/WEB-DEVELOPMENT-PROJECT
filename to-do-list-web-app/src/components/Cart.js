// Cart.js

import React, { useState } from "react";
import "./Menu.css";

const Cart = ({ cartItems, onRemoveFromCart, onProceedToOrder }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleQuantityChange = (item, event) => {
    // ... (existing code)
  };

  const handleRemoveFromCartLocal = (item) => {
    // ... (existing code)
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const itemIndex = prevSelectedItems.findIndex(
        (selectedItem) => selectedItem.id === item.id
      );

      if (itemIndex !== -1) {
        // Item already selected, remove it
        return [
          ...prevSelectedItems.slice(0, itemIndex),
          ...prevSelectedItems.slice(itemIndex + 1),
        ];
      } else {
        // Item not selected, add it
        return [...prevSelectedItems, item];
      }
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceedToOrder = () => {
    console.log("Selected Items in Cart.js:", selectedItems);
    // Pass selectedItems to the parent component for handling order history
    onProceedToOrder(selectedItems);
    // Clear selectedItems state
    setSelectedItems([]);
  };

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.some(
                    (selectedItem) => selectedItem.id === item.id
                  )}
                  onChange={() => handleCheckboxChange(item)}
                />
              </label>
              <div>
                <p>
                  <strong>{item.name}</strong>, {item.description}
                </p>
                <div className="quantity-counter">
                  <button
                    onClick={() =>
                      handleQuantityChange(item, {
                        target: { value: item.quantity + 1 },
                      })
                    }
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item, {
                        target: { value: Math.max(item.quantity - 1, 1) },
                      })
                    }
                  >
                    -
                  </button>
                </div>
                <p>Price: Php {item.price * item.quantity}</p>
                <button onClick={() => handleRemoveFromCartLocal(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <p>Total: Php {calculateTotal()}</p>
      </div>
      <div className="checkout-section">
        <button onClick={handleProceedToOrder}>Proceed to Order</button>
      </div>
    </section>
  );
};

export default Cart;
