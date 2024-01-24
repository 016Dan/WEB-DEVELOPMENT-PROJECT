import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>CampusCraveHub</h1>
        <p>TUP CAMPUS E-CANTEEN: Empowering Student Entrepreneurs</p>
      </header>

      <section className="menu-section">
        <h2>Today's Menu</h2>
        <div className="food-item">
          <img src="food1.jpg" alt="Food 1" />
          <h3>Food Item 1</h3>
          <p>Description of Food Item 1.</p>
        </div>
        <div className="food-item">
          <img src="adodo.png" alt="Food 2" />
          <h3>Food Item 2</h3>
          <p>Description of Food Item 2.</p>
        </div>
        <div className="food-item">
          <img src="food3.jpg" alt="Food 3" />
          <h3>Food Item 3</h3>
          <p>Description of Food Item 3.</p>
        </div>
      </section>

      <section className="order-section">
        <h2>Place Your Order</h2>
        <p>Click below to explore the menu and place your order.</p>
        <Link to="/menu">
          <button>Click here to place your order</button>
        </Link>
      </section>

      <section className="user-section">
        <h2>Your Preferences</h2>
        <p>Your current preferences based on the menu:</p>
        {/* Add logic here to fetch and display preferences */}
      </section>
    </div>
  );
};

export default Home;
