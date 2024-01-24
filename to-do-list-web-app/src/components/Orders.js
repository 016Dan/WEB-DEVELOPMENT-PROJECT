import React, { useState } from "react";

const Orders = ({ cartItems }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateOrderTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    // For demonstration purposes, let's just set a flag to indicate checkout
    setIsCheckout(true);
  };

  return (
    <div>
      <h2>Order History</h2>
      {cartItems.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Php {item.price * item.quantity}</p>
            </div>
          ))}
          <div className="order-total">
            <p>Total: Php {calculateOrderTotal()}</p>
          </div>
          {!isCheckout && (
            <div className="checkout-section">
              <h2>Checkout</h2>
              <p>Review your order and proceed to checkout:</p>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          )}
          {isCheckout && (
            <div className="checkout-form">
              {/* Add your checkout form here */}
              <h2>Checkout Form</h2>
              {/* Include form fields like name, address, etc. */}
              {/* Handle form submission and finalize the order */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
