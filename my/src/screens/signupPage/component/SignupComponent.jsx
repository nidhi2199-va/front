import React from "react";
import "../signup.css"; // Import CSS for styling

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
        <div className="login-container">
          <div className="login">
            <h4 className="login-h4">Sign Up</h4>
    
            {/* Success or Error Messages */}
            {message && <div className="error-message success">{message}</div>}
            {error && <div className="error-message error">{error}</div>}
    
            <form className="login-form"onSubmit={handleSubmit}>
              {/* Name */}
              <div className="text_area">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
    
              {/* Email */}
              <div className="text_area">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
    
              {/* Phone */}
              <div className="text_area">
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
    
              {/* Password */}
              <div className="text_area">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
    
              {/* Role */}
              <div className="text_area">
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
    
              {/* Secret Code for Admin */}
              {formData.role === "ADMIN" && (
                <div className="text_area">
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
    
              {/* Department */}
              <div className="text_area">
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
              
             
              
              <span className="link" onClick={() => (window.location.href = "/login")}>
  Registered User? Login
</span>

            
              {/* Submit Button */}
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
    
            
          </div>
        </div>
      );
    };
   
    
    export default SignupComponent;
    