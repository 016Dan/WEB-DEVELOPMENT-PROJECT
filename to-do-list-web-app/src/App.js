// App.js

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Account from "./components/Account";
import About from "./components/About";
import Login from "./components/Login";
import logoImage from "./icon.png";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn state to false
    setUsername("");
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const handleProceedToOrder = (selectedItems) => {
    console.log("Selected Items in App.js:", selectedItems);
    // Add selectedItems to the order history
    setOrderHistory((prevOrderHistory) => [
      ...prevOrderHistory,
      ...selectedItems,
    ]);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          {loggedIn && (
            <div className="app-nav">
              <div className="logo-section">
                <img src={logoImage} alt="Logo" />
              </div>
              <li>WELCOME {username}! </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                {}
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </div>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu setCartItems={setCartItems} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onProceedToOrder={handleProceedToOrder}
              />
            }
          />
          <Route path="/orders" element={<Orders cartItems={orderHistory} />} />
          <Route
            path="/account"
            element={
              loggedIn ? (
                <Account onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login onLogin={handleLogin} onLogout={handleLogout} />
              )
            }
          />
          <Route
            path="/login"
            element={
              loggedOut ? (
                <Navigate to="/Login" />
              ) : (
                <Login
                  onLogout={handleLogout}
                  onAddFoodItem={Menu.addNewFoodItem}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
