import React from "react";
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
        <div className="food-item">
          <img src="caldereta.png" alt="Food 1" />
          <h3>Caldereta</h3>
          <p>
            Caldereta is a type of meat stew that is a staple in Filipino
            cuisine, especially in the Tagalog or Luzon region of the
            Philippines.
          </p>
        </div>
        <div className="food-item">
          <img src="adobo.png" alt="Food 2" />
          <h3>Afritada</h3>
          <p>
            Afritada is one of many traditional Filipino stews which use a tangy
            tomato sauce as the key ingredient.
          </p>
        </div>
        <div className="food-item">
          <img src="sisig.png" alt="Food 3" />
          <h3>Sisig</h3>
          <p>
            The sisig, a delicious Pampanga dish that is now popular
            nationwide—and abroad.
          </p>
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
      </section>


      <footer className="social-footer">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={30} />
          </a>
          <p>&copy; Campus Crave Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
