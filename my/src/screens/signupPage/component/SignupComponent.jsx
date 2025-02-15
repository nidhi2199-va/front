import React from "react";
import "../Signup.css"; // Import CSS for styling

const SignupComponent = ({
  formData,
  loading,
  message,
  error,
  handleChange,
  handleRoleChange,
  handleSubmit,
  navigate,
}) => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* MeetEase title */}
        <h1 className="meet-ease">MeetEase</h1>

        <h2 className="signup-title">Sign Up</h2>

        {/* Display Success or Error Messages */}
        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Phone number must be 10 digits."
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="input-group">
            <select
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          {/* Secret Code (only for admin signup) */}
          {formData.role === "ADMIN" && (
            <div className="input-group">
              <input
                type="text"
                name="secretCode"
                value={formData.secretCode}
                onChange={handleChange}
                placeholder="Enter Admin Secret Code"
                required
              />
            </div>
          )}

          {/* Department Selection */}
          <div className="input-group">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="TECH">Tech</option>
              <option value="HR">HR</option>
              <option value="SALES">Sales</option>
              <option value="OPERATIONS">Operations</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Navigate to Login */}
        <p className="login-link">
          Already have an account?{" "}
          <span className="login-redirect" onClick={() => navigate("/login")}>
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;