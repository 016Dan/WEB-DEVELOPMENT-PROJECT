import React, { useState } from "react";
import "./Order.css";

const Orders = ({ cartItems }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDate, setOrderDate] = useState(null);

  const calculateOrderTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setIsCheckout((prevIsCheckout) => !prevIsCheckout);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Store the order date
    setOrderDate(new Date());

    // Reset the form fields after submission
    setFormData({
      name: "",
      address: "",
    });

    // Display the receipt
    setShowReceipt(true);

    // Add additional logic for finalizing the order, such as sending data to a server, etc.
  };

  return (
    <div>
      <div className="order-history">
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
              {!showReceipt ? (
                <>
                  <h2>Checkout Form</h2>
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <label>
                      Address:
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <button type="submit">Finalize Order</button>
                  </form>
                </>
              ) : (
                <>
                  <div className="order-confirmed">
                  <h2>Order Confirmed</h2>
                  <p>Thank you for your order, {formData.name}!</p>
                  <p>Your items will be shipped to:</p>
                  <p>{formData.address}</p>
                  <p>Order Date: {orderDate && orderDate.toLocaleString()}</p>
                  <div className="receipt">
                    <h3>Electronic Receipt</h3>
                    <p>Order Total: Php {calculateOrderTotal()}</p>
                    {/* Add more receipt details as needed */}
                  </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Orders;
