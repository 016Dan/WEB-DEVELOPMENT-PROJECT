import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const foodItems = [
    {
      id: 1,
      name: "Burger Steak with Rice",
      description: " Juicy patty, savory gravy, fluffy rice ",
      price: 80.0,
    },
    {
      id: 2,
      name: "Fried Chicken with Rice",
      description: "Crispylicious and Juicylicious Fried Chicken",
      price: 60.0,
    },
    {
      id: 3,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 4,
      name: "Chocolate Chip Cookie",
      description: "Sweet yet delicious, fresh-baked cookie",
      price: 10.0,
    },
    {
      id: 5,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 6,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 7,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 8,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 9,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
    {
      id: 10,
      name: "Caldereta with Rice",
      description: "House-made caldera with saucy sauce with rice",
      price: 60.0,
    },
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
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </section>
  );
};

export default Menu;
