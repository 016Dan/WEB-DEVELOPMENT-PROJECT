import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "./login.jpg";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        onLogin(email);
        navigate("/home"); // Redirect to home after successful login
      } else {
        console.error("Error signing in:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <p>
            Don't have an account?{" "}
            <span onClick={handleSignUpRedirect} className="signup-link">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
