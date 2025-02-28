
import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Hooks from React Router v6
import AvailableRoomsComponent from "../component/AvailableRoomsComponent";
import { bookRoom } from "../../../shared/utils/api"; // Import the bookRoom function
import {toast} from "react-hot-toast"
class AvailableRoomsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableRooms: [],
      searchCapacity: "",
    };
  }

  componentDidMount() {
    const { availableRooms: initialRooms } = this.props.location.state || {};

    if (!initialRooms) {
      this.props.navigate("/dashboard"); // Redirect if no data is passed
    } else {
      this.setState({ availableRooms: initialRooms });
    }
  }

  handleBooking = async (roomId) => {
    const { startTime, endTime } = this.props.location.state || {};
    const { navigate } = this.props;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized: Please login first.");
        navigate("/login");
        return;
      }

      await bookRoom(roomId, startTime, endTime, token);

      // Remove booked room from the list
      this.setState((prevState) => ({
        availableRooms: prevState.availableRooms.filter((room) => room.id !== roomId),
      }));

      toast.success("Room booked successfully!");
    } catch (error) {
     
      alert("Failed to book room. Please try again.");
    }
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.navigate("/login");
  };

  handleSearchCapacityChange = (e) => {
    this.setState({ searchCapacity: e.target.value });
  };

  render() {
    const { location } = this.props;
    const { startTime, endTime } = location.state || {};
    const { availableRooms, searchCapacity } = this.state;

    const filteredRooms = availableRooms.filter((room) =>
      searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
    );

    return (
      <AvailableRoomsComponent
        startTime={startTime}
        endTime={endTime}
        availableRooms={filteredRooms}
        searchCapacity={searchCapacity}
        onSearchCapacityChange={this.handleSearchCapacityChange}
        onBookRoom={this.handleBooking}
        onSignOut={this.handleSignOut}
        navigate={this.props.navigate}
      />
    );
  }
}

// Convert the component to a functional one to use hooks
const AvailableRoomsContainerWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AvailableRoomsContainer
      location={location}
      navigate={navigate}
    />
  );
};

export default AvailableRoomsContainerWrapper;