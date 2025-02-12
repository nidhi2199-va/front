// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
// import "tailwindcss/tailwind.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewBookings, setViewBookings] = useState(false);
//   const [adminName, setAdminName] = useState("");
//   const [rooms, setRooms] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false);

//   useEffect(() => {
//     const fetchAdminProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Session expired. Please log in again.");
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:8080/admin/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAdminName(response.data.name); // Assuming the API returns the admin's name
//       } catch (error) {
//         console.error("Error fetching admin profile:", error);
//         navigate("/login");
//       }
//     };
//     fetchAdminProfile();
//   }, [navigate]);

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const navigateToCreateRoom = () => {
//     navigate("/create-room");
//   };

//   const navigateToUpdateRoom = () => {
//     navigate("/update-room");
//   };

//   const navigateToDeleteRoom = () => {
//     navigate("/delete-room");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <div className="flex items-center space-x-2">
//           <span className="text-xl">{/* Admin Icon here */}</span>
//           <span className="font-semibold">{adminName}</span>
//         </div>
//         <button onClick={navigateToCreateRoom} className="py-2 px-4 rounded transition bg-blue-500 hover:bg-blue-600">Create a Room</button>
//         <button onClick={navigateToUpdateRoom} className="py-2 px-4 rounded transition bg-yellow-500 hover:bg-yellow-600">Update a Room</button>
//         <button onClick={navigateToDeleteRoom} className="py-2 px-4 rounded transition bg-red-500 hover:bg-red-600">Delete a Room</button>
//       </div>

//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={handleSignOut}>Sign Out</button>
//         </div>

//         {/* Admin Dashboard Content */}
//         <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//           <h1 className="text-3xl font-bold text-center">Manage Meeting Rooms</h1>
//           <div className="flex space-x-4 my-4">
//             <button onClick={() => setShowCompleted(!showCompleted)} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
//               {showCompleted ? "Hide Completed Bookings" : "View Completed Bookings"}
//             </button>
//           </div>
//           {showCompleted && (
//             <table className="w-full border-collapse border border-gray-300 mt-4">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border p-2">Room Name</th>
//                   <th className="border p-2">Date</th>
//                   <th className="border p-2">Start Time</th>
//                   <th className="border p-2">End Time</th>
//                   <th className="border p-2">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Mapping Completed Bookings */}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false);
//   const [viewUpdate, setViewUpdate] = useState(false);
//   const [viewDelete, setViewDelete] = useState(false);

//   const handleCreateRoom = () => {
//     setViewCreate(true);
//     setViewUpdate(false);
//     setViewDelete(false);
//   };

//   const handleUpdateRoom = () => {
//     setViewCreate(false);
//     setViewUpdate(true);
//     setViewDelete(false);
//   };

//   const handleDeleteRoom = () => {
//     setViewCreate(false);
//     setViewUpdate(false);
//     setViewDelete(true);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//         >
//           Create a Room
//         </button>
//         <button
//           onClick={handleUpdateRoom}
//           className={`py-2 px-4 rounded transition ${viewUpdate ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}
//         >
//           Update a Room
//         </button>
//         <button
//           onClick={handleDeleteRoom}
//           className={`py-2 px-4 rounded transition ${viewDelete ? "bg-red-500 hover:bg-red-600" : "bg-gray-700"}`}
//         >
//           Delete a Room
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Content based on selected option */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
//             {/* Room creation form */}
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Room Name:</label>
//               <input type="text" className="p-2 border rounded" />
//               <label className="font-semibold">Capacity:</label>
//               <input type="number" className="p-2 border rounded" />
//               <label className="font-semibold">Equipment:</label>
//               <input type="text" className="p-2 border rounded" />
//               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                 Create Room
//               </button>
//             </div>
//           </div>
//         )}

//         {viewUpdate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Update a Room</h1>
//             {/* Room update form */}
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Room to Update:</label>
//               <select className="p-2 border rounded">
//                 {/* Dynamically load rooms here */}
//                 <option value="room1">Room 1</option>
//                 <option value="room2">Room 2</option>
//               </select>
//               <label className="font-semibold">New Capacity:</label>
//               <input type="number" className="p-2 border rounded" />
//               <label className="font-semibold">New Equipment:</label>
//               <input type="text" className="p-2 border rounded" />
//               <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
//                 Update Room
//               </button>
//             </div>
//           </div>
//         )}

//         {viewDelete && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Delete a Room</h1>
//             {/* Room deletion form */}
//             <div className="flex flex-col space-y-4">
//               <label className="font-semibold">Select Room to Delete:</label>
//               <select className="p-2 border rounded">
//                 {/* Dynamically load rooms here */}
//                 <option value="room1">Room 1</option>
//                 <option value="room2">Room 2</option>
//               </select>
//               <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
//                 Delete Room
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false);
//   const [roomName, setRoomName] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleCreateRoom = () => {
//     setViewCreate(true);
//   };

//   const handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const roomData = {
//         name: roomName,
//         capacity: parseInt(capacity, 10),
//       };

//       const response = await axios.post("http://localhost:8080/meeting-rooms/room", roomData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you are using JWT for authentication
//         },
//       });

//       if (response.status === 201) {
//         alert("Room created successfully!");
//         // Optionally reset form fields
//         setRoomName("");
//         setCapacity("");
//       }
//     } catch (error) {
//       console.error("Error creating room:", error);
//       setErrorMessage("Failed to create room. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//         >
//           Create a Room
//         </button>
//         <button
//           // Other buttons (Update/Delete) can go here
//         >
//           Update a Room
//         </button>
//         <button>
//           Delete a Room
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Create Room Form */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
//             {/* Form for creating a room */}
//             <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
//               <label className="font-semibold">Room Name:</label>
//               <input
//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               <label className="font-semibold">Capacity:</label>
//               <input
//                 type="number"
//                 value={capacity}
//                 onChange={(e) => setCapacity(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               {errorMessage && (
//                 <div className="text-red-500 text-center mt-2">
//                   {errorMessage}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false);
//   const [roomName, setRoomName] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const handleCreateRoom = () => {
//     setViewCreate(true);
//   };

//   const handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const roomData = {
//         name: roomName,
//         capacity: parseInt(capacity, 10),
//       };
  
//       const response = await axios.post("http://localhost:8080/meeting-rooms/room", roomData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you are using JWT for authentication
//         },
//       });
  
//       if (response.status === 201) {
//         alert("Room created successfully!");
//         setErrorMessage(null); // Clear error message if success
//         // Optionally reset form fields
//         setRoomName("");
//         setCapacity("");
//       }
//     } catch (error) {
//       console.error("Error creating room:", error);
  
//       // Check if the error response contains the expected message
//       if (error.response && error.response.data === "Room name already exists.") {
//         alert("Room name already exists.");
//       } else {
//         alert("Failed to create room. Please try again.");
//       }
//       setSuccessMessage(null); // Clear success message if there's an error
//     }
//   };
  
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
//         >
//           Create a Room
//         </button>
//         <button
//           // Other buttons (Update/Delete) can go here
//         >
//           Update a Room
//         </button>
//         <button>
//           Delete a Room
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Create Room Form */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
//             {/* Form for creating a room */}
//             <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
//               <label className="font-semibold">Room Name:</label>
//               <input
//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               <label className="font-semibold">Capacity:</label>
//               <input
//                 type="number"
//                 value={capacity}
//                 onChange={(e) => setCapacity(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               {errorMessage && (
//                 <div className="text-red-500 text-center mt-2">
//                   {errorMessage}
//                 </div>
//               )}

//               {successMessage && (
//                 <div className="text-green-500 text-center mt-2">
//                   {successMessage}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false);
//   const [roomName, setRoomName] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [createdRoom, setCreatedRoom] = useState(null); // To store the created room details

//   // Handle Create Room Button Click
//   const handleCreateRoom = () => {
//     setViewCreate(true);
//   };

//   // Handle the Submit Action of the Create Room Form
//   const handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const roomData = {
//         name: roomName,
//         capacity: parseInt(capacity, 10),
//       };

//       const response = await axios.post(
//         "http://localhost:8080/meeting-rooms/room", // Room creation endpoint
//         roomData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass the token for authentication
//           },
//         }
//       );

//       if (response.status === 201) {
//         setCreatedRoom(response.data); // Store the created room details
//         setSuccessMessage("Room created successfully!");
//         setErrorMessage(null); // Clear previous error messages
//         // Optionally, reset form fields
//         setRoomName("");
//         setCapacity("");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setErrorMessage("Room name already exists.");
//       } else {
//         setErrorMessage("Failed to create room. Please try again.");
//       }
//       setSuccessMessage(null); // Clear success messages in case of error
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${
//             viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
//           }`}
//         >
//           Create a Room
//         </button>
//         <button>Update a Room</button>
//         <button>Delete a Room</button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Create Room Form */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
//             <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
//               <label className="font-semibold">Room Name:</label>
//               <input
//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               <label className="font-semibold">Capacity:</label>
//               <input
//                 type="number"
//                 value={capacity}
//                 onChange={(e) => setCapacity(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               {/* Show error or success messages */}
//               {errorMessage && (
//                 <div className="text-red-500 text-center mt-2">{errorMessage}</div>
//               )}
//               {successMessage && (
//                 <div className="text-green-500 text-center mt-2">{successMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Display the Created Room Details */}
//         {createdRoom && (
//           <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//             <h2 className="text-3xl font-bold mb-6 text-center">Room Details</h2>
//             <div className="flex flex-col space-y-4">
//               <div className="text-lg font-semibold">Room Name: {createdRoom.name}</div>
//               <div className="text-lg font-semibold">Capacity: {createdRoom.capacity}</div>
//               <div className="text-green-500 text-center mt-4">
//                 Room created successfully!
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false);
//   const [roomName, setRoomName] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [createdRoom, setCreatedRoom] = useState(null); // To store the created room details

//   // Handle Create Room Button Click
//   const handleCreateRoom = () => {
//     setViewCreate(true); // Display the form to create a room
//   };

//   // Handle the Submit Action of the Create Room Form
//   const handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const roomData = {
//         name: roomName,
//         capacity: parseInt(capacity, 10),
//       };

//       // Make the POST request to create a new room
//       const response = await axios.post(
//         "http://localhost:8080/meeting-rooms/room", // Room creation endpoint
//         roomData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass the token for authentication
//           },
//         }
//       );

//       // If room is created successfully, store the room details
//       if (response.status === 200) {
//         setCreatedRoom(response.data); // Store the created room details
//         setSuccessMessage("Room created successfully!"); // Set success message
//         setErrorMessage(null); // Clear previous error messages
//         setRoomName(""); // Clear input fields
//         setCapacity(""); // Clear input fields
//       }
//     } catch (error) {
//       // Check if the error is due to room name already existing
//       if (error.response && error.response.status === 400) {
//         setErrorMessage("Room name already exists.");
//       } else {
//         setErrorMessage("Failed to create room. Please try again.");
//       }
//       setSuccessMessage(null); // Clear success message in case of error
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${
//             viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
//           }`}
//         >
//           Create a Room
//         </button>
//         <button>Update a Room</button>
//         <button>Delete a Room</button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
//             onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </button>
//         </div>

//         {/* Create Room Form */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
//             <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
//               <label className="font-semibold">Room Name:</label>
//               <input
//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               <label className="font-semibold">Capacity:</label>
//               <input
//                 type="number"
//                 value={capacity}
//                 onChange={(e) => setCapacity(e.target.value)}
//                 className="p-2 border rounded"
//                 required
//               />

//               {/* Show error or success messages */}
//               {errorMessage && (
//                 <div className="text-red-500 text-center mt-2">{errorMessage}</div>
//               )}
//               {successMessage && (
//                 <div className="text-green-500 text-center mt-2">{successMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Display the Created Room Details (Card) */}
//         {createdRoom && (
//           <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//             <h2 className="text-3xl font-bold mb-6 text-center">Room Details</h2>
//             <div className="flex flex-col space-y-4">
//               <div className="text-lg font-semibold">Room Name: {createdRoom.name}</div>
//               <div className="text-lg font-semibold">Capacity: {createdRoom.capacity}</div>
//               <div className="text-green-500 text-center mt-4">
//                 Room created successfully!
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [viewCreate, setViewCreate] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [createdRoom, setCreatedRoom] = useState(null); // To store the created room details

  // Handle Create Room Button Click
  const handleCreateRoom = () => {
    setViewCreate(true); // Display the form to create a room
  };

  // Handle the Submit Action of the Create Room Form
  const handleCreateRoomSubmit = async (e) => {
    e.preventDefault();

    try {
      const roomData = {
        name: roomName,
        capacity: parseInt(capacity, 10),
      };

      // Make the POST request to create a new room
      const response = await axios.post(
        "http://localhost:8080/meeting-rooms/room", // Room creation endpoint
        roomData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass the token for authentication
          },
        }
      );

      // If room is created successfully, store the room details
      if (response.status === 200) {
        setCreatedRoom(response.data); // Store the created room details
        setSuccessMessage("Room created successfully!"); // Set success message
        setErrorMessage(null); // Clear previous error messages
        setRoomName(""); // Clear input fields
        setCapacity(""); // Clear input fields
      }
    } catch (error) {
      // Check if the error is due to room name already existing
      if (error.response && error.response.status === 400) {
        setErrorMessage("Room name already exists.");
      } else {
        setErrorMessage("Failed to create room. Please try again.");
      }
      setSuccessMessage(null); // Clear success message in case of error
    }
  };

  // Handle navigating to all rooms page
  const handleViewAllRooms = () => {
    navigate("/rooms");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleCreateRoom}
          className={`py-2 px-4 rounded transition ${
            viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
          }`}
        >
          Create a Room
        </button>
        <button>Update a Room</button>
        <button>Delete a Room</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-bold">MeetEase</h1>
          <button
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Create Room Form */}
        {viewCreate && (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Create a Room</h1>
            <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
              <label className="font-semibold">Room Name:</label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="p-2 border rounded"
                required
              />

              <label className="font-semibold">Capacity:</label>
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="p-2 border rounded"
                required
              />

              {/* Show error or success messages */}
              {errorMessage && (
                <div className="text-red-500 text-center mt-2">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500 text-center mt-2">{successMessage}</div>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Create Room
              </button>
            </form>
          </div>
        )}

        {/* Display the Created Room Details (Card) */}
        {createdRoom && (
          <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Room Details</h2>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold">Room Name: {createdRoom.name}</div>
              <div className="text-lg font-semibold">Capacity: {createdRoom.capacity}</div>
              <div className="text-green-500 text-center mt-4">
                Room created successfully!
              </div>
              <button
                onClick={handleViewAllRooms}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
              >
                View All Rooms
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
