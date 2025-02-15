// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signup } from '../service/signup';
// import "./signup.css"; // Import CSS for styling

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     role: '',  // No default value now
//     department: '',
//     secretCode: '' 
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle role change (show/hide secret code field)
//   const handleRoleChange = (e) => {
//     const selectedRole = e.target.value;
//     setFormData({ ...formData, role: selectedRole, secretCode: selectedRole === 'ADMIN' ? '' : '' });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     setError('');

//     if (!formData.role) {
//       setError('Please select a role (User or Admin).');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await signup(formData);

//       if (response.success) {
//         setMessage('Signup successful! Redirecting to login...');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setError(response.message || 'Signup failed. Please try again.');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         {/* MeetEase title */}
//         <h1 className="meet-ease">MeetEase</h1>

//         <h2 className="signup-title">Sign Up</h2>

//         {/* Display Success or Error Messages */}
//         {message && <div className="message success">{message}</div>}
//         {error && <div className="message error">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="input-group">
//             <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
//           </div>

//           {/* Email Field */}
//           <div className="input-group">
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           </div>

//           {/* Phone Field */}
//           <div className="input-group">
//             <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required pattern="\d{10}" title="Phone number must be 10 digits." />
//           </div>

//           {/* Password Field */}
//           <div className="input-group">
//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           </div>

//           {/* Role Selection */}
//           <div className="input-group">
//             <select name="role" value={formData.role} onChange={handleRoleChange} required>
//               <option value="">Select Role</option>  {/* Placeholder */}
//               <option value="USER">User</option>
//               <option value="ADMIN">Admin</option>
//             </select>
//           </div>

//           {/* Secret Code (only for admin signup) */}
//           {formData.role === 'ADMIN' && (
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="secretCode"
//                 value={formData.secretCode}
//                 onChange={handleChange}
//                 placeholder="Enter Admin Secret Code"
//                 required
//               />
//             </div>
//           )}

//           {/* Department Selection */}
//           <div className="input-group">
//             <select name="department" value={formData.department} onChange={handleChange} required>
//               <option value="">Select Department</option>
//               <option value="TECH">Tech</option>
//               <option value="HR">HR</option>
//               <option value="SALES">Sales</option>
//               <option value="OPERATIONS">Operations</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="signup-button" disabled={loading}>
//             {loading ? 'Signing up...' : 'Sign Up'}
//           </button>
//         </form>

//         {/* Navigate to Login */}
//         <p className="login-link">
//           Already have an account?{' '}
//           <span className="login-redirect" onClick={() => navigate('/login')}>
//             Log in here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../service/signup"; // API function
import "./signup.css"; // Import CSS for styling

const Signup = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "", // No default value
    department: "",
    secretCode: "", // Only for admin
  });

  // State for loading, messages, and errors
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle role change (show/hide secret code field)
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setFormData({ ...formData, role: selectedRole, secretCode: "" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    // Validate role selection
    if (!formData.role) {
      setError("Please select a role (User or Admin).");
      setLoading(false);
      return;
    }

    // Validate secret code for admin
    if (formData.role === "ADMIN" && !formData.secretCode) {
      setError("Please enter the admin secret code.");
      setLoading(false);
      return;
    }

    try {
      // Call the signup API
      const response = await signup(formData);

      if (response.success) {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      } else {
        setError(response.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

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

export default Signup;