import React, { useState } from "react";

const Account = ({ onLogout, onAddFoodItem }) => {
  const [newUserItem, setNewUserItem] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUserItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const addNewFoodItem = (event) => {
    event.preventDefault();

    if (newUserItem.name && newUserItem.description && newUserItem.price) {
      // Call the onAddFoodItem function passed from App.js
      onAddFoodItem(newUserItem);
    } else {
      console.error("Please fill in all required fields");
    }
  };

  return (
    <div>
      <h2>Account</h2>
      {/* Display the "Add Item to Menu" form in the Account section */}
      <h2>Add Your Food Item</h2>
      <form onSubmit={addNewFoodItem}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newUserItem.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newUserItem.description}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="price">Price (Php):</label>
        <input
          type="number"
          id="price"
          name="price"
          value={newUserItem.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add to Menu</button>
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Account;
