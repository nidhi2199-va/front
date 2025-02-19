import React, { useEffect, useState } from "react";
import { BookingHistoryComponent } from "../components";
import { fetchCompletedBookings } from "../../../utils/api";

const BookingHistoryContainer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchCompletedBookings()
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  return <BookingHistoryComponent bookings={bookings} />;
};

export default BookingHistoryContainer;