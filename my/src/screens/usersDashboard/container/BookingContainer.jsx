import React, { Component } from "react";
import { fetchAvailableRooms } from "../../../shared/utils/api";
import BookingComponent from "../component/BookingComponent";

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      startTime: "",
      endTime: "",
      rooms: [],
    };
  }

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = async () => {
    const { selectedDate, startTime, endTime } = this.state;
    if (!selectedDate || !startTime || !endTime) {
      alert("Please select a date and time.");
      return;
    }

    try {
      const rooms = await fetchAvailableRooms(selectedDate, startTime, endTime);
      this.setState({ rooms });
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  render() {
    return (
      <BookingComponent
        selectedDate={this.state.selectedDate}
        startTime={this.state.startTime}
        endTime={this.state.endTime}
        rooms={this.state.rooms}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default BookingContainer;
