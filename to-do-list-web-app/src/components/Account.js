import React from "react";
import { useForm } from "react-hook-form";
import "./Account.css";

const Account = ({ onLogout, onAddFoodItem }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitFeedback = (data) => {
    // Handle feedback submission
    console.log("Feedback submitted:", data);
    // You can perform additional actions like sending feedback to the server
    // Reset the form after submission
    reset();
  };

  const [newUserItem, setNewUserItem] = React.useState({
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

      {/* Feedback Form */}
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit(onSubmitFeedback)}>
        <label htmlFor="feedback1">Feedback:</label>
        <textarea
          id="feedback1"
          name="feedback1"
          {...register("feedback1", { required: true })}
        />
        <button type="submit1">Submit Feedback</button>
      </form>

      {/* Add Your Food Item Form */}
      <h2>Add Your Food Item</h2>
      <form onSubmit={addNewFoodItem}>
        <label htmlFor="name1">Name:</label>
        <input
          type="text1"
          id="name1"
          name="name1"
          value={newUserItem.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="description1">Description:</label>
        <textarea
          id="description1"
          name="description1"
          value={newUserItem.description}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="price1">Price (Php):</label>
        <input
          type="number1"
          id="price1"
          name="price1"
          value={newUserItem.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit1">Add to Menu</button>
      </form>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Account;
