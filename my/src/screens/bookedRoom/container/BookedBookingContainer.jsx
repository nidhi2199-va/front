
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import dayjs from "dayjs";
// import BookedBookingComponent from "../component/BookedBookingComponent";
// import {
//   getBookedMeetings,
//   completeBooking,
//   cancelBooking,
//   updateBooking,
// } from "../../../utils/api"

// const BookedBookingContainer = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const [searchRoom, setSearchRoom] = useState("");
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [newStartTime, setNewStartTime] = useState("");
//   const [newEndTime, setNewEndTime] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookedMeetings();
//   }, []);

//   const fetchBookedMeetings = async () => {
//     try {
//       const data = await getBookedMeetings();
//       setBookedMeetings(data);
//     } catch (error) {
//       console.error("Error fetching booked meetings", error);
//     }
//   };

//   const handleComplete = async (id) => {
//     try {
//       await completeBooking(id);
//       alert("Booking marked as completed!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   const handleCancel = async (id) => {
//     try {
//       await cancelBooking(id);
//       alert("Booking has been cancelled!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       alert("Failed to cancel booking.");
//     }
//   };

//   const openUpdateModal = (booking) => {
//     setSelectedBooking(booking);
//     setNewStartTime(dayjs(booking.startTime).format("YYYY-MM-DDTHH:mm"));
//     setNewEndTime(dayjs(booking.endTime).format("YYYY-MM-DDTHH:mm"));
//     setShowModal(true);
//   };

//   const handleUpdateBooking = async () => {
//     if (!selectedBooking) return;

//     try {
//       await updateBooking(
//         selectedBooking.id,
//         selectedBooking.roomId,
//         newStartTime,
//         newEndTime
//       );
//       alert("Booking updated successfully!");
//       setBookedMeetings((prev) =>
//         prev.map((booking) =>
//           booking.id === selectedBooking.id
//             ? { ...booking, startTime: newStartTime, endTime: newEndTime }
//             : booking
//         )
//       );
//       setShowModal(false);
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking.");
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

//   const formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   const filteredMeetings = bookedMeetings.filter((booking) =>
//     booking.status === "BOOKED" &&
//     (searchDate ? formatDate(booking.date) === formatDate(searchDate) : true) &&
//     (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
//   );

//   return (
//     <BookedBookingComponent
//       bookedMeetings={filteredMeetings}
//       searchDate={searchDate}
//       setSearchDate={setSearchDate}
//       searchRoom={searchRoom}
//       setSearchRoom={setSearchRoom}
//       handleComplete={handleComplete}
//       handleCancel={handleCancel}
//       openUpdateModal={openUpdateModal}
//       handleUpdateBooking={handleUpdateBooking}
//       handleSignOut={handleSignOut}
//       showModal={showModal}
//       setShowModal={setShowModal}
//       selectedBooking={selectedBooking}
//       newStartTime={newStartTime}
//       setNewStartTime={setNewStartTime}
//       newEndTime={newEndTime}
//       setNewEndTime={setNewEndTime}
//       formatDate={formatDate}
//       formatTime={formatTime}
//     />
//   );
// };

// export default BookedBookingContainer;
// import React, { Component } from "react";

// import dayjs from "dayjs";
// import BookedBookingComponent from "../component/BookedBookingComponent";
// import {
//   getBookedMeetings,
//   completeBooking,
//   cancelBooking,
//   updateBooking,
// } from "../../../utils/api";

// class BookedBookingContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       bookedMeetings: [],
//       searchDate: "",
//       searchRoom: "",
//       selectedBooking: null,
//       newStartTime: "",
//       newEndTime: "",
//       showModal: false,
//     };
//   }

//   componentDidMount() {
//     this.fetchBookedMeetings();
//   }

//   fetchBookedMeetings = async () => {
//     try {
//       const data = await getBookedMeetings();
//       this.setState({ bookedMeetings: data });
//     } catch (error) {
//       console.error("Error fetching booked meetings", error);
//     }
//   };

//   handleComplete = async (id) => {
//     try {
//       await completeBooking(id);
//       alert("Booking marked as completed!");
//       this.setState((prevState) => ({
//         bookedMeetings: prevState.bookedMeetings.filter(
//           (booking) => booking.id !== id
//         ),
//       }));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   handleCancel = async (id) => {
//     try {
//       await cancelBooking(id);
//       alert("Booking has been cancelled!");
//       this.setState((prevState) => ({
//         bookedMeetings: prevState.bookedMeetings.filter(
//           (booking) => booking.id !== id
//         ),
//       }));
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       alert("Failed to cancel booking.");
//     }
//   };

//   openUpdateModal = (booking) => {
//     this.setState({
//       selectedBooking: booking,
//       newStartTime: dayjs(booking.startTime).format("YYYY-MM-DDTHH:mm"),
//       newEndTime: dayjs(booking.endTime).format("YYYY-MM-DDTHH:mm"),
//       showModal: true,
//     });
//   };

//   handleUpdateBooking = async () => {
//     const { selectedBooking, newStartTime, newEndTime } = this.state;
//     if (!selectedBooking) return;

//     try {
//       await updateBooking(
//         selectedBooking.id,
//         selectedBooking.roomId,
//         newStartTime,
//         newEndTime
//       );
//       alert("Booking updated successfully!");
//       this.setState((prevState) => ({
//         bookedMeetings: prevState.bookedMeetings.map((booking) =>
//           booking.id === selectedBooking.id
//             ? { ...booking, startTime: newStartTime, endTime: newEndTime }
//             : booking
//         ),
//         showModal: false,
//       }));
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking.");
//     }
//   };

//   handleSignOut = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

//   formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   render() {
//     const {
//       bookedMeetings,
//       searchDate,
//       searchRoom,
//       selectedBooking,
//       newStartTime,
//       newEndTime,
//       showModal,
//     } = this.state;

//     const filteredMeetings = bookedMeetings.filter((booking) =>
//       booking.status === "BOOKED" &&
//       (searchDate ? this.formatDate(booking.date) === this.formatDate(searchDate) : true) &&
//       (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
//     );

//     return (
//       <BookedBookingComponent
//         bookedMeetings={filteredMeetings}
//         searchDate={searchDate}
//         setSearchDate={(date) => this.setState({ searchDate: date })}
//         searchRoom={searchRoom}
//         setSearchRoom={(room) => this.setState({ searchRoom: room })}
//         handleComplete={this.handleComplete}
//         handleCancel={this.handleCancel}
//         openUpdateModal={this.openUpdateModal}
//         handleUpdateBooking={this.handleUpdateBooking}
//         handleSignOut={this.handleSignOut}
//         showModal={showModal}
//         setShowModal={(value) => this.setState({ showModal: value })}
//         selectedBooking={selectedBooking}
//         newStartTime={newStartTime}
//         setNewStartTime={(time) => this.setState({ newStartTime: time })}
//         newEndTime={newEndTime}
//         setNewEndTime={(time) => this.setState({ newEndTime: time })}
//         formatDate={this.formatDate}
//         formatTime={this.formatTime}
//       />
//     );
//   }
// }

// export default BookedBookingContainer;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookedMeetings, completeBooking, cancelBooking, updateBooking } from "../../../utils/api";
import BookedBookingComponent from "../component/BookedBookingComponent";
import dayjs from "dayjs";

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
      alert("Booking marked as completed!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error completing booking:", error);
      alert("Failed to complete booking.");
    }
  };

  const handleCancel = async (id) => {
    try {
      await cancelBooking(id);
      alert("Booking has been cancelled!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking.");
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

    try {
      await updateBooking(selectedBooking.id, selectedBooking.roomId, newStartTime, newEndTime);
      alert("Booking updated successfully!");
      setBookedMeetings((prev) =>
        prev.map((booking) =>
          booking.id === selectedBooking.id
            ? { ...booking, startTime: newStartTime, endTime: newEndTime }
            : booking
        )
      );
      setShowModal(false);
    } catch (error) {
     // console.error("Error updating booking:", error);
      alert("Failed to update booking.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
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