
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../shared/utils/api";
import SignupComponent from "../component/SignupComponent"; // Check the import path

class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        department: "",
        secretCode: "",
      },
      loading: false,
      message: "",
      error: "",
    };
    this._isMounted = false; // ✅ Prevent memory leaks
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  };

  handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    this.setState({
      formData: { ...this.state.formData, role: selectedRole, secretCode: "" },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, message: "", error: "" });

    const { formData } = this.state;

    if (!formData.role) {
      this.setState({ error: "Please select a role (User or Admin).", loading: false });
      return;
    }

    if (formData.role === "ADMIN" && !formData.secretCode) {
      this.setState({ error: "Please enter the admin secret code.", loading: false });
      return;
    }

    try {
      const response = await signup(formData);

      if (response.success) {
        this.setState({ message: "Signup successful! Redirecting to login..." });

        setTimeout(() => {
          if (this._isMounted) {
            this.props.navigate("/login");
          }
        }, 2000);
      } else {
        this.setState({ error: response.message || "Signup failed. Please try again." });
      }
    } catch (err) {
      this.setState({ error: "An error occurred. Please try again." });
    }

    this.setState({ loading: false });
  };

  render() {
    const { formData, loading, message, error } = this.state;
    return (
      <SignupComponent
        formData={formData}
        loading={loading}
        message={message}
        error={error}
        handleChange={this.handleChange}
        handleRoleChange={this.handleRoleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const SignupContainerWithNavigate = (props) => {
  const navigate = useNavigate();
  return <SignupContainer {...props} navigate={navigate} />;
};

export default SignupContainerWithNavigate;
