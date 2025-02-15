// import React, { Component } from "react";
// import { signup } from "../../../utils/api"; // Import the signup service
// import SignupComponent from "../component/SignupComponent"; // Import UI component
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// class SignupContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         role: "", // No default value
//         department: "",
//         secretCode: "", // Only for admin
//       },
//       loading: false,
//       message: "",
//       error: "",
//     };
//   }

//   // Handle form input changes
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       formData: { ...this.state.formData, [name]: value },
//     });
//   };

//   // Handle role change (show/hide secret code field)
//   handleRoleChange = (e) => {
//     const selectedRole = e.target.value;
//     this.setState({
//       formData: { ...this.state.formData, role: selectedRole, secretCode: "" },
//     });
//   };

//   // Handle form submission
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({ loading: true, message: "", error: "" });

//     const { formData } = this.state;

//     // Validate role selection
//     if (!formData.role) {
//       this.setState({ error: "Please select a role (User or Admin).", loading: false });
//       return;
//     }

//     // Validate secret code for admin
//     if (formData.role === "ADMIN" && !formData.secretCode) {
//       this.setState({ error: "Please enter the admin secret code.", loading: false });
//       return;
//     }

//     try {
//       // Call the signup API
//       const response = await signup(formData);

//       if (response.success) {
//         this.setState({ message: "Signup successful! Redirecting to login..." });
//         setTimeout(() => this.props.navigate("/login"), 2000); // Redirect after 2 seconds
//       } else {
//         this.setState({ error: response.message || "Signup failed. Please try again." });
//       }
//     } catch (err) {
//       this.setState({ error: "An error occurred. Please try again." });
//     }

//     this.setState({ loading: false });
//   };

//   render() {
//     const { formData, loading, message, error } = this.state;
//     return (
//       <SignupComponent
//         formData={formData}
//         loading={loading}
//         message={message}
//         error={error}
//         handleChange={this.handleChange}
//         handleRoleChange={this.handleRoleChange}
//         handleSubmit={this.handleSubmit}
//         navigate={this.props.navigate} // Pass navigation function
//       />
//     );
//   }
// }

// // Wrap SignupContainer with navigate function using a Higher Order Component
// function SignupContainerWrapper(props) {
//   const navigate = useNavigate();
//   return <SignupContainer {...props} navigate={navigate} />;
// }

// export default SignupContainerWrapper;
// import React, { Component } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Replacing withRouter
// import { signup } from "../../../utils/api";
// import SignupComponent from "../component/SignupComponent";

// class SignupContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         role: "",
//         department: "",
//         secretCode: "",
//       },
//       loading: false,
//       message: "",
//       error: "",
//     };
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       formData: { ...this.state.formData, [name]: value },
//     });
//   };

//   handleRoleChange = (e) => {
//     const selectedRole = e.target.value;
//     this.setState({
//       formData: { ...this.state.formData, role: selectedRole, secretCode: "" },
//     });
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({ loading: true, message: "", error: "" });

//     const { formData } = this.state;

//     if (!formData.role) {
//       this.setState({ error: "Please select a role (User or Admin).", loading: false });
//       return;
//     }

//     if (formData.role === "ADMIN" && !formData.secretCode) {
//       this.setState({ error: "Please enter the admin secret code.", loading: false });
//       return;
//     }

//     try {
//       const response = await signup(formData);

//       if (response.success) {
//         this.setState({ message: "Signup successful! Redirecting to login..." });
//         setTimeout(() => this.props.navigate("/login"), 2000); // ✅ Using navigate
//       } else {
//         this.setState({ error: response.message || "Signup failed. Please try again." });
//       }
//     } catch (err) {
//       this.setState({ error: "An error occurred. Please try again." });
//     }

//     this.setState({ loading: false });
//   };

//   render() {
//     const { formData, loading, message, error } = this.state;
//     return (
//       <SignupComponent
//         formData={formData}
//         loading={loading}
//         message={message}
//         error={error}
//         handleChange={this.handleChange}
//         handleRoleChange={this.handleRoleChange}
//         handleSubmit={this.handleSubmit}
//         navigate={this.props.navigate} // ✅ Pass navigate correctly
//       />
//     );
//   }
// }

// // ✅ Use the new `useNavigate` for navigation instead of `withRouter`
// const SignupContainerWithNavigate = (props) => {
//   const navigate = useNavigate();
//   return <SignupContainer {...props} navigate={navigate} />;
// };

// export default SignupContainerWithNavigate;
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../utils/api";
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
