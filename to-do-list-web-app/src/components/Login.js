import React, { useState } from "react";
import "./Login.css";
import loginImage from "./login.jpg";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, just check if both username and password are non-empty
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-section">
        <h2>Login</h2>
        <div className="input-group">
          <label>
            Email:
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
        </div>
        <div className="button-group">
          <button onClick={handleLogin}>Sign In</button>
          <p className="forgot-password">Forgot Password?</p>
        </div>
        <div className="social-login">
          <button className="google-login">
            Sign In with TUP Portal Account
          </button>
        </div>
        <div className="signup-section">
          <p>Don't have an account? Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
