// import React, { Component } from "react";
// import { login } from "../../../util/api"; // API call from util/api.js
// import UserDashboardComponent from "../component/UserDashboardComponent";
// import { useNavigate } from "react-router-dom";

// class UserDashboardContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewBookings: false,
//       selectedDate: null,
//       startTime: "",
//       endTime: "",
//       rooms: [],
//       completedBookings: [],
//       showCompleted: false,
//     };
//   }

//   componentDidMount() {
//     if (!localStorage.getItem("token")) {
//       alert("Unauthorized. Please log in again.");
//       this.props.navigate("/login");
//     }
//   }

//   fetchCompletedBookings = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const response = await login.get("/bookings/history/user", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       this.setState({ completedBookings: response.data });
//     } catch (error) {
//       console.error("Error fetching completed bookings:", error);
//     }
//   };

//   fetchAvailableRooms = async () => {
//     const { selectedDate, startTime, endTime } = this.state;
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const response = await login.get("/meeting-rooms/availability", {
//         params: { startTime, endTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       this.setState({ rooms: response.data.availableRooms });
//       this.props.navigate("/available-rooms", { state: { availableRooms: response.data.availableRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms:", error);
//     }
//   };

//   handleSignOut = () => {
//     localStorage.removeItem("token");
//     this.props.navigate("/login");
//   };

//   toggleViewBookings = () => {
//     this.setState((prevState) => ({ viewBookings: !prevState.viewBookings }));
//     if (!this.state.viewBookings) {
//       this.fetchCompletedBookings();
//     }
//   };

//   render() {
//     return (
//       <UserDashboardComponent
//         viewBookings={this.state.viewBookings}
//         selectedDate={this.state.selectedDate}
//         startTime={this.state.startTime}
//         endTime={this.state.endTime}
//         rooms={this.state.rooms}
//         completedBookings={this.state.completedBookings}
//         showCompleted={this.state.showCompleted}
//         fetchAvailableRooms={this.fetchAvailableRooms}
//         toggleViewBookings={this.toggleViewBookings}
//         handleSignOut={this.handleSignOut}
//       />
//     );
//   }
// }

// export default (props) => <UserDashboardContainer navigate={useNavigate()} {...props} />;
