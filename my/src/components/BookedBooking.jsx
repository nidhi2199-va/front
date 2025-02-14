// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookedBooking = () => {
//   const navigate = useNavigate();
//   const [bookedMeetings, setBookedMeetings] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/bookings/history", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((response) => setBookedMeetings(response.data))
//       .catch((error) => console.error("Error fetching booked meetings", error));
//   }, []);

//   const handleUpdate = (id) => {
//     console.log("Update booking", id);
//     // Navigate to update booking page or modal
//   };

//   const handleCancel = (id) => {
//     console.log("Cancel booking", id);
//     // Implement cancellation API call
//   };

//   const handleComplete = (id) => {
//     console.log("Complete booking", id);
//     // Implement completion API call
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Booked Meetings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookedMeetings
//         .filter((booking) => booking.status === "BOOKED").map((booking) => (
//           <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">{booking.roomName}</h2>
//             <p className="text-gray-700">Date: {booking.date}</p>
//             <p className="text-gray-700">Time: {booking.startTime} - {booking.endTime}</p>
//             <div className="flex justify-between mt-4">
//               <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={() => handleUpdate(booking.id)}>
//                 Update
//               </button>
//               <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => handleCancel(booking.id)}>
//                 Cancel
//               </button>
//               <button className="bg-green-500 px-4 py-2 text-white rounded" onClick={() => handleComplete(booking.id)}>
//                 Complete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookedBooking;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookedBooking = () => {
//   const navigate = useNavigate();
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [updateModal, setUpdateModal] = useState(false);
//   const [updateData, setUpdateData] = useState({ id: null, roomId: "", startTime: "", endTime: "" });

//   // Fetch booked meetings on component load
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/bookings/history", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((response) => setBookedMeetings(response.data))
//       .catch((error) => console.error("Error fetching booked meetings", error));
//   }, []);

//   // Open Update Modal with selected booking details
//   const openUpdateModal = (booking) => {
//     setUpdateData({
//       id: booking.id,
//       roomId: booking.roomId,
//       startTime: booking.startTime,
//       endTime: booking.endTime,
//     });
//     setUpdateModal(true);
//   };

//   // Handle Update API Call
//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${updateData.id}`, updateData, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       alert("Booking updated successfully!");
//       setUpdateModal(false);
//       window.location.reload(); // Refresh bookings after update
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking. Please try again.");
//     }
//   };

//   // Handle Complete Booking
//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");
//       setBookedMeetings(bookedMeetings.map((booking) => 
//         booking.id === id ? { ...booking, status: "COMPLETED" } : booking
//       ));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Booked Meetings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookedMeetings
//           .filter((booking) => booking.status === "BOOKED")
//           .map((booking) => (
//             <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold">Room: {booking.roomName}</h2>
//               <p className="text-gray-700">Date: {booking.date}</p>
//               <p className="text-gray-700">Time: {booking.startTime} - {booking.endTime}</p>
//               <div className="flex justify-between mt-4">
//                 <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={() => openUpdateModal(booking)}>
//                   Update
//                 </button>
//                 <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => handleCancel(booking.id)}>
//                   Cancel
//                 </button>
//                 <button className="bg-green-500 px-4 py-2 text-white rounded" onClick={() => handleComplete(booking.id)}>
//                   Complete
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* Update Booking Modal */}
//       {updateModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96">
//             <h2 className="text-xl font-bold mb-4">Update Booking</h2>
//             <label className="block mb-2">Room ID:</label>
//             <input
//               type="number"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.roomId}
//               onChange={(e) => setUpdateData({ ...updateData, roomId: e.target.value })}
//             />
//             <label className="block mb-2">Start Time:</label>
//             <input
//               type="datetime-local"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.startTime}
//               onChange={(e) => setUpdateData({ ...updateData, startTime: e.target.value })}
//             />
//             <label className="block mb-2">End Time:</label>
//             <input
//               type="datetime-local"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.endTime}
//               onChange={(e) => setUpdateData({ ...updateData, endTime: e.target.value })}
//             />
//             <div className="flex justify-between">
//               <button className="bg-blue-500 px-4 py-2 text-white rounded" onClick={handleUpdate}>
//                 Save Changes
//               </button>
//               <button className="bg-gray-500 px-4 py-2 text-white rounded" onClick={() => setUpdateModal(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookedBooking;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookedBooking = () => {
//   const navigate = useNavigate();
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [updateModal, setUpdateModal] = useState(false);
//   const [updateData, setUpdateData] = useState({ id: null, roomId: "", startTime: "", endTime: "" });

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/bookings/history/user", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((response) => {
//         console.log("Fetched Bookings:", response.data); // Debugging output
//         setBookedMeetings(response.data);
//       })
//       .catch((error) => console.error("Error fetching booked meetings", error));
//   }, []);
  
  
//   // Open Update Modal with selected booking details
//   const openUpdateModal = (booking) => {
//     setUpdateData({
//       id: booking.id,
//       roomId: booking.roomId,
//       startTime: booking.startTime,
//       endTime: booking.endTime,
//     });
//     setUpdateModal(true);
//   };

//   // Handle Update API Call
//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${updateData.id}`, updateData, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       alert("Booking updated successfully!");
//       setUpdateModal(false);
//       window.location.reload(); // Refresh bookings after update
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking. Please try again.");
//     }
//   };

//   // Handle Cancel Booking
//   // Handle Cancel Booking
// const handleCancel = async (id) => {
//   try {
//     const token = localStorage.getItem("token");
//     await axios.put(
//       "http://localhost:8080/bookings/cancel",
//       { bookingId: id }, // Sending bookingId in the request body
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     alert("Booking canceled successfully!");
//     setBookedMeetings(bookedMeetings.map((booking) => 
//       booking.id === id ? { ...booking, status: "CANCELLED" } : booking
//     ));
//   } catch (error) {
//     console.error("Error cancelling booking:", error);
//     alert(`Failed to cancel booking: ${error.response?.data?.message || "Unknown error"}`);
//   }
// };


//   // Handle Complete Booking
//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");
//       setBookedMeetings(bookedMeetings.map((booking) => 
//         booking.id === id ? { ...booking, status: "COMPLETED" } : booking
//       ));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Booked Meetings</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookedMeetings
//           .filter((booking) => booking.status === "BOOKED")
//           .map((booking) => (
//             <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-xl font-semibold">Room: {booking.roomName}</h2>
//               <p className="text-gray-700">Date: {booking.date}</p>
//               <p className="text-gray-700">Time: {booking.startTime} - {booking.endTime}</p>
//               <div className="flex justify-between mt-4">
//                 <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={() => openUpdateModal(booking)}>
//                   Update
//                 </button>
//                 <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => handleCancel(booking.id)}>
//                   Cancel
//                 </button>
//                 <button className="bg-green-500 px-4 py-2 text-white rounded" onClick={() => handleComplete(booking.id)}>
//                   Complete
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* Update Booking Modal */}
//       {updateModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md w-96">
//             <h2 className="text-xl font-bold mb-4">Update Booking</h2>
//             <label className="block mb-2">Room ID:</label>
//             <input
//               type="number"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.roomId}
//               onChange={(e) => setUpdateData({ ...updateData, roomId: e.target.value })}
//             />
//             <label className="block mb-2">Start Time:</label>
//             <input
//               type="datetime-local"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.startTime}
//               onChange={(e) => setUpdateData({ ...updateData, startTime: e.target.value })}
//             />
//             <label className="block mb-2">End Time:</label>
//             <input
//               type="datetime-local"
//               className="w-full p-2 border rounded mb-4"
//               value={updateData.endTime}
//               onChange={(e) => setUpdateData({ ...updateData, endTime: e.target.value })}
//             />
//             <div className="flex justify-between">
//               <button className="bg-blue-500 px-4 py-2 text-white rounded" onClick={handleUpdate}>
//                 Save Changes
//               </button>
//               <button className="bg-gray-500 px-4 py-2 text-white rounded" onClick={() => setUpdateModal(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookedBooking;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookedBooking = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const navigate = useNavigate(); // Hook for navigation

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

//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");
      
//       // Remove completed booking from the list
//       setBookedMeetings((prevMeetings) => prevMeetings.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Booked Meetings</h1>
        
//         {/* Dashboard Button */}
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           onClick={() => navigate("/userdashboard")} // Navigate to User Dashboard
//         >
//           Go to Dashboard
//         </button>
//       </div>

//       <div className="flex flex-wrap justify-center gap-6">
//         {bookedMeetings.filter((booking) => booking.status === "BOOKED").map((booking) => (
//           <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
//             <h2 className="text-xl font-semibold">Room: {booking.roomName}</h2>
//             <p className="text-gray-700">Date: {booking.date}</p>
//             <p className="text-gray-700">Time: {booking.startTime} - {booking.endTime}</p>
//             <p className={`text-sm font-semibold mt-2 ${booking.status === "BOOKED" ? "text-blue-600" : "text-red-500"}`}>
//               Status: {booking.status}
//             </p>
//             <div className="flex gap-2 mt-4">
//               <button
//                 className="bg-green-500 px-4 py-2 text-white rounded"
//                 onClick={() => handleComplete(booking.id)}
//               >
//                 Complete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookedBooking;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import dayjs from "dayjs"; // For formatting dates

// const BookedBooking = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
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

//   // Format Date (e.g., 3 Jan 2025)
//   const formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

//   // Format Time (e.g., 1:12 AM - 3:40 AM)
//   const formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   // Handle Completing a Booking
//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");

//       // Remove completed booking from UI
//       setBookedMeetings((prevMeetings) => prevMeetings.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Page Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
        
//         {/* Go to Dashboard Button */}
//         <button
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={() => navigate("/user-dashboard")}
//         >
//           Go to Dashboard
//         </button>
//       </div>

//       {/* Booked Rooms List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookedMeetings.filter((booking) => booking.status === "BOOKED").map((booking) => (
//           <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             {/* Room Name */}
//             <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>

//             {/* Date */}
//             <p className="text-gray-600 text-lg mt-2">{formatDate(booking.date)}</p>

//             {/* Time */}
//             <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>

//             {/* Status */}
//             <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>

//             {/* Buttons */}
//             <div className="flex gap-3 mt-4">
//               <button
//                 className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition"
//                 onClick={() => handleComplete(booking.id)}
//               >
//                 Complete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookedBooking;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import dayjs from "dayjs"; // For formatting dates

// const BookedBooking = () => {
//   const [bookedMeetings, setBookedMeetings] = useState([]);
//   const [searchDate, setSearchDate] = useState("");
//   const [searchRoom, setSearchRoom] = useState("");
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

//   // Format Date (e.g., 3 Jan 2025)
//   const formatDate = (dateString) => dayjs(dateString).format("D MMM YYYY");

//   // Format Time (e.g., 1:12 AM - 3:40 AM)
//   const formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   // Handle Completing a Booking
//   const handleComplete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:8080/bookings/${id}/complete`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking marked as completed!");
//       setBookedMeetings((prevMeetings) => prevMeetings.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error completing booking:", error);
//       alert("Failed to complete booking.");
//     }
//   };

//   // Handle Cancelling a Booking
//   const handleCancel = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `http://localhost:8080/bookings/cancel`,
//         { bookingId: id }, // Send booking ID in the request body
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       alert("Booking has been cancelled!");
//       setBookedMeetings((prevMeetings) => prevMeetings.filter((booking) => booking.id !== id));
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       alert("Failed to cancel booking.");
//     }
//   };
  

//   // Handle Updating a Booking
//   const handleUpdate = (booking) => {
//     navigate("/update-booking", { state: { booking } });
//   };

//   // Filter bookings based on search criteria
//   const filteredMeetings = bookedMeetings.filter((booking) => 
//     booking.status === "BOOKED" &&
//     (searchDate ? formatDate(booking.date) === formatDate(searchDate) : true) &&
//     (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Page Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
//         <button
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//           onClick={() => navigate("/userdashboard")}
//         >
//           Go to Dashboard
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="flex gap-4 mb-6">
//         <input
//           type="date"
//           className="p-2 border rounded-lg"
//           value={searchDate}
//           onChange={(e) => setSearchDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Search by Room Name"
//           className="p-2 border rounded-lg"
//           value={searchRoom}
//           onChange={(e) => setSearchRoom(e.target.value)}
//         />
//       </div>

//       {/* Booked Rooms List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredMeetings.map((booking) => (
//           <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
//             <p className="text-gray-600 text-lg mt-2">{formatDate(booking.date)}</p>
//             <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>
//             <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>
//             <div className="flex gap-3 mt-4">
//               <button
//                 className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition"
//                 onClick={() => handleComplete(booking.id)}
//               >
//                 Complete
//               </button>
//               <button
//                 className="bg-yellow-500 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition"
//                 onClick={() => handleUpdate(booking)}
//               >
//                 Update
//               </button>
//               <button
//                 className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition"
//                 onClick={() => handleCancel(booking.id)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookedBooking;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
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

  const filteredMeetings = bookedMeetings.filter((booking) =>
    booking.status === "BOOKED" &&
    (searchDate ? formatDate(booking.date) === formatDate(searchDate) : true) &&
    (searchRoom ? booking.roomName.toLowerCase().includes(searchRoom.toLowerCase()) : true)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8" style={{ backgroundImage: `url(${bgImage})` }}
    >
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
  );
};

export default BookedBooking;
