
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../utils/api"; // Import API functions
// import bgImage from "/src/components/image/m11.jpg";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [viewCreate, setViewCreate] = useState(false); // Toggle Create Room form
//   const [viewRooms, setViewRooms] = useState(false); // Toggle View and Edit Rooms
//   const [roomName, setRoomName] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [createdRoom, setCreatedRoom] = useState(null); // To store the created room details
//   const [meetingRooms, setMeetingRooms] = useState([]); // To store all meeting rooms
//   const [selectedRoom, setSelectedRoom] = useState(null); // To store the room being updated
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // To toggle the update modal

//   // Fetch all meeting rooms when the "View and Edit Rooms" button is clicked
//   useEffect(() => {
//     if (viewRooms) {
//       fetchMeetingRoomsData();
//     }
//   }, [viewRooms]);

//   // Fetch all meeting rooms
//   const fetchMeetingRoomsData = async () => {
//     try {
//       const rooms = await fetchMeetingRooms(); // Use the API call
//       setMeetingRooms(rooms); // Set the fetched rooms
//     } catch (error) {
//       setErrorMessage("Failed to fetch meeting rooms. Please try again.");
//     }
//   };

//   // Handle Create Room Button Click
//   const handleCreateRoom = () => {
//     setViewCreate(true); // Display the form to create a room
//     setViewRooms(false); // Hide the View and Edit Rooms section
//   };

//   // Handle View and Edit Rooms Button Click
//   const handleViewEditRooms = () => {
//     setViewRooms(true); // Display the View and Edit Rooms section
//     setViewCreate(false); // Hide the Create Room form
//   };

//   // Handle the Submit Action of the Create Room Form
//   const handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();
  
//     const roomData = {
//       name: roomName, // Ensure roomName is a string
//       capacity: parseInt(capacity, 10), // Ensure capacity is an integer
//     };
  
//     try {
//       const response = await createRoom(roomData);
//       setCreatedRoom(response); // Set the created room details
//       setSuccessMessage("Room created successfully!");
//       setRoomName(""); // Clear input fields
//       setCapacity(""); // Clear input fields
//       fetchMeetingRooms(); // Refresh the list of rooms
//     } catch (error) {
//       setErrorMessage("Failed to create room. Please try again.");
//     }
//   };

//   // Handle Update Button Click
//   const handleUpdate = (room) => {
//     setSelectedRoom(room); // Set the room to be updated
//     setIsUpdateModalOpen(true); // Open the update modal
//   };

//   // Handle Update Room Submit
//   const handleUpdateRoomSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const updatedRoomData = {
//         name: selectedRoom.name,
//         capacity: parseInt(selectedRoom.capacity, 10),
//       };

//       // Use the API to update the room
//       await updateRoom(selectedRoom.id, updatedRoomData);
//       alert("Room updated successfully!");
//       setErrorMessage(null);
//       setIsUpdateModalOpen(false); // Close the modal
//       fetchMeetingRoomsData(); // Refresh the list of rooms
//     } catch (error) {
//       setErrorMessage("Failed to update room. Please try again.");
//       setSuccessMessage(null);
//     }
//   };

//   // Handle Delete Button Click
//   const handleDelete = async (roomId) => {
//     try {
//       // Use the API to delete the room
//       await deleteRoom(roomId);
//       alert("Room deleted successfully");
//       setMeetingRooms(meetingRooms.filter((room) => room.id !== roomId));
//     } catch (error) {
//       setErrorMessage("Failed to delete the room. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
//       {/* Sidebar */}
//       <div className="w-full sm:w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
//         <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//         <button
//           onClick={handleCreateRoom}
//           className={`py-2 px-4 rounded transition ${
//             viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
//           }`}
//         >
//           Create a Room
//         </button>
//         <button
//           onClick={handleViewEditRooms}
//           className={`py-2 px-4 rounded transition ${
//             viewRooms ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
//           }`}
//         >
//           View and Edit Rooms
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

//         {/* Welcome Message */}
//         {!viewCreate && !viewRooms && (
//           <div className="flex flex-col items-center justify-center mt-20">
//             <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome, Admin!</h1>
//             <p className="text-xl text-gray-600">Manage your meeting rooms efficiently.</p>
//           </div>
//         )}

//         {/* Create Room Form */}
//         {viewCreate && (
//           <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a Room</h1>
//             <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
//               <label className="font-semibold text-gray-700">Room Name:</label>
//               <input
//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//                 className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />

//               <label className="font-semibold text-gray-700">Capacity:</label>
//               <input
//                 type="number"
//                 value={capacity}
//                 onChange={(e) => setCapacity(e.target.value)}
//                 className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//               >
//                 Create Room
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Display the Created Room Details (Card) */}
//         {createdRoom && (
//           <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//             <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Room Details</h2>
//             <div className="flex flex-col space-y-4">
//               <div className="text-lg font-semibold text-gray-700">Room Name: {createdRoom.name}</div>
//               <div className="text-lg font-semibold text-gray-700">Capacity: {createdRoom.capacity}</div>
//               <div className="text-green-500 text-center mt-4">Room created successfully!</div>
//             </div>
//           </div>
//         )}

//         {/* View and Edit Rooms */}
//         {viewRooms && (
//           <div className="mt-6">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Meeting Rooms</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {meetingRooms.map((room) => (
//                 <div key={room.id} className="bg-white p-6 rounded-lg shadow-lg">
//                   <h2 className="text-xl font-bold text-gray-800">{room.name}</h2>
//                   <p className="text-gray-600">Capacity: {room.capacity}</p>
//                   <div className="flex space-x-4 mt-4">
//                     <button
//                       onClick={() => handleUpdate(room)} // Opens the update modal
//                       className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(room.id)} // Deletes the room
//                       className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Update Room Modal (if open) */}
//         {isUpdateModalOpen && selectedRoom && (
//           <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-2xl font-bold mb-4">Update Room</h2>
//               <form onSubmit={handleUpdateRoomSubmit} className="flex flex-col space-y-4">
//                 <label className="font-semibold text-gray-700">Room Name:</label>
//                 <input
//                   type="text"
//                   value={selectedRoom.name}
//                   onChange={(e) => setSelectedRoom({ ...selectedRoom, name: e.target.value })}
//                   className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//                 <label className="font-semibold text-gray-700">Capacity:</label>
//                 <input
//                   type="number"
//                   value={selectedRoom.capacity}
//                   onChange={(e) => setSelectedRoom({ ...selectedRoom, capacity: e.target.value })}
//                   className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />

//                 {errorMessage && (
//                   <div className="text-red-500 text-center mt-2">{errorMessage}</div>
//                 )}

//                 <div className="flex justify-between mt-4">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setIsUpdateModalOpen(false)} // Close modal
//                     className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { Component } from "react";
// import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../utils/api";
// import AdminDashboardComponent from "../component/AdminDashboardComponent";

// class AdminDashboard extends Component {
//   state = {
//     viewCreate: false,
//     viewRooms: false,
//     roomName: "",
//     capacity: "",
//     errorMessage: null,
//     successMessage: null,
//     createdRoom: null,
//     meetingRooms: [],
//     selectedRoom: null,
//     isUpdateModalOpen: false,
//   };

//   // Fetch all meeting rooms
//   fetchMeetingRoomsData = async () => {
//     try {
//       const rooms = await fetchMeetingRooms();
//       this.setState({ meetingRooms: rooms });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
//     }
//   };

//   // Handle Create Room
//   handleCreateRoom = () => {
//     this.setState({ viewCreate: true, viewRooms: false });
//   };

//   // Handle View and Edit Rooms
//   handleViewEditRooms = () => {
//     this.setState({ viewRooms: true, viewCreate: false }, () => {
//       this.fetchMeetingRoomsData();
//     });
//   };

//   // Handle Create Room Submit
//   handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();

//     const { roomName, capacity } = this.state;
//     const roomData = { name: roomName, capacity: parseInt(capacity, 10) };

//     try {
//       const response = await createRoom(roomData);
//       this.setState({
//         createdRoom: response,
//         successMessage: "Room created successfully!",
//         roomName: "",
//         capacity: "",
//       });
//       this.fetchMeetingRoomsData();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to create room. Please try again." });
//     }
//   };

//   // Handle Update
//   handleUpdate = (room) => {
//     this.setState({ selectedRoom: room, isUpdateModalOpen: true });
//   };

//   // Handle Update Room Submit
//   handleUpdateRoomSubmit = async (e) => {
//     e.preventDefault();
//     const { selectedRoom } = this.state;

//     try {
//       const updatedRoomData = {
//         name: selectedRoom.name,
//         capacity: parseInt(selectedRoom.capacity, 10),
//       };

//       await updateRoom(selectedRoom.id, updatedRoomData);
//       this.setState({ successMessage: "Room updated successfully!", isUpdateModalOpen: false });
//       this.fetchMeetingRoomsData();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to update room. Please try again." });
//     }
//   };

//   // Handle Delete
//   handleDelete = async (roomId) => {
//     try {
//       await deleteRoom(roomId);
//       this.setState({
//         meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
//         successMessage: "Room deleted successfully!",
//       });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to delete the room. Please try again." });
//     }
//   };

//   render() {
//     return (
//       <AdminDashboardComponent
//         {...this.state}
//         handleCreateRoom={this.handleCreateRoom}
//         handleViewEditRooms={this.handleViewEditRooms}
//         handleCreateRoomSubmit={this.handleCreateRoomSubmit}
//         handleUpdate={this.handleUpdate}
//         handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
//         handleDelete={this.handleDelete}
//       />
//     );
//   }
// }

// export default AdminDashboard;
// import React, { Component } from "react";
// import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../utils/api";
// import AdminDashboardComponent from "../component/AdminDashboardComponent";

// class AdminDashboard extends Component {
//   state = {
//     viewCreate: false,
//     viewRooms: false,
//     roomName: "",
//     capacity: "",
//     time: "", // Added time field
//     errorMessage: null,
//     successMessage: null,
//     createdRoom: null,
//     meetingRooms: [],
//     selectedRoom: null,
//     isUpdateModalOpen: false,
//   };

//   // Fetch all meeting rooms
//   fetchMeetingRoomsData = async () => {
//     try {
//       const rooms = await fetchMeetingRooms();
//       this.setState({ meetingRooms: rooms });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
//     }
//   };

//   // Handle Create Room
//   handleCreateRoom = () => {
//     this.setState({ viewCreate: true, viewRooms: false });
//   };

//   // Handle View and Edit Rooms
//   handleViewEditRooms = () => {
//     this.setState({ viewRooms: true, viewCreate: false }, () => {
//       this.fetchMeetingRoomsData();
//     });
//   };

//   // Handle Create Room Submit
//   handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();

//     const { roomName, capacity, time } = this.state;
//     const roomData = {
//       name: roomName,
//       capacity: parseInt(capacity, 10),
//       time, // Include time in the room data
//     };

//     try {
//       const response = await createRoom(roomData);
//       this.setState({
//         createdRoom: response,
//         successMessage: "Room created successfully!",
//         roomName: "",
//         capacity: "",
//         time: "",
//       });
//       this.fetchMeetingRoomsData();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to create room. Please try again." });
//     }
//   };

//   // Handle Update
//   handleUpdate = (room) => {
//     this.setState({ selectedRoom: room, isUpdateModalOpen: true });
//   };

//   // Handle Update Room Submit
//   handleUpdateRoomSubmit = async (e) => {
//     e.preventDefault();
//     const { selectedRoom } = this.state;

//     try {
//       const updatedRoomData = {
//         name: selectedRoom.name,
//         capacity: parseInt(selectedRoom.capacity, 10),
//         time: selectedRoom.time, // Include time in update
//       };

//       await updateRoom(selectedRoom.id, updatedRoomData);
//       this.setState({ successMessage: "Room updated successfully!", isUpdateModalOpen: false });
//       this.fetchMeetingRoomsData();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to update room. Please try again." });
//     }
//   };

//   // Handle Delete
//   handleDelete = async (roomId) => {
//     try {
//       await deleteRoom(roomId);
//       this.setState({
//         meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
//         successMessage: "Room deleted successfully!",
//       });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to delete the room. Please try again." });
//     }
//   };

//   // Handle Input Changes
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <AdminDashboardComponent
//         {...this.state}
//         handleCreateRoom={this.handleCreateRoom}
//         handleViewEditRooms={this.handleViewEditRooms}
//         handleCreateRoomSubmit={this.handleCreateRoomSubmit}
//         handleUpdate={this.handleUpdate}
//         handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
//         handleDelete={this.handleDelete}
//         handleChange={this.handleChange} // Pass handleChange to update inputs dynamically
//       />
//     );
//   }
// }

// export default AdminDashboard;
// import React, { Component } from "react";
// import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../utils/api";
// import AdminDashboardComponent from "../component/AdminDashboardComponent";

// class AdminDashboard extends Component {
//   state = {
//     viewCreate: false,
//     viewRooms: false,
//     roomName: "",
//     capacity: "",
//     time: "", // Added time field
//     errorMessage: null,
//     successMessage: null,
//     createdRoom: null,
//     meetingRooms: [],
//     selectedRoom: null,
//     isUpdateModalOpen: false,
//   };

//   // Fetch all meeting rooms
//   fetchMeetingRoomsData = async () => {
//     try {
//       const rooms = await fetchMeetingRooms();
//       this.setState({ meetingRooms: rooms });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
//     }
//   };

//   // Handle Create Room
//   handleCreateRoom = () => {
//     this.setState({ viewCreate: true, viewRooms: false });
//   };

//   // Handle View and Edit Rooms
//   handleViewEditRooms = () => {
//     this.setState({ viewRooms: true, viewCreate: false }, () => {
//       this.fetchMeetingRoomsData();
//     });
//   };

//   // Handle Create Room Submit
// handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();
  
//     const { roomName, capacity } = this.state;
//     const roomData = {
//       name: roomName,
//       capacity: parseInt(capacity, 10),
//     };
  
//     try {
//       const response = await createRoom(roomData);
//       this.setState({
//         createdRoom: response,
//         successMessage: "Room created successfully!",
//         roomName: "",
//         capacity: "",
//       });
  
//       // After creating the room, update the rooms and switch view to "viewRooms"
//       this.fetchMeetingRoomsData();
//       this.setState({
//         viewCreate: false,  // Hide the "Create Room" view
//         viewRooms: true,    // Show the "View Rooms" view
//       });
  
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to create room. Please try again." });
//     }
//   };

//   // Handle Update (Open Update Modal)
//   handleUpdate = (room) => {
//     this.setState({ selectedRoom: room, isUpdateModalOpen: true });
//   };

//   // Handle Change in Update Modal
//   handleUpdateChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       selectedRoom: { ...prevState.selectedRoom, [name]: value },
//     }));
//   };

//   // Handle Update Room Submit
//   handleUpdateRoomSubmit = async (e) => {
//     e.preventDefault();
//     const { selectedRoom } = this.state;

//     try {
//       const updatedRoomData = {
//         name: selectedRoom.name,
//         capacity: parseInt(selectedRoom.capacity, 10),
//         time: selectedRoom.time, // Include time in update
//       };

//       await updateRoom(selectedRoom.id, updatedRoomData);
//       this.setState({ 
//         successMessage: "Room updated successfully!", 
//         isUpdateModalOpen: false, 
//         selectedRoom: null 
//       });
//       this.fetchMeetingRoomsData();
//       this.clearMessages();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to update room. Please try again." });
//       this.clearMessages();
//     }
//   };

//   // Handle Delete
//   handleDelete = async (roomId) => {
//     try {
//       await deleteRoom(roomId);
//       this.setState({
//         meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
//         successMessage: "Room deleted successfully!",
//       });
//       this.clearMessages();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to delete the room. Please try again." });
//       this.clearMessages();
//     }
//   };

//   // Handle Input Changes for Create Form
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // Clear messages after 3 seconds
//   clearMessages = () => {
//     setTimeout(() => {
//       this.setState({ successMessage: null, errorMessage: null });
//     }, 3000);
//   };

//   render() {
//     return (
//       <AdminDashboardComponent
//         {...this.state}
//         handleCreateRoom={this.handleCreateRoom}
//         handleViewEditRooms={this.handleViewEditRooms}
//         handleCreateRoomSubmit={this.handleCreateRoomSubmit}
//         handleUpdate={this.handleUpdate}
//         handleUpdateChange={this.handleUpdateChange} // Fix: Pass this function
//         handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
//         handleDelete={this.handleDelete}
//         handleChange={this.handleChange}
//       />
//     );
//   }
// }

// export default AdminDashboard;
import React, { Component } from "react";
import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../utils/api";
import AdminDashboardComponent from "../component/AdminDashboardComponent";

class AdminDashboard extends Component {
  state = {
    viewCreate: false,
    viewRooms: false,
    roomName: "",
    capacity: "",
    time: "", // Added time field
    errorMessage: null,
    successMessage: null,
    meetingRooms: [],
    selectedRoom: null,
    isUpdateModalOpen: false,
    recentRoom: null, // State to store the most recently created room
  };

  // Fetch all meeting rooms
  fetchMeetingRoomsData = async () => {
    try {
      const rooms = await fetchMeetingRooms();
      this.setState({ meetingRooms: rooms });
    } catch (error) {
      this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
    }
  };

  // Handle Create Room
  handleCreateRoom = () => {
    this.setState({ viewCreate: true, viewRooms: false });
  };

  // Handle View and Edit Rooms
  handleViewEditRooms = () => {
    this.setState({ viewRooms: true, viewCreate: false }, () => {
      this.fetchMeetingRoomsData();
    });
  };

  // Handle Create Room Submit
  handleCreateRoomSubmit = async (e) => {
    e.preventDefault();

    const { roomName, capacity } = this.state;
    const roomData = {
      name: roomName,
      capacity: parseInt(capacity, 10),
    };

    try {
      const response = await createRoom(roomData);
      const createdRoom = response; // Newly created room response

      this.setState({
        successMessage: "Room created successfully!",
        roomName: "",
        capacity: "",
        recentRoom: createdRoom, // Set the recently created room
      });

      // After creating the room, switch view to "viewRooms"
      this.setState({
        viewCreate: true,  // Hide the "Create Room" view
        viewRooms: false,    // Show the "View Rooms" view
      });

    } catch (error) {
      this.setState({ errorMessage: "Room name already exists." });
    }
  };

  // Handle Update (Open Update Modal)
  handleUpdate = (room) => {
    this.setState({ selectedRoom: room, isUpdateModalOpen: true });
  };

  // Handle Change in Update Modal
  handleUpdateChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      selectedRoom: { ...prevState.selectedRoom, [name]: value },
    }));
  };

  // Handle Update Room Submit
  handleUpdateRoomSubmit = async (e) => {
    e.preventDefault();
    const { selectedRoom } = this.state;

    try {
      const updatedRoomData = {
        name: selectedRoom.name,
        capacity: parseInt(selectedRoom.capacity, 10),
        time: selectedRoom.time, // Include time in update
      };

      await updateRoom(selectedRoom.id, updatedRoomData);
      this.setState({ 
        successMessage: "Room updated successfully!", 
        isUpdateModalOpen: false, 
        selectedRoom: null 
      });
      this.fetchMeetingRoomsData();
      this.clearMessages();
    } catch (error) {
      this.setState({ errorMessage: "Failed to update room. Please try again." });
      this.clearMessages();
    }
  };

  // Handle Delete
  handleDelete = async (roomId) => {
    try {
      await deleteRoom(roomId);
      this.setState({
        meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
        successMessage: "Room deleted successfully!",
      });
      this.clearMessages();
    } catch (error) {
      this.setState({ errorMessage: "Failed to delete the room. Please try again." });
      this.clearMessages();
    }
  };

  // Handle Input Changes for Create Form
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Clear messages after 3 seconds
  clearMessages = () => {
    setTimeout(() => {
      this.setState({ successMessage: null, errorMessage: null });
    }, 3000);
  };

  render() {
    return (
      <AdminDashboardComponent
        {...this.state}
        handleCreateRoom={this.handleCreateRoom}
        handleViewEditRooms={this.handleViewEditRooms}
        handleCreateRoomSubmit={this.handleCreateRoomSubmit}
        handleUpdate={this.handleUpdate}
        handleUpdateChange={this.handleUpdateChange} // Fix: Pass this function
        handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
      />
    );
  }
}

export default AdminDashboard;
