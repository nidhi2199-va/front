

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getBookedMeetings, completeBooking, cancelBooking, updateBooking,fetchAvailableRooms, fetchAllRooms  } from "../../../shared/utils/api";
// import BookedBookingComponent from "../component/BookedBookingComponent";
// import dayjs from "dayjs";
// import {toast} from "react-hot-toast"
// const BookedBookingContainer = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const [searchRoom, setSearchRoom] = useState("");
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(""); // Single date picker for updates
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
//       console.error("Error fetching booked meetings:", error);
//     }
//   };

//   const handleComplete = async (id) => {
//     try {
//       await completeBooking(id);
//       toast.success("Booking marked as completed!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
      
//       toast.error("Failed to complete booking.");
//     }
//   };

//   const handleCancel = async (id) => {
//     try {
//       await cancelBooking(id);
//       toast.success("Booking has been cancelled!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
     
//       toast.error("Failed to cancel booking.");
//     }
//   };

//   const openUpdateModal = (booking) => {
//     setSelectedBooking(booking);
//     setSelectedDate(dayjs(booking.startTime).format("YYYY-MM-DD"));
//     setNewStartTime(dayjs(booking.startTime).format("HH:mm"));
//     setNewEndTime(dayjs(booking.endTime).format("HH:mm"));
//     setShowModal(true);
//   };
  
//   const handleUpdateBooking = async () => {
//     if (!selectedBooking) return;
  
//     const startDateTime = `${selectedDate}T${newStartTime}`;
//     const endDateTime = `${selectedDate}T${newEndTime}`;
  
//     if (dayjs(endDateTime).isBefore(dayjs(startDateTime)) || dayjs(endDateTime).isSame(dayjs(startDateTime))) {
//       toast.error("End time must be after start time!");
//       return;
//     }
  
//     try {
//       await updateBooking(selectedBooking.id, selectedBooking.roomId, startDateTime, endDateTime);
//       toast.success("Booking updated successfully!");
  
//       setBookedMeetings((prev) =>
//         prev.map((booking) =>
//           booking.id === selectedBooking.id
//             ? { ...booking, startTime: startDateTime, endTime: endDateTime }
//             : booking
//         )
//       );
  
//       setShowModal(false);
//     } catch (error) {
//       toast.error("Failed to update booking.");
//     }
//   };
//   const handleCheckAvailability = async () => {
//     const { selectedDate, startTime, endTime } = this.state;
//         if (!selectedDate || !startTime || !endTime) {
//           alert("Please select a date, start time, and end time.");
//           return;
//         }
//         if (endTime <= startTime) {
//           alert("End time must be after start time.");
//           return;
//         }
    
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("Unauthorized. Please log in again.");
//           this.props.navigate("/login");
//           return;
//         } 
        
//         const startTimeArr = startTime.split(":");
//         const endTimeArr = endTime.split(":");
//         const formattedStartTime = new Date(selectedDate);
//         formattedStartTime.setHours(startTimeArr[0]);
//         formattedStartTime.setMinutes(startTimeArr[1]);
//         formattedStartTime.setSeconds(0);
//         formattedStartTime.setMilliseconds(0);
    
    
//         const formattedEndTime =  new Date(selectedDate);
//         formattedEndTime.setHours(endTimeArr[0]);
//         formattedEndTime.setMinutes(endTimeArr[1]);
//         formattedEndTime.setSeconds(0);
//         formattedEndTime.setMilliseconds(0);
//         const startTimeFormatted = this.convertToIST(formattedStartTime);
//         const endTimeFormatted = this.convertToIST(formattedEndTime);
//         try {
//           // Fetch available room IDs
//          // .toISOString()
//           const availableRoomIds = await fetchAvailableRooms(startTimeFormatted, endTimeFormatted);
    
//           // Fetch all rooms to filter the available ones
//           const allRooms = await fetchAllRooms();
    
//           // Filter available rooms
//           const filteredRooms = allRooms.filter(room =>
//             availableRoomIds.includes(room.id)
//           );
    
//           // Set the filtered rooms in state
//           this.setState({ rooms: filteredRooms });
    
//           // Navigate to the available rooms page with the necessary state
//           this.props.navigate("/available-rooms", {
//             state: { startTime: startTimeFormatted, endTime: endTimeFormatted, availableRooms: filteredRooms },
//           });
//         } catch (error) {
//           console.error("Error fetching available rooms", error);
//           if (error.message.includes("401")) {
//             alert("Session expired. Please log in again.");
//             localStorage.removeItem("token");
//             this.props.navigate("/login");
//           } else {
//             alert("Failed to fetch available rooms. Try again later.");
//           }
//         }
//       };
//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   const formatDate = (dateString) => {
//     return dayjs(dateString).format("YYYY-MM-DD");
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
//       handleCheckAvailability={handleCheckAvailability}
//       showModal={showModal}
//       setShowModal={setShowModal}
//       selectedBooking={selectedBooking}
//       setSelectedDate={setSelectedDate}
//     newStartTime={newStartTime}
//     setNewStartTime={setNewStartTime}
//     newEndTime={newEndTime}
//     setNewEndTime={setNewEndTime}
//     />
//   );
// };

// export default BookedBookingContainer;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getBookedMeetings,
  completeBooking,
  cancelBooking,
  updateBooking,
  fetchAvailableRooms,
  fetchAllRooms
} from "../../../shared/utils/api";
import BookedBookingComponent from "../component/BookedBookingComponent";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";

const BookedBookingContainer = () => {
  const [bookedMeetings, setBookedMeetings] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]); // Store available rooms

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
    
      const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
      if (!confirmCancel) return;
  
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
    setSelectedDate(dayjs(booking.startTime).format("YYYY-MM-DD"));
    setNewStartTime(dayjs(booking.startTime).format("HH:mm"));
    setNewEndTime(dayjs(booking.endTime).format("HH:mm"));
    setShowModal(true);
  };

  // const handleUpdateBooking = async () => {
  //   if (!selectedBooking) return;

  //   const startDateTime = `${selectedDate}T${newStartTime}`;
  //   const endDateTime = `${selectedDate}T${newEndTime}`;

  //   if (dayjs(endDateTime).isBefore(dayjs(startDateTime)) || dayjs(endDateTime).isSame(dayjs(startDateTime))) {
  //     toast.error("End time must be after start time!");
  //     return;
  //   }

  //   try {
  //     await updateBooking(selectedBooking.id, selectedBooking.roomId, startDateTime, endDateTime);
  //     toast.success("Booking updated successfully!");

  //     setBookedMeetings((prev) =>
  //       prev.map((booking) =>
  //         booking.id === selectedBooking.id
  //           ? { ...booking, startTime: startDateTime, endTime: endDateTime }
  //           : booking
  //       )
  //     );

  //     setShowModal(false);
  //   } catch (error) {
  //     toast.error("Failed to update booking.");
  //   }
  // };
  const handleUpdateBooking = async () => {
    if (!selectedBooking) return;

    const startDateTime = `${selectedDate}T${newStartTime}`;
    const endDateTime = `${selectedDate}T${newEndTime}`;

    if (dayjs(endDateTime).isBefore(dayjs(startDateTime)) || dayjs(endDateTime).isSame(dayjs(startDateTime))) {
        toast.error("End time must be after start time!");
        return;
    }

    try {
        // Find the first available room
        if (availableRooms.length === 0) {
            toast.error("No available rooms found.");
            return;
        }

        const newRoom = availableRooms[0]; // Taking the first available room
        const newRoomId = newRoom.id;
        const newRoomName = newRoom.name;

        console.log("Updating Booking with:", {
            bookingId: selectedBooking.id,
            newRoomId,
            newRoomName,
            startTime: startDateTime,
            endTime: endDateTime,
        });

        // Call API to update booking
        await updateBooking(selectedBooking.id, newRoomId, startDateTime, endDateTime);

        toast.success("Booking updated successfully!");

        // Update UI with new room ID & name
        setBookedMeetings((prev) =>
            prev.map((booking) =>
                booking.id === selectedBooking.id
                    ? {
                          ...booking,
                          startTime: startDateTime,
                          endTime: endDateTime,
                          roomId: newRoomId,
                          roomName: newRoomName, // Updating room name
                      }
                    : booking
            )
        );

        setShowModal(false);
    } catch (error) {
        console.error("Error updating booking:", error);
        toast.error("Failed to update booking.");
    }
};

  const handleCheckAvailability = async () => {
    if (!selectedDate || !newStartTime || !newEndTime) {
      toast.error("Please select a date, start time, and end time.");
      return;
    }

    if (newEndTime <= newStartTime) {
      toast.error("End time must be after start time.");
      return;
    }

    try {
      const startTimeFormatted = `${selectedDate}T${newStartTime}`;
      const endTimeFormatted = `${selectedDate}T${newEndTime}`;

      // Fetch available room IDs
      const availableRoomIds = await fetchAvailableRooms(startTimeFormatted, endTimeFormatted);

      // Fetch all rooms
      const allRooms = await fetchAllRooms();

      // Filter available rooms
      const filteredRooms = allRooms.filter((room) => availableRoomIds.includes(room.id));

      // Store available rooms
      setAvailableRooms(filteredRooms);
    } catch (error) {
      toast.error("Failed to fetch available rooms. Try again later.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <BookedBookingComponent
      bookedMeetings={bookedMeetings}
      searchDate={searchDate}
      setSearchDate={setSearchDate}
      searchRoom={searchRoom}
      setSearchRoom={setSearchRoom}
      handleComplete={handleComplete}
      handleCancel={handleCancel}
      openUpdateModal={openUpdateModal}
      handleUpdateBooking={handleUpdateBooking}
      handleSignOut={handleSignOut}
      handleCheckAvailability={handleCheckAvailability}
      showModal={showModal}
      setShowModal={setShowModal}
      selectedBooking={selectedBooking}
      setSelectedDate={setSelectedDate}
      newStartTime={newStartTime}
      setNewStartTime={setNewStartTime}
      newEndTime={newEndTime}
      setNewEndTime={setNewEndTime}
      availableRooms={availableRooms} // Pass available rooms
    />
  );
};

export default BookedBookingContainer;
