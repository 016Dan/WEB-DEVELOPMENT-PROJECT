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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]); // Added cartItems state

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
                Welcome, {username}!{" "}
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
          <Route
            path="/menu"
            element={<Menu setCartItems={setCartItems} />} // Passed setCartItems as a prop
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />} // Passed cartItems as a prop
          />
          <Route
            path="/order"
            element={<Orders cartItems={cartItems} />} // Passed cartItems as a prop
          />
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
