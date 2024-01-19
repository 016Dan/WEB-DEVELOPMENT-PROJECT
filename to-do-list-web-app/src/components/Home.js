import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="home-container">
      <header>
        <h1>CampusCraveHub</h1>
        <p>TUP CAMPUS E-CANTEEN: Empowering Student Entrepreneurs</p>
      </header>

      <section className="menu-section">
        <h2>Today's Menu</h2>
      </section>

      <section className="order-section">
        <h2>Place Your Order</h2>
      </section>

      <section className="user-section">
        <h2>Your Preferences</h2>
      </section>
    </div>
  );
};

export default Home;
