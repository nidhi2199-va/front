import React from "react";
import "../Login.css"; // Import CSS for Login screen

const LoginComponent = ({
  formData,
  loading,
  message,
  handleChange,
  handleSubmit,
  navigate, // Use navigate prop
}) => {
  return (
    <div className="login-container">
      <h1 className="meetease">MeetEase</h1>
      <div className="login">
        <h4 className="login-h4">Login</h4>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="text_area">
            <i className="fas fa-user icon"></i>
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
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
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

          {message && (
            <div
              className={`error-message ${
                message.includes("success") ? "success" : "error"
              }`}
            >
              {message}
            </div>
          )}
        </form>
{/* 
        <p className="link" onClick={() => navigate("/signup")}>
          New User? Sign Up
        </p> */}
        <span className="link" onClick={() => (window.location.href = "/signup")}>
            New User? Sign Up
        </span>
      </div>
    </div>
  );
};

export default LoginComponent;