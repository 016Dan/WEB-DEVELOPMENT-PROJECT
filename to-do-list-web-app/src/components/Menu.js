import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ setCartItems }) => {
  // Added setCartItems prop
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]); // Updated to use previous state
    navigate("/cart");
  };

  const foodItems = [
    {
      id: 1,
      name: "Burger Steak with Rice",
      description: "Juicy patty, savory gravy, fluffy rice",
      price: 80.0,
    },
    {
      id: 2,
      name: "Fried Chicken with Rice",
      description: "Crispylicious and Juicylicious Fried Chicken",
      price: 60.0,
    },
    // ... (other food items)
  ];

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
    </section>
  );
};

export default Menu;
