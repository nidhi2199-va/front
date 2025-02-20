

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookedMeetings, completeBooking, cancelBooking, updateBooking } from "../../../shared/utils/api";
import BookedBookingComponent from "../component/BookedBookingComponent";
import dayjs from "dayjs";
import {toast} from "react-hot-toast"
const BookedBookingContainer = () => {
  const [bookedMeetings, setBookedMeetings] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBookedMeetings();
  }, []);

  const fetchBookedMeetings = async () => {
    try {
      const data = await getBookedMeetings();
      setBookedMeetings(data);
    } catch (error) {
      console.error("Error fetching booked meetings:", error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await completeBooking(id);
      toast.success("Booking marked as completed!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
      
      toast.error("Failed to complete booking.");
    }
  };

  const handleCancel = async (id) => {
    try {
      await cancelBooking(id);
      toast.success("Booking has been cancelled!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
     
      toast.error("Failed to cancel booking.");
    }
  };

  const openUpdateModal = (booking) => {
    setSelectedBooking(booking);
    setNewStartTime(dayjs(booking.startTime).format("YYYY-MM-DDTHH:mm"));
    setNewEndTime(dayjs(booking.endTime).format("YYYY-MM-DDTHH:mm"));
    setShowModal(true);
  };

  const handleUpdateBooking = async () => {
    if (!selectedBooking) return;
  
    const start = dayjs(newStartTime);
    const end = dayjs(newEndTime);
  
    // Validation: Check if end time is before or same as start time
    if (end.isBefore(start) || end.isSame(start)) {
      toast.error("End time must be after start time!");
      return; // Stop the update
    }
  
    try {
      await updateBooking(selectedBooking.id, selectedBooking.roomId, newStartTime, newEndTime);
      toast.success("Booking updated successfully!");
  
      setBookedMeetings((prev) =>
        prev.map((booking) =>
          booking.id === selectedBooking.id
            ? { ...booking, startTime: newStartTime, endTime: newEndTime }
            : booking
        )
      );
  
      setShowModal(false);
    } catch (error) {
      toast.error("Failed to update booking.");
    }
  };
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const formatDate = (dateString) => {
    return dayjs(dateString).format("YYYY-MM-DD");
  };
  

  const filteredMeetings = bookedMeetings.filter((booking) =>
    booking.status === "BOOKED" &&
    (searchDate ? formatDate(booking.date) === formatDate(searchDate) : true) &&
    (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
  );

  return (
    <BookedBookingComponent
      bookedMeetings={filteredMeetings}
      searchDate={searchDate}
      setSearchDate={setSearchDate}
      searchRoom={searchRoom}
      setSearchRoom={setSearchRoom}
      handleComplete={handleComplete}
      handleCancel={handleCancel}
      openUpdateModal={openUpdateModal}
      handleUpdateBooking={handleUpdateBooking}
      handleSignOut={handleSignOut}
      showModal={showModal}
      setShowModal={setShowModal}
      selectedBooking={selectedBooking}
      newStartTime={newStartTime}
      setNewStartTime={setNewStartTime}
      newEndTime={newEndTime}
      setNewEndTime={setNewEndTime}
    />
  );
};

export default BookedBookingContainer;