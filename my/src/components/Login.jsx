import React, { useState } from "react";
import { login } from "../service/login"; // API function
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await login(formData); // API call
      if (response.success) {
        localStorage.setItem("token", response.token); // Store token
        localStorage.setItem("role", response.role); // Store role
        localStorage.setItem("email", response.email); // Store email

        setMessage("Login successful!");

        // Redirect based on role
        if (response.role === "USER") {
          navigate("/userdashboard"); // Navigate to booking page for users
        } else {
          navigate("/admindashboard"); // Redirect admins to another page
        }
      } else {
        setMessage(response.message || "Invalid credentials.");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      {/* Animated MeetEase Text */}
      <h1 className="meetease">MeetEase</h1>
      <div className="login">
        <h4>Login</h4>

        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <i className="fas fa-user icon"></i> {/* User Icon */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="text_input"
              required
            />
          </div>

          <div className="text_area">
            <i className="fas fa-lock icon"></i> {/* Lock Icon */}
            <input
              type="password"  // Secure input type for password
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="text_input"
              required
            />
          </div>

          <input
            type="submit"
            value={loading ? "Logging in..." : "LOGIN"}
            className="btn"
            disabled={loading}
          />

          {/* Display the error message */}
          {message && (
            <div className={`error-message ${message.includes("success") ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </form>

        {/* Use navigate() instead of <a href> */}
        <p className="link" onClick={() => navigate("/signup")}>
          New User? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
