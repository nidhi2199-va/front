import React, { Component } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of withRouter
import { login } from "../../../shared/utils/api"; // Import the login service
import LoginComponent from "../component/LoginComponent"; // Import UI component
import {toast} from "react-hot-toast"

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { email: "", password: "" },
      loading: false,
      message: "",
    };
  }

  // Handle input changes
  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  // Handle login submission
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, message: "" });

    try {
      const response = await login(this.state.formData); // Use the login service
      if (response.success) {
        localStorage.setItem("token", response.token); // Store token
        localStorage.setItem("role", response.role); // Store role
        localStorage.setItem("email", response.email); // Store email

        this.setState({ message: "Login successful!" });

        // Redirect based on role
        if (response.role === "USER") {
          toast.success("Hello!!! user")
          this.props.navigate("/dashboard"); // Use navigate from props
        } else {
          toast.success("Hello!!! admin")
          this.props.navigate("/admindashboard"); // Use navigate from props
        }
      } else {
        this.setState({ message: response.message || "Invalid credentials." });
      }
    } catch (error) {
      this.setState({ message: error.message || "Login failed. Please try again." });
    }

    this.setState({ loading: false });
  };

  render() {
    const { formData, loading, message } = this.state;
    return (
      <LoginComponent
        formData={formData}
        loading={loading}
        message={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        navigate={this.props.navigate} // Pass navigate from props
      />
    );
  }
}

// Wrap LoginContainer with a function component to use useNavigate
const LoginContainerWrapper = (props) => {
  const navigate = useNavigate(); // Use the useNavigate hook
  return <LoginContainer {...props} navigate={navigate} />; // Pass navigate as a prop
};

export default LoginContainerWrapper;