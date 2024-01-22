import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = ({ setCartItems }) => {
  const navigate = useNavigate();

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

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, quantity: 1 },
    ]);
    navigate("/cart");
  };

  const addNewFoodItem = (event) => {
    event.preventDefault();

    if (newUserItem.name && newUserItem.description && newUserItem.price) {
      setFoodItems((prevItems) => [...prevItems, newUserItem]);
      setNewUserItem({ name: "", description: "", price: 0, image: "" });
    } else {
      console.error("Please fill in all required fields");
    }
  };

  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Burger Steak with Rice",
      description: "Juicy patty, savory gravy, fluffy rice",
      price: 60.0,
    },
    {
      id: 2,
      name: "Fried Chicken with Rice",
      description: "Crispylicious and Juicylicious Fried Chicken",
      price: 55.0,
    },
    {
      id: 3,
      name: "Afritada with Rice",
      description: "Meaty and saucy top in rice",
      price: 60.0,
    },
    {
      id: 4,
      name: "Lumpia with Rice",
      description: "Crispy deep fried spring rolls",
      price: 30.0,
    },
    {
      id: 5,
      name: "Caldereta with Rice",
      description: "Saucy with a bit of spice pork",
      price: 60.0,
    },
    {
      id: 6,
      name: "Sisig with Rice",
      description: "Crispy pork meat with onions and mayonaise",
      price: 50.0,
    },
    {
      id: 7,
      name: "Chocolate Cake",
      description: "Sweet yet soft chiffon cake filled with chocolate",
      price: 20.0,
    },
    {
      id: 8,
      name: "Cookies",
      description: "Soft and freshly baked chewy chocolate chip cookie",
      price: 10.0,
    },
  ]);

  return (
    <section className="menu">
      <h1>Menu</h1>
      <div className="menu-items">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: Php {item.price}</p>
            <button className="menu-cart" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {}
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
    </section>
  );
};

export default Menu;
