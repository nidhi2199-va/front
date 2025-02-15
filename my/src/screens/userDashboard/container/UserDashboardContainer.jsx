import React, { Component } from "react";
import { fetchCompletedBookings, fetchAvailableRooms } from "../../../utils/api"; // Import API calls

import { BookingForm,BookingHistory,Navbar,Sidebar } from "../component";
import { useNavigate, useLocation, useParams } from "react-router-dom"; // Import React Router hooks

class UserDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBookings: false,
      selectedDate: null,
      startTime: "",
      endTime: "",
      rooms: [],
      completedBookings: [],
      showCompleted: false,
    };
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = (type, value) => {
    this.setState({ [type]: value });
  };

  toggleViewBookings = async () => {
    this.setState((prevState) => ({ viewBookings: !prevState.viewBookings }));

    if (!this.state.viewBookings) {
      try {
        const completedBookings = await fetchCompletedBookings();
        this.setState({ completedBookings });
      } catch (error) {
        console.error("Error fetching completed bookings:", error);
      }
    }
  };

  handleRoomSearch = async () => {
    const { selectedDate, startTime, endTime } = this.state;
    const { navigate } = this.props;

    if (!selectedDate || !startTime || !endTime) {
      alert("Please select a date, start time, and end time.");
      return;
    }
    if (endTime <= startTime) {
      alert("End time must be after start time.");
      return;
    }

    try {
      const rooms = await fetchAvailableRooms(selectedDate, startTime, endTime);
      this.setState({ rooms });

      navigate("/available-rooms", {
        state: { startTime, endTime, availableRooms: rooms },
      });
    } catch (error) {
      console.error("Error fetching available rooms:", error);
      alert("Failed to fetch available rooms. Try again later.");
    }
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.navigate("/login");
  };

  render() {
    return (
      <UserDashboardComponent
        {...this.state}
        onDateChange={this.handleDateChange}
        onTimeChange={this.handleTimeChange}
        onToggleViewBookings={this.toggleViewBookings}
        onRoomSearch={this.handleRoomSearch}
        onSignOut={this.handleSignOut}
      />
    );
  }
}

// Wrapper function to pass React Router hooks to the class component
function UserDashboardContainerWrapper(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return <UserDashboardContainer {...props} navigate={navigate} location={location} params={params} />;
}

export default UserDashboardContainerWrapper;
