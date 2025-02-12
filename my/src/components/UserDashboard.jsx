

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import { useNavigate } from "react-router-dom";

// // const UserDashboard = () => {
// //   const [startDate, setStartDate] = useState(null);
// //   const [startTime, setStartTime] = useState(null);
// //   const [endTime, setEndTime] = useState(null);
// //   const [bookingHistory, setBookingHistory] = useState([]);
// //   const [showHistory, setShowHistory] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchBookingHistory();
// //   }, []);

// //   const fetchAvailableRooms = async () => {
// //     if (!startDate || !startTime || !endTime) {
// //       alert("Please select a date, start time, and end time.");
// //       return;
// //     }
    
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       alert("Unauthorized. Please log in again.");
// //       navigate("/login");
// //       return;
// //     }

// //     const formattedStartTime = `${startDate.toISOString().split('T')[0]}T${startTime}:00`;
// //     const formattedEndTime = `${startDate.toISOString().split('T')[0]}T${endTime}:00`;
    
// //     try {
// //       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
// //         params: { startTime: formattedStartTime, endTime: formattedEndTime },
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
      
// //       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });
      
// //       const allRooms = roomDetailsResponse.data;
// //       const availableRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

// //       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms } });
// //     } catch (error) {
// //       console.error("Error fetching available rooms", error.response?.data || error.message);
// //       if (error.response?.status === 401) {
// //         alert("Session expired. Please log in again.");
// //         localStorage.removeItem("token");
// //         navigate("/login");
// //       } else {
// //         alert("Failed to fetch available rooms. Try again later.");
// //       }
// //     }
// //   };

// //   const fetchBookingHistory = async () => {
// //     const token = localStorage.getItem("token");
// //     if (!token) return;
    
// //     try {
// //       const response = await axios.get("http://localhost:8080/bookings/history", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setBookingHistory(response.data);
// //     } catch (error) {
// //       console.error("Error fetching booking history", error);
// //     }
// //   };

// //   const cancelBooking = async (bookingId) => {
// //     const token = localStorage.getItem("token");
// //     if (!token) return;
    
// //     try {
// //       await axios.put(`http://localhost:8080/bookings/cancel/${bookingId}`, {}, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       alert("Booking cancelled successfully.");
// //       fetchBookingHistory();
// //     } catch (error) {
// //       console.error("Error cancelling booking", error);
// //       alert("Failed to cancel booking.");
// //     }
// //   };

// //   const updateBooking = (booking) => {
// //     navigate("/update-booking", { state: { booking } });
// //   };

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold mb-4">Select Date and Time</h1>
// //       <div className="flex gap-4 mb-4">
// //         <DatePicker 
// //           selected={startDate} 
// //           onChange={(date) => setStartDate(date)} 
// //           dateFormat="yyyy-MM-dd"
// //           placeholderText="Select Date"
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="time"
// //           value={startTime || ""}
// //           onChange={(e) => setStartTime(e.target.value)}
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="time"
// //           value={endTime || ""}
// //           onChange={(e) => setEndTime(e.target.value)}
// //           className="border p-2 rounded"
// //         />
// //         <button onClick={fetchAvailableRooms} className="bg-blue-500 text-white p-2 rounded">Search</button>
// //       </div>
      
// //       <button onClick={() => setShowHistory(!showHistory)} className="bg-gray-500 text-white p-2 rounded mb-4">
// //         {showHistory ? "Hide" : "Show"} Booking History
// //       </button>

// //       {showHistory && (
// //         <div>
// //           <h2 className="text-xl font-bold mb-2">Booking History</h2>
// //           <table className="min-w-full border-collapse border border-gray-300">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="border p-2">Room Name</th>
// //                 <th className="border p-2">Capacity</th>
// //                 <th className="border p-2">Time Slot</th>
// //                 <th className="border p-2">Status</th>
// //                 <th className="border p-2">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {bookingHistory.filter(booking => booking.status !== "CANCELLED").map((booking) => (
// //                 <tr key={booking.id} className="border">
// //                   <td className="border p-2">{booking.roomName}</td>
// //                   <td className="border p-2">{booking.capacity}</td>
// //                   <td className="border p-2">{booking.startTime} - {booking.endTime}</td>
// //                   <td className="border p-2">{booking.status}</td>
// //                   <td className="border p-2">
// //                     {booking.status === "BOOKED" && (
// //                       <>
// //                         <button onClick={() => updateBooking(booking)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Update</button>
// //                         <button onClick={() => cancelBooking(booking.id)} className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
// //                       </>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";

// const UserDashboard = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [bookingHistory, setBookingHistory] = useState([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookingHistory();
//   }, []);

//   const fetchAvailableRooms = async () => {
//     if (!startDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
    
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${startDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${startDate.toISOString().split('T')[0]}T${endTime}:00`;
    
//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });
      
//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
      
//       const allRooms = roomDetailsResponse.data;
//       const availableRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const fetchBookingHistory = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;
    
//     try {
//       const response = await axios.get("http://localhost:8080/bookings/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBookingHistory(response.data);
//     } catch (error) {
//       console.error("Error fetching booking history", error);
//     }
//   };

//   const cancelBooking = async (bookingId) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;
    
//     try {
//       await axios.put(`http://localhost:8080/bookings/cancel/${bookingId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking cancelled successfully.");
//       fetchBookingHistory();
//     } catch (error) {
//       console.error("Error cancelling booking", error);
//       alert("Failed to cancel booking.");
//     }
//   };

//   const updateBooking = (booking) => {
//     navigate("/update-booking", { state: { booking } });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Select Date and Time</h1>
//       <div className="flex gap-4 mb-4">
//         <DatePicker 
//           selected={startDate} 
//           onChange={(date) => setStartDate(date)} 
//           dateFormat="yyyy-MM-dd"
//           placeholderText="Select Date"
//           className="border p-2 rounded"
//         />
//         <input
//           type="time"
//           value={startTime || ""}
//           onChange={(e) => setStartTime(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <input
//           type="time"
//           value={endTime || ""}
//           onChange={(e) => setEndTime(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button onClick={fetchAvailableRooms} className="bg-blue-500 text-white p-2 rounded">Search</button>
//       </div>
      
//       <button onClick={() => setShowHistory(!showHistory)} className="bg-gray-500 text-white p-2 rounded mb-4">
//         {showHistory ? "Hide" : "Show"} Booking History
//       </button>

//       {showHistory && (
//         <div>
//           <h2 className="text-xl font-bold mb-2">Booking History</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Room Name</th>
//                 <th className="border p-2">Capacity</th>
//                 <th className="border p-2">Time Slot</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookingHistory.filter(booking => booking.status !== "CANCELLED").map((booking) => (
//                 <tr key={booking.id} className="border">
//                   <td className="border p-2">{booking.roomName}</td>
//                   <td className="border p-2">{booking.capacity}</td>
//                   <td className="border p-2">{booking.startTime} - {booking.endTime}</td>
//                   <td className="border p-2">{booking.status}</td>
//                   <td className="border p-2">
//                     {booking.status === "BOOKED" && (
//                       <>
//                         <button onClick={() => updateBooking(booking)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
//                           <FaEdit /> Update
//                         </button>
//                         <button onClick={() => cancelBooking(booking.id)} className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";

// const UserDashboard = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [bookingHistory, setBookingHistory] = useState([]);
//   const [showHistory, setShowHistory] = useState(false);
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookingHistory();
//   }, []);

//   const fetchAvailableRooms = async () => {
//     if (!startDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${startDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${startDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setAvailableRooms(filteredRooms); // Update state dynamically

//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const fetchBookingHistory = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const response = await axios.get("http://localhost:8080/bookings/history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBookingHistory(response.data);
//     } catch (error) {
//       console.error("Error fetching booking history", error);
//     }
//   };

//   const cancelBooking = async (bookingId) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       await axios.put(`http://localhost:8080/bookings/cancel/${bookingId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("Booking cancelled successfully.");
//       fetchBookingHistory();
//     } catch (error) {
//       console.error("Error cancelling booking", error);
//       alert("Failed to cancel booking.");
//     }
//   };

//   const updateBooking = (booking) => {
//     navigate("/update-booking", { state: { booking } });
//   };

//   const handleBooking = async (roomId) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${startDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${startDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       await axios.post("http://localhost:8080/bookings/create", 
//         { roomId, startTime: formattedStartTime, endTime: formattedEndTime },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Room booked successfully!");

//       // Remove booked room from available rooms list
//       setAvailableRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));

//     } catch (error) {
//       console.error("Error booking room", error);
//       alert("Failed to book the room. Try again.");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Select Date and Time</h1>
//       <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
//         <DatePicker 
//           selected={startDate} 
//           onChange={(date) => setStartDate(date)} 
//           dateFormat="yyyy-MM-dd"
//           placeholderText="Select Date"
//           className="border p-2 rounded"
//           minDate={new Date()}
//         />
//         <input
//           type="time"
//           value={startTime || ""}
//           onChange={(e) => setStartTime(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <input
//           type="time"
//           value={endTime || ""}
//           onChange={(e) => setEndTime(e.target.value)}
//           className="border p-2 rounded"
//         />
//         <button onClick={fetchAvailableRooms} className="bg-blue-500 text-white p-2 rounded">Search</button>
//       </div>

//       <h2 className="text-xl font-bold mb-2">Available Rooms</h2>
//       <ul>
//         {availableRooms.map(room => (
//           <li key={room.id} className="border p-2 rounded mb-2 flex justify-between items-center">
//             <span>{room.name} - Capacity: {room.capacity}</span>
//             <button onClick={() => handleBooking(room.id)} className="bg-green-500 text-white px-2 py-1 rounded">Book</button>
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => setShowHistory(!showHistory)} className="bg-gray-500 text-white p-2 rounded mb-4">
//         {showHistory ? "Hide" : "Show"} Booking History
//       </button>

//       {showHistory && (
//         <div>
//           <h2 className="text-xl font-bold mb-2">Booking History</h2>
//           <table className="min-w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Room Name</th>
//                 <th className="border p-2">Capacity</th>
//                 <th className="border p-2">Time Slot</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookingHistory.filter(booking => booking.status !== "CANCELLED").map((booking) => (
//                 <tr key={booking.id} className="border">
//                   <td className="border p-2">{booking.roomName}</td>
//                   <td className="border p-2">{booking.capacity}</td>
//                   <td className="border p-2">{booking.startTime} - {booking.endTime}</td>
//                   <td className="border p-2">{booking.status}</td>
//                   <td className="border p-2">
//                     {booking.status === "BOOKED" && (
//                       <div className="flex gap-2">
//                         <button onClick={() => updateBooking(booking)} className="bg-green-500 text-white px-2 py-1 rounded flex items-center">
//                           <FaEdit className="mr-1" /> Update
//                         </button>
//                         <button onClick={() => cancelBooking(booking.id)} className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms, startTime, endTime } = location.state || {};
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);
//   const [viewBookings, setViewBookings] = useState(false);

//   const handleBooking = async (roomId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         navigate("/login");
//         return;
//       }

//       await axios.post(
//         "http://localhost:8080/bookings/create",
//         {
//           roomId,
//           startTime,
//           endTime,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setBookingConfirmed(true);
//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room. Please try again.");
//     }
//   };

//   const handleUpdateBooking = async (bookingId, roomId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         navigate("/login");
//         return;
//       }

//       const newStartTime = prompt("Enter new start time (YYYY-MM-DDTHH:MM:SS)");
//       const newEndTime = prompt("Enter new end time (YYYY-MM-DDTHH:MM:SS)");

//       if (!newStartTime || !newEndTime) {
//         alert("Start time and end time are required.");
//         return;
//       }

//       await axios.put(
//         `http://localhost:8080/bookings/${bookingId}`,
//         {
//           roomId,
//           startTime: newStartTime,
//           endTime: newEndTime,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert("Booking updated successfully!");
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking. Please try again.");
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar Dashboard */}
//       <div className="w-1/4 bg-gray-200 p-6 flex flex-col space-y-4">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {!viewBookings ? (
//           // Calendar and available rooms
//           <div>
//             <h1 className="text-3xl font-bold my-6 text-center">Available Rooms</h1>
//             <p className="mb-6 text-center text-lg">
//               Showing rooms available from {startTime} to {endTime}
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {availableRooms?.map((room) => (
//                 <div key={room.id} className="border p-6 rounded-lg shadow-lg bg-white flex flex-col items-center">
//                   <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
//                   <p className="text-lg">Capacity: {room.capacity}</p>
//                   <button 
//                     className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                     onClick={() => handleBooking(room.id)}
//                   >
//                     Book Room
//                   </button>
//                   <button 
//                     className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
//                     onClick={() => handleUpdateBooking(5, room.id)}
//                   >
//                     Update Booking
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           // Booking history
//           <div>
//             <h1 className="text-3xl font-bold my-6 text-center">My Booking History</h1>
//             <p className="text-center">(Booking history list will be implemented here)</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms } = location.state || {};
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);

//   const fetchAvailableRooms = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         navigate("/login");
//         return;
//       }
      
//       const response = await axios.get("http://localhost:8080/rooms/available", {
//         params: { startTime, endTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRooms(response.data);
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//       alert("Failed to fetch available rooms.");
//     }
//   };

//   const handleBooking = async (roomId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         navigate("/login");
//         return;
//       }

//       await axios.post(
//         "http://localhost:8080/bookings/create",
//         { roomId, startTime, endTime },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room.");
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {!viewBookings ? (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//                 onClick={fetchAvailableRooms}
//               >
//                 Find Available Rooms
//               </button>
//             </div>

//             {/* Available Rooms */}
//             {rooms.length > 0 && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Available Rooms</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {rooms.map((room) => (
//                     <div key={room.id} className="border p-6 rounded-lg shadow-lg bg-white flex flex-col items-center">
//                       <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
//                       <p className="text-lg">Capacity: {room.capacity}</p>
//                       <button 
//                         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                         onClick={() => handleBooking(room.id)}
//                       >
//                         Book Room
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold my-6 text-center">My Booking History</h1>
//             <p className="text-center">(Booking history list will be implemented here)</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms } = location.state || {};
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleBooking = async (roomId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         navigate("/login");
//         return;
//       }

//       await axios.post(
//         "http://localhost:8080/bookings/create",
//         { roomId, startTime, endTime },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room.");
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {!viewBookings ? (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//                 onClick={fetchAvailableRooms}
//               >
//                 Find Available Rooms
//               </button>
//             </div>

//             {rooms.length > 0 && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Available Rooms</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {rooms.map((room) => (
//                     <div key={room.id} className="border p-6 rounded-lg shadow-lg bg-white flex flex-col items-center">
//                       <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
//                       <p className="text-lg">Capacity: {room.capacity}</p>
//                       <button 
//                         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                         onClick={() => handleBooking(room.id)}
//                       >
//                         Book Room
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold my-6 text-center">My Booking History</h1>
//             <p className="text-center">(Booking history list will be implemented here)</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms } = location.state || {};
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {!viewBookings ? (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//                 onClick={fetchAvailableRooms}
//               >
//                 Find Available Rooms
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold my-6 text-center">My Booking History</h1>
//             <p className="text-center">(Booking history list will be implemented here)</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms } = location.state || {};
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [completedBookings, setCompletedBookings] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);

//   useEffect(() => {
//     if (showCompleted) {
//       fetchCompletedBookings();
//     }
//   }, [showCompleted]);

//   const fetchCompletedBookings = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await axios.get("http://localhost:8080/bookings/completed", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCompletedBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching completed bookings", error.response?.data || error.message);
//       alert("Failed to fetch completed bookings.");
//     }
//   };

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       alert("Failed to fetch available rooms. Try again later.");
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {!viewBookings ? (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//                 onClick={fetchAvailableRooms}
//               >
//                 Find Available Rooms
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold my-6 text-center">My Booking History</h1>
//             <div className="flex space-x-4 mb-4">
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                 onClick={() => navigate("/booking-status")}
//               >
//                 Booked Status
//               </button>
//               <button 
//                 className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//                 onClick={() => setShowCompleted(true)}
//               >
//                 Completed Bookings
//               </button>
//             </div>

//             {showCompleted && (
//               <div>
//                 <h2 className="text-xl font-bold my-4">Completed Bookings</h2>
//                 <table className="w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Time Slot</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings.length > 0 ? (
//                       completedBookings.map((booking) => (
//                         <tr key={booking.id} className="border">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime} - {booking.endTime}</td>
//                           <td className="border p-2 text-green-600 font-bold">Completed</td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="3" className="text-center p-4">No completed bookings found.</td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { availableRooms } = location.state || {};
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//           onClick={() => setViewBookings(false)}
//         >
//           Book a Room
//         </button>
//         <button
//           className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}
//           onClick={() => setViewBookings(true)}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {/* Booking Section */}
//         {!viewBookings ? (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//                 onClick={fetchAvailableRooms}
//               >
//                 Find Available Rooms
//               </button>
//             </div>
//           </div>
//         ) : (
//           /* Booking History Section */
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>

//             {/* Status Selection Buttons */}
//             <div className="flex justify-center mt-4 space-x-4">
//               <button 
//                 className={`px-4 py-2 rounded transition ${!showCompleted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//                 onClick={() => setShowCompleted(false)}
//               >
//                 Booked Status
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded transition ${showCompleted ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}
//                 onClick={() => setShowCompleted(true)}
//               >
//                 Completed Status
//               </button>
//             </div>

//             {/* Completed Bookings Table */}
//             {showCompleted && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Completed Bookings</h2>
//                 <table className="w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border border-gray-300 px-4 py-2">Room Name</th>
//                       <th className="border border-gray-300 px-4 py-2">Time Slot</th>
//                       <th className="border border-gray-300 px-4 py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Sample Data */}
//                     <tr>
//                       <td className="border border-gray-300 px-4 py-2">Conference Room A</td>
//                       <td className="border border-gray-300 px-4 py-2">10:00 AM - 11:00 AM</td>
//                       <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">Completed</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [showCompleted, setShowCompleted] = useState(false);

//   // Sample completed bookings data (Replace with actual API data)
//   const completedBookings = [
//     { id: 1, roomName: "Conference Room A", date: "2025-02-12", startTime: "10:00 AM", endTime: "11:00 AM", status: "Completed" },
//     { id: 2, roomName: "Meeting Room B", date: "2025-02-10", startTime: "02:00 PM", endTime: "03:30 PM", status: "Completed" },
//   ];

//   const handleViewBookings = () => {
//     setViewBookings(true);
//     setShowCompleted(false); // Reset status when switching views
//   };

//   const handleBookRoom = () => {
//     setViewBookings(false);
//     setShowCompleted(false); // Reset status when switching views
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//           onClick={handleBookRoom}
//         >
//           Book a Room
//         </button>
//         <button
//           className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}
//           onClick={handleViewBookings}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>
//             Sign Out
//           </button>
//         </div>

//         {/* Booking History Section */}
//         {viewBookings ? (
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>

//             {/* Status Selection Buttons */}
//             <div className="flex justify-center mt-4 space-x-4">
//               <button 
//                 className={`px-4 py-2 rounded transition ${!showCompleted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//                 onClick={() => setShowCompleted(false)}
//               >
//                 Booked Status
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded transition ${showCompleted ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}
//                 onClick={() => setShowCompleted(true)}
//               >
//                 Completed Status
//               </button>
//             </div>

//             {/* Completed Bookings Table */}
//             {showCompleted && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Completed Bookings</h2>
//                 <table className="w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border border-gray-300 px-4 py-2">Room Name</th>
//                       <th className="border border-gray-300 px-4 py-2">Date</th>
//                       <th className="border border-gray-300 px-4 py-2">Time Slot</th>
//                       <th className="border border-gray-300 px-4 py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings.map((booking) => (
//                       <tr key={booking.id}>
//                         <td className="border border-gray-300 px-4 py-2">{booking.roomName}</td>
//                         <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {booking.startTime} - {booking.endTime}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">{booking.status}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ) : (
//           // Booking Form Section
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={setSelectedDate}
//                 dateFormat="yyyy-MM-dd"
//                 minDate={new Date()}
//                 className="p-2 border rounded w-full"
//               />
//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!selectedDate}
//               />
//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded w-full"
//                 disabled={!startTime}
//               />
//               <button 
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
//               >
//                 Find Available Rooms
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

//export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [showCompleted, setShowCompleted] = useState(false);
//   const [completedBookings, setCompletedBookings] = useState([]);

//   useEffect(() => {
//     if (showCompleted) {
//       fetchCompletedBookings();
//     }
//   }, [showCompleted]);

//   const fetchCompletedBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:8080/bookings/completed-history", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCompletedBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching completed bookings:", error);
//     }
//   };

//   const handleViewBookings = () => {
//     setViewBookings(true);
//     setShowCompleted(false);
//   };

//   const handleBookRoom = () => {
//     setViewBookings(false);
//     setShowCompleted(false);
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button onClick={handleBookRoom} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
//         <button onClick={handleViewBookings} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
//         </div>

//         {viewBookings ? (
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button onClick={() => setShowCompleted(false)} className={`px-4 py-2 rounded transition ${!showCompleted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Booked Status</button>
//               <button onClick={() => setShowCompleted(true)} className={`px-4 py-2 rounded transition ${showCompleted ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>Completed Status</button>
//             </div>
//             {showCompleted && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Completed Bookings</h2>
//                 <table className="w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border border-gray-300 px-4 py-2">Room Name</th>
//                       <th className="border border-gray-300 px-4 py-2">Date</th>
//                       <th className="border border-gray-300 px-4 py-2">Time Slot</th>
//                       <th className="border border-gray-300 px-4 py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings.map((booking) => (
//                       <tr key={booking.id}>
//                         <td className="border border-gray-300 px-4 py-2">{booking.roomName}</td>
//                         <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
//                         <td className="border border-gray-300 px-4 py-2">{booking.startTime} - {booking.endTime}</td>
//                         <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">{booking.status}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker selected={selectedDate} onChange={setSelectedDate} dateFormat="yyyy-MM-dd" minDate={new Date()} className="p-2 border rounded w-full" />
//               <label className="font-semibold">Start Time:</label>
//               <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="p-2 border rounded w-full" disabled={!selectedDate} />
//               <label className="font-semibold">End Time:</label>
//               <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="p-2 border rounded w-full" disabled={!startTime} />
//               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">Find Available Rooms</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);
//   const [completedBookings, setCompletedBookings] = useState([]);

//   useEffect(() => {
//     if (showCompleted) {
//       fetchCompletedBookings();
//     }
//   }, [showCompleted]);

//   const fetchCompletedBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:8080/bookings/completed-history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCompletedBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching completed bookings:", error);
//     }
//   };

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button onClick={() => setViewBookings(false)} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
//         <button onClick={() => setViewBookings(true)} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
//         </div>

//         {viewBookings ? (
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button onClick={() => setShowCompleted(false)} className={`px-4 py-2 rounded transition ${!showCompleted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Booked Status</button>
//               <button onClick={() => setShowCompleted(true)} className={`px-4 py-2 rounded transition ${showCompleted ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>Completed Status</button>
//             </div>
//             {showCompleted && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold mb-4 text-center">Completed Bookings</h2>
//                 <table className="w-full border-collapse border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border border-gray-300 px-4 py-2">Room Name</th>
//                       <th className="border border-gray-300 px-4 py-2">Date</th>
//                       <th className="border border-gray-300 px-4 py-2">Time Slot</th>
//                       <th className="border border-gray-300 px-4 py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings.map((booking) => (
//                       <tr key={booking.id}>
//                         <td className="border border-gray-300 px-4 py-2">{booking.roomName}</td>
//                         <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
//                         <td className="border border-gray-300 px-4 py-2">{booking.startTime} - {booking.endTime}</td>
//                         <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">{booking.status}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={fetchAvailableRooms}>Find Available Rooms</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);
//   const [completedBookings, setCompletedBookings] = useState([]);

//   useEffect(() => {
//     if (showCompleted) {
//       fetchCompletedBookings();
//     }
//   }, [showCompleted]);

//   const fetchCompletedBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:8080/bookings/completed-history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCompletedBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching completed bookings:", error);
//     }
//   };

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button onClick={() => setViewBookings(false)} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
//         <button onClick={() => setViewBookings(true)} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
//         </div>

//         {viewBookings ? (
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="yyyy-MM-dd"
//                 className="p-2 border rounded"
//               />

//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded"
//               />

//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded"
//               />

//               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={fetchAvailableRooms}>Find Available Rooms</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);
//   const [completedBookings, setCompletedBookings] = useState([]);

//   useEffect(() => {
//     if (showCompleted) {
//       fetchCompletedBookings();
//     }
//   }, [showCompleted]);

//   const fetchCompletedBookings = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:8080/bookings/completed-history", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCompletedBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching completed bookings:", error);
//     }
//   };

//   const fetchAvailableRooms = async () => {
//     if (!selectedDate || !startTime || !endTime) {
//       alert("Please select a date, start time, and end time.");
//       return;
//     }
//     if (endTime <= startTime) {
//       alert("End time must be after start time.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized. Please log in again.");
//       navigate("/login");
//       return;
//     }

//     const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
//     const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

//     try {
//       const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
//         params: { startTime: formattedStartTime, endTime: formattedEndTime },
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const allRooms = roomDetailsResponse.data;
//       const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

//       setRooms(filteredRooms);
//       navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
//     } catch (error) {
//       console.error("Error fetching available rooms", error.response?.data || error.message);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please log in again.");
//         localStorage.removeItem("token");
//         navigate("/login");
//       } else {
//         alert("Failed to fetch available rooms. Try again later.");
//       }
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button onClick={() => setViewBookings(false)} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
//         <button onClick={() => setViewBookings(true)} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
//         </div>

//         {viewBookings ? (
//           <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold text-center">My Booking History</h1>
//             <ul>
//               {completedBookings.map((booking) => (
//                 <li key={booking.id} className="flex justify-between p-4 border-b">
//                   <span>{booking.roomName} - {booking.startTime} to {booking.endTime}</span>
//                   <span className={`px-4 py-1 rounded text-white ${booking.status === 'COMPLETED' ? 'bg-green-500' : 'bg-blue-500'}`}>{booking.status}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Date:</label>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 dateFormat="yyyy-MM-dd"
//                 className="p-2 border rounded"
//               />

//               <label className="font-semibold">Start Time:</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded"
//               />

//               <label className="font-semibold">End Time:</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded"
//               />

//               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={fetchAvailableRooms}>Find Available Rooms</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [viewBookings, setViewBookings] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [rooms, setRooms] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const fetchCompletedBookings = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("Token not found. Please log in again.");
      alert("Session expired. Please log in again.");
      return;
    }
  
    try {
      const response = await axios.get("http://localhost:8080/bookings/history/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Completed bookings:", response.data);
      setCompletedBookings(response.data);
    } catch (error) {
      console.error("Error fetching completed bookings:", error);
    }
  };
  
  const navigateToBookedBookings = () => {
    navigate("/booked-booking");
  };
  const fetchAvailableRooms = async () => {
    if (!selectedDate || !startTime || !endTime) {
      alert("Please select a date, start time, and end time.");
      return;
    }
    if (endTime <= startTime) {
      alert("End time must be after start time.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized. Please log in again.");
      navigate("/login");
      return;
    }

    const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
    const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

    try {
      const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
        params: { startTime: formattedStartTime, endTime: formattedEndTime },
        headers: { Authorization: `Bearer ${token}` },
      });

      const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const allRooms = roomDetailsResponse.data;
      const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

      setRooms(filteredRooms);
      navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
    } catch (error) {
      console.error("Error fetching available rooms", error.response?.data || error.message);
      if (error.response?.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        alert("Failed to fetch available rooms. Try again later.");
      }
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  
    return (
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={() => setViewBookings(false)} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
          <button onClick={() => {
            setViewBookings(true);
            fetchCompletedBookings();
          }} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
        </div>
  
        <div className="flex-1 p-6">
          <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold">MeetEase</h1>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}>Sign Out</button>
          </div>
  
          {viewBookings ? (
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
              <h1 className="text-3xl font-bold text-center">My Booking History</h1>
              <div className="flex space-x-4 my-4">
                <button onClick={() => setShowCompleted(!showCompleted)} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                  {showCompleted ? "Hide Completed Bookings" : "View Completed Bookings"}
                </button>
                <button onClick={() => navigate("/booked-booking")} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
  View Booked Bookings
</button>
              </div>
              {showCompleted && (
                <table className="w-full border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-2">Room Name</th>
                      <th className="border p-2">Date</th>
                      <th className="border p-2">Start Time</th>
                      <th className="border p-2">End Time</th>
                      <th className="border p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
  {completedBookings
    .filter((booking) => booking.status === "COMPLETED") // Only show completed bookings
    .map((booking) => (
      <tr key={booking.id} className="text-center">
        <td className="border p-2">{booking.roomName}</td>
        <td className="border p-2">{booking.startTime.split('T')[0]}</td>
        <td className="border p-2">{booking.startTime.split('T')[1]}</td>
        <td className="border p-2">{booking.endTime.split('T')[1]}</td>
        <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
      </tr>
    ))}
</tbody>
                </table>
              )}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
              <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
              <div className="flex flex-col space-y-4">
                <label className="font-semibold">Select Date:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  className="p-2 border rounded"
                />
                <label className="font-semibold">Start Time:</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="p-2 border rounded"
                />
                 <label className="font-semibold">End Time:</label>
                 <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="p-2 border rounded"
              />

              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={fetchAvailableRooms}>Find Available Rooms</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
  
  export default UserDashboard;
  