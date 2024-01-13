import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Contacts from "./components/Contacts";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li style={{ marginRight: "20px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;