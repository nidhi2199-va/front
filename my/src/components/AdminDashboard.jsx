
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

//   // Handle navigating to all rooms page
//   const handleViewAllRooms = () => {
//     navigate("/rooms");
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
//               <button
//                 onClick={handleViewAllRooms}
//                 className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
//               >
//                 View All Rooms
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "/src/components/image/m5.jpg";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [viewCreate, setViewCreate] = useState(false); // Toggle Create Room form
  const [viewRooms, setViewRooms] = useState(false); // Toggle View and Edit Rooms
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [createdRoom, setCreatedRoom] = useState(null); // To store the created room details
  const [meetingRooms, setMeetingRooms] = useState([]); // To store all meeting rooms
  const [selectedRoom, setSelectedRoom] = useState(null); // To store the room being updated
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // To toggle the update modal

  // Fetch all meeting rooms when the "View and Edit Rooms" button is clicked
  useEffect(() => {
    if (viewRooms) {
      fetchMeetingRooms();
    }
  }, [viewRooms]);

  // Fetch all meeting rooms
  const fetchMeetingRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/meeting-rooms/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMeetingRooms(response.data); // Set the fetched rooms
    } catch (error) {
      setErrorMessage("Failed to fetch meeting rooms. Please try again.");
    }
  };

  // Handle Create Room Button Click
  const handleCreateRoom = () => {
    setViewCreate(true); // Display the form to create a room
    setViewRooms(false); // Hide the View and Edit Rooms section
  };

  // Handle View and Edit Rooms Button Click
  const handleViewEditRooms = () => {
    setViewRooms(true); // Display the View and Edit Rooms section
    setViewCreate(false); // Hide the Create Room form
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        fetchMeetingRooms(); // Refresh the list of rooms
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

  // Handle Update Button Click
  const handleUpdate = (room) => {
    setSelectedRoom(room); // Set the room to be updated
    setIsUpdateModalOpen(true); // Open the update modal
  };

  // Handle Update Room Submit
  const handleUpdateRoomSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedRoomData = {
        name: selectedRoom.name,
        capacity: parseInt(selectedRoom.capacity, 10),
      };

      // Make the PUT request to update the room
      const response = await axios.put(
        `http://localhost:8080/meeting-rooms/${selectedRoom.id}`,
        updatedRoomData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Room updated successfully!");
        setErrorMessage(null);
        setIsUpdateModalOpen(false); // Close the modal
        fetchMeetingRooms(); // Refresh the list of rooms
      }
    } catch (error) {
      setErrorMessage("Room name is alreay exists");
      setSuccessMessage(null);
    }
  };

  // Handle Delete Button Click
  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://localhost:8080/meeting-rooms`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          roomId: roomId, // Pass roomId in the request body
        },
      });
      // Remove the deleted room from the list
      alert("Room deleted successfully");
      setMeetingRooms(meetingRooms.filter((room) => room.id !== roomId));
    } catch (error) {
      setErrorMessage("Failed to delete the room. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})`} }>
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
        <button
          onClick={handleViewEditRooms}
          className={`py-2 px-4 rounded transition ${
            viewRooms ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
          }`}
        >
          View and Edit Rooms
        </button>
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

        {/* Welcome Message */}
        {!viewCreate && !viewRooms && (
          <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome, Admin!
            </h1>
            <p className="text-xl text-gray-600">
              Manage your meeting rooms efficiently.
            </p>
          </div>
        )}

        {/* Create Room Form */}
        {viewCreate && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Create a Room
            </h1>
            <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
              <label className="font-semibold text-gray-700">Room Name:</label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="font-semibold text-gray-700">Capacity:</label>
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Create Room
              </button>
            </form>
          </div>
        )}

        {/* Display the Created Room Details (Card) */}
        {createdRoom && (
          <div className="mt-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Room Details
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-gray-700">
                Room Name: {createdRoom.name}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                Capacity: {createdRoom.capacity}
              </div>
              <div className="text-green-500 text-center mt-4">
                Room created successfully!
              </div>
            </div>
          </div>
        )}

        {/* Display All Meeting Rooms in Card Layout */}
        {viewRooms && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              All Meeting Rooms
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetingRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{room.name}</h2>
                  <p className="text-gray-700 mb-4">Capacity: {room.capacity}</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleUpdate(room)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Update Room Modal */}
        {isUpdateModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-1/3">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Update Room
              </h2>
              <form onSubmit={handleUpdateRoomSubmit} className="flex flex-col space-y-4">
                <label className="font-semibold text-gray-700">Room Name:</label>
                <input
                  type="text"
                  value={selectedRoom.name}
                  onChange={(e) =>
                    setSelectedRoom({ ...selectedRoom, name: e.target.value })
                  }
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <label className="font-semibold text-gray-700">Capacity:</label>
                <input
                  type="number"
                  value={selectedRoom.capacity}
                  onChange={(e) =>
                    setSelectedRoom({ ...selectedRoom, capacity: e.target.value })
                  }
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* Show error or success messages */}
                {errorMessage && (
                  <div className="text-red-500 text-center mt-2">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="text-green-500 text-center mt-2">{successMessage}</div>
                )}

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsUpdateModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
