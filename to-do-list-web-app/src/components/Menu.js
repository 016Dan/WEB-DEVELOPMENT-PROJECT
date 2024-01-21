import React from "react"; 
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = ({ setCartItems }) => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...item, quantity: 1 },
    ]);
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
      price: 60.0,
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
      price: 60.0,
    },
    {
      id: 7,
      name: "Chocolate Cake",
      description: "Sweet yet soft chiffon cake filled with chocolate",
      price: 60.0,
    },
    {
      id: 8,
      name: "Cookies",
      description: "Soft and freshly baked chewy chocolate chip cookie",
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
    </section>
  );
};

export default Menu;
