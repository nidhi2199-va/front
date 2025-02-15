
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import dayjs from "dayjs";
// import bgImage from "/src/components/image/m5.jpg";
// const BookedBooking = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const [searchRoom, setSearchRoom] = useState("");
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [newStartTime, setNewStartTime] = useState("");
//   const [newEndTime, setNewEndTime] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/bookings/history/user", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((response) => {
//         setBookedMeetings(response.data);
//       })
//       .catch((error) => console.error("Error fetching booked meetings", error));
//   }, []);

//   const formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

//   const formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   const handleCancel = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `http://localhost:8080/bookings/cancel`,
//         { bookingId: id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Booking has been cancelled!");
//       setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       alert("Failed to cancel booking.");
//     }
//   };

//   const openUpdateModal = (booking) => {
//     setSelectedBooking(booking);
//     setNewStartTime(dayjs(booking.startTime).format("YYYY-MM-DDTHH:mm")); // Format datetime-local
//     setNewEndTime(dayjs(booking.endTime).format("YYYY-MM-DDTHH:mm"));
//     setShowModal(true);
//   };

//   const handleUpdateBooking = async () => {
//     if (!selectedBooking) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `http://localhost:8080/bookings/${selectedBooking.id}`,
//         {
//           roomId: selectedBooking.roomId,
//           startTime: newStartTime,
//           endTime: newEndTime,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
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

//   const filteredMeetings = bookedMeetings.filter((booking) =>
//     booking.status === "BOOKED" &&
//     (searchDate ? formatDate(booking.date) === formatDate(searchDate) : true) &&
//     (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8" style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
//         <button
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={() => navigate("/userdashboard")}
//         >
//           Go to Dashboard
//         </button>
//       </div>

//       <div className="flex gap-4 mb-6">
//         <input
//           type="date"
//           className="p-2 border rounded-lg"
//           value={searchDate}
//           onChange={(e) => setSearchDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search Room Name"
//           className="p-2 border rounded-lg"
//           value={searchRoom}
//           onChange={(e) => setSearchRoom(e.target.value)}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredMeetings.map((booking) => (
//           <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
//             <p className="text-gray-600 text-lg mt-2">{formatDate(booking.date)}</p>
//             <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>
//             <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>
//             <div className="flex gap-3 mt-4">
//               <button className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition" onClick={() => handleComplete(booking.id)}>Complete</button>
//               <button className="bg-yellow-500 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition" onClick={() => openUpdateModal(booking)}>Update</button>
//               <button className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition" onClick={() => handleCancel(booking.id)}>Cancel</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Update Booking</h2>
//             <label className="block mb-2">Start Time:</label>
//             <input type="datetime-local" className="w-full p-2 border rounded-lg mb-4" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)} />
//             <label className="block mb-2">End Time:</label>
//             <input type="datetime-local" className="w-full p-2 border rounded-lg mb-4" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} />
//             <div className="flex justify-end gap-3">
//               <button className="bg-gray-400 px-4 py-2 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowModal(false)}>Cancel</button>
//               <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700" onClick={handleUpdateBooking}>Update</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookedBooking;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { FaSignOutAlt } from "react-icons/fa"; // Import the sign-out icon
import bgImage from "/src/components/image/m5.jpg";

const BookedBooking = () => {
  const [bookedMeetings, setBookedMeetings] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchRoom, setSearchRoom] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/bookings/history/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setBookedMeetings(response.data);
      })
      .catch((error) => console.error("Error fetching booked meetings", error));
  }, []);

  const formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

  const formatTime = (startTime, endTime) => {
    return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
  };

  const handleComplete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Booking marked as completed!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error completing booking:", error);
      alert("Failed to complete booking.");
    }
  };

  const handleCancel = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/bookings/cancel`,
        { bookingId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Booking has been cancelled!");
      setBookedMeetings((prev) => prev.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking.");
    }
  };

  const openUpdateModal = (booking) => {
    setSelectedBooking(booking);
    setNewStartTime(dayjs(booking.startTime).format("YYYY-MM-DDTHH:mm")); // Format datetime-local
    setNewEndTime(dayjs(booking.endTime).format("YYYY-MM-DDTHH:mm"));
    setShowModal(true);
  };

  const handleUpdateBooking = async () => {
    if (!selectedBooking) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/bookings/${selectedBooking.id}`,
        {
          roomId: selectedBooking.roomId,
          startTime: newStartTime,
          endTime: newEndTime,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

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
      console.error("Error updating booking:", error);
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
    <div className="min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Navbar */}
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-50">
        <h1 className="text-2xl font-bold">MeetEase</h1>
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
          onClick={handleSignOut}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="p-8 pt-20"> {/* Add padding-top to account for the fixed navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/userdashboard")}
          >
            Go to Dashboard
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <input
            type="date"
            className="p-2 border rounded-lg"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search Room Name"
            className="p-2 border rounded-lg"
            value={searchRoom}
            onChange={(e) => setSearchRoom(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeetings.map((booking) => (
            <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
              <p className="text-gray-600 text-lg mt-2">{formatDate(booking.date)}</p>
              <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>
              <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>
              <div className="flex gap-3 mt-4">
                <button className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition" onClick={() => handleComplete(booking.id)}>Complete</button>
                <button className="bg-yellow-500 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition" onClick={() => openUpdateModal(booking)}>Update</button>
                <button className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition" onClick={() => handleCancel(booking.id)}>Cancel</button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Update Booking</h2>
              <label className="block mb-2">Start Time:</label>
              <input type="datetime-local" className="w-full p-2 border rounded-lg mb-4" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)} />
              <label className="block mb-2">End Time:</label>
              <input type="datetime-local" className="w-full p-2 border rounded-lg mb-4" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} />
              <div className="flex justify-end gap-3">
                <button className="bg-gray-400 px-4 py-2 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700" onClick={handleUpdateBooking}>Update</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedBooking;