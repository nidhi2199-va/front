import React, { Component } from "react";
import { fetchUserHistory } from "../../../shared/utils/api";
import HistoryComponent from "../component/HistoryComponent";

class HistoryContainer extends Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    this.loadBookings();
  }

  loadBookings = async () => {
    try {
      const bookings = await fetchUserHistory();
      this.setState({ bookings });
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  render() {
    return <HistoryComponent bookings={this.state.bookings} />;
  }
}

export default HistoryContainer;
