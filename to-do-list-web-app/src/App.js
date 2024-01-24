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
  const [loggedOut, setLoggedOut] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedOut(true);
    setUsername("");
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          {loggedIn && (
            <li className="app-nav">
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
                <button onClick={handleLogout}>Logout</button>
              </li>
            </li>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/orders" element={<Orders cartItems={cartItems} />} />
          <Route
            path="/account"
            element={loggedIn ? <Account /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              loggedIn ? (
                <Navigate to="/Home" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/login"
            element={
              loggedOut ? (
                <Navigate to="/Login" />
              ) : (
                <Login onLogout={handleLogout} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
