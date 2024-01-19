import React, { useState, useEffect } from "react";
import "./Login.css"; // Import the stylesheet

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Add a class to the body element when the component mounts
    document.body.classList.add("login-page");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
