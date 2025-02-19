
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../../shared/ Navbar";
// import RoomCard from "../component/RoomCard";

// const AvailableRoomsComponent = ({ startTime, availableRooms }) => {
//   const navigate = useNavigate();
//   const [searchCapacity, setSearchCapacity] = useState("");

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleBooking = (roomId) => {
//     console.log("Booking room with ID:", roomId);
//     // Add booking logic here
//   };

//   const filteredRooms = availableRooms.filter((room) =>
//     room.capacity.toString().includes(searchCapacity)
//   );

//   return (
//     <div
//       className="min-h-screen bg-gray-100"
      
//     >
//       {/* Navbar */}
//       <Navbar onSignOut={handleSignOut} />

//       {/* Main Content */}
//       <div className="pt-20 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
//           <div className="flex gap-4">
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/dashboard")}
//             >
//               Go to Dashboard
//             </button>
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/booked-booking")}
//             >
//               Go to Booked Rooms
//             </button>
//           </div>
//         </div>

//         {/* Search and Filter Section */}
//         <div className="flex gap-4 mb-6">
//           <input
//             type="date"
//             className="p-2 border rounded-lg"
//             value={new Date(startTime).toISOString().split("T")[0]}
//             disabled
//           />
//           <input
//             type="text"
//             placeholder="Search by capacity"
//             className="p-2 border rounded-lg"
//             value={searchCapacity}
//             onChange={(e) => setSearchCapacity(e.target.value)}
//           />
//         </div>

//         {/* Available Rooms List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRooms.map((room) => (
//             <RoomCard key={room.id} room={room} onBookRoom={handleBooking} />
//           ))}
//         </div>

//         {/* No Rooms Message */}
//         {filteredRooms.length === 0 && (
//           <p className="text-center text-lg font-semibold text-gray-800 mt-6">
//             No available rooms for the selected criteria.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AvailableRoomsComponent;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../../shared/ Navbar";
// import RoomCard from "../component/RoomCard";


// const AvailableRoomsComponent = ({ startTime, availableRooms }) => {
//   const navigate = useNavigate();
//   const [searchCapacity, setSearchCapacity] = useState("");
//   const [bookedRooms, setBookedRooms] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [bookedRoomDetails, setBookedRoomDetails] = useState(null);

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleBooking = (roomId, roomName) => {
//     // Mark the room as booked by adding it to the bookedRooms state
//     setBookedRooms((prev) => [...prev, roomId]);

//     // Show the popup
//     setBookedRoomDetails({ roomId, roomName });
//     setShowPopup(true);

//     // Optionally, add booking logic here (e.g., call API)
//     console.log("Booking room with ID:", roomId);
//   };

//   const filteredRooms = availableRooms.filter(
//     (room) =>
//       room.capacity.toString().includes(searchCapacity) &&
//       !bookedRooms.includes(room.id) // Filter out booked rooms
//   );

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setBookedRoomDetails(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <Navbar onSignOut={handleSignOut} />
//       {/* Main Content */}
//       <div className="pt-20 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
//           <div className="flex gap-4">
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/dashboard")}
//             >
//               Go to Dashboard
//             </button>
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/booked-booking")}
//             >
//               Go to Booked Rooms
//             </button>
//           </div>
//         </div>

//         {/* Search and Filter Section */}
//         {/* Search and Filter Section */}
//         <div className="flex gap-4 mb-6">
//           <input
//             type="date"
//             className="p-2 border rounded-lg"
//             value={new Date(startTime).toISOString().split("T")[0]}
//             disabled
//           />
//          <input
//     type="time"
//     className="p-2 border rounded-lg"
//     value={new Date(startTime).toISOString().split("T")[1].slice(0, 5)} // Extract start time part (HH:MM)
//     disabled
//   />

//   {/* End Time Input */}
//   <input
//     type="time"
//     className="p-2 border rounded-lg"
//     value={new Date(new Date(startTime).getTime() + 60 * 60 * 1000).toISOString().split("T")[1].slice(0, 5)} // Assuming 1 hour duration
//     disabled
//   />
//           <input
//             type="text"
//             placeholder="Search by capacity"
//             className="p-2 border rounded-lg"
//             value={searchCapacity}
//             onChange={(e) => setSearchCapacity(e.target.value)}
//           />
//         </div>
//         {/* Available Rooms List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRooms.map((room) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               onBookRoom={() => handleBooking(room.id, room.name)}
//             />
//           ))}
//         </div>

//         {/* No Rooms Message */}
//         {filteredRooms.length === 0 && (
//           <p className="text-center text-lg font-semibold text-gray-800 mt-6">
//             No available rooms for the selected criteria.
//           </p>
//         )}
//       </div>

//       {/* Booking Confirmation Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Booking Confirmed!
//             </h2>
//             <p className="text-lg text-gray-700 mb-4">
//               Room "{bookedRoomDetails?.roomName}" has been successfully booked!
//             </p>
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//               onClick={handleClosePopup}
//             >
//               Close
//             </button>3
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableRoomsComponent;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../../shared/ Navbar";

// import RoomCard from "../component/RoomCard";
// import bgImage from "../../../assets/images/m11.jpg";
// const AvailableRoomsComponent = ({ startTime, availableRooms }) => {
//   const navigate = useNavigate();
//   const [searchCapacity, setSearchCapacity] = useState("");
//   const [bookedRooms, setBookedRooms] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [bookedRoomDetails, setBookedRoomDetails] = useState(null);

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleBooking = (roomId, roomName) => {
//     // Mark the room as booked by adding it to the bookedRooms state
//     setBookedRooms((prev) => [...prev, roomId]);

//     // Show the popup
//     setBookedRoomDetails({ roomId, roomName });
//     setShowPopup(true);

//     // Optionally, add booking logic here (e.g., call API)
//     console.log("Booking room with ID:", roomId);
//   };

//   const filteredRooms = availableRooms.filter(
//     (room) =>
//       room.capacity.toString().includes(searchCapacity) &&
//       !bookedRooms.includes(room.id) // Filter out booked rooms
//   );

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setBookedRoomDetails(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})` }} >
//       {/* Navbar */}
//       <Navbar onSignOut={handleSignOut} />
      

//       {/* Main Content */}
//       <div className="pt-20 p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
//           <div className="flex gap-4">
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/dashboard")}
//             >
//               Go to Dashboard
//             </button>
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/booked-booking")}
//             >
//               Go to Booked Rooms
//             </button>
//           </div>
//         </div>

//         {/* Search and Filter Section */}
//         {/* Search and Filter Section */}
//         <div className="flex gap-4 mb-6">
//           <input
//             type="date"
//             className="p-2 border rounded-lg"
//             value={new Date(startTime).toISOString().split("T")[0]}
//             disabled
//           />
//          <input
//     type="time"
//     className="p-2 border rounded-lg"
//     value={new Date(startTime).toISOString().split("T")[1].slice(0, 5)} // Extract start time part (HH:MM)
//     disabled
//   />

//   {/* End Time Input */}
//   <input
//     type="time"
//     className="p-2 border rounded-lg"
//     value={new Date(new Date(startTime).getTime() + 60 * 60 * 1000).toISOString().split("T")[1].slice(0, 5)} // Assuming 1 hour duration
//     disabled
//   />
//           <input
//             type="text"
//             placeholder="Search by capacity"
//             className="p-2 border rounded-lg"
//             value={searchCapacity}
//             onChange={(e) => setSearchCapacity(e.target.value)}
//           />
//         </div>
//         {/* Available Rooms List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRooms.map((room) => (
//             <RoomCard
//               key={room.id}
//               room={room}
//               onBookRoom={() => handleBooking(room.id, room.name)}
//             />
//           ))}
//         </div>

//         {/* No Rooms Message */}
//         {filteredRooms.length === 0 && (
//           <p className="text-center text-lg font-semibold text-gray-800 mt-6">
//             No available rooms for the selected criteria.
//           </p>
//         )}
//       </div>

//       {/* Booking Confirmation Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Booking Confirmed!
//             </h2>
//             <p className="text-lg text-gray-700 mb-4">
//               Room "{bookedRoomDetails?.roomName}" has been successfully booked!
//             </p>
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//               onClick={handleClosePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableRoomsComponent;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaCalendarCheck } from "react-icons/fa";
// import Navbar from "../../../shared/ Navbar";
// import RoomCard from "../component/RoomCard";
// import bgImage from "../../../assets/images/m11.jpg";

// const AvailableRoomsComponent = ({ startTime, availableRooms }) => {
//   const navigate = useNavigate();
//   const [searchCapacity, setSearchCapacity] = useState("");
//   const [bookedRooms, setBookedRooms] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [bookedRoomDetails, setBookedRoomDetails] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleBooking = (roomId, roomName) => {
//     setBookedRooms((prev) => [...prev, roomId]);
//     setBookedRoomDetails({ roomId, roomName });
//     setShowPopup(true);
//     console.log("Booking room with ID:", roomId);
//   };

//   const filteredRooms = availableRooms.filter(
//     (room) =>
//       room.capacity.toString().includes(searchCapacity) &&
//       !bookedRooms.includes(room.id)
//   );

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setBookedRoomDetails(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})` }}>
//       <Navbar />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition mb-10 w-full"
//           onClick={() => navigate("/dashboard")}
//         >
//           Dashboard
//         </button>
//         <button
//           className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition mb-4 w-full flex items-center gap-2"
//           onClick={() => navigate("/booked-booking")}
//         >
//           <FaCalendarCheck />
//           Available Rooms
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className={`pt-20 p-8 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
//           <button
//             className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
//             onClick={toggleSidebar}
//           >
//             {isSidebarOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Search and Filter Section */}
//         <div className="flex gap-4 mb-6">
//           <input
//             type="date"
//             className="p-2 border rounded-lg"
//             value={new Date(startTime).toISOString().split("T")[0]}
//             disabled
//           />
//           <input
//             type="time"
//             className="p-2 border rounded-lg"
//             value={new Date(startTime).toISOString().split("T")[1].slice(0, 5)}
//             disabled
//           />
//           <input
//             type="time"
//             className="p-2 border rounded-lg"
//             value={new Date(new Date(startTime).getTime() + 60 * 60 * 1000)
//               .toISOString()
//               .split("T")[1]
//               .slice(0, 5)}
//             disabled
//           />
//           <input
//             type="text"
//             placeholder="Search by capacity"
//             className="p-2 border rounded-lg"
//             value={searchCapacity}
//             onChange={(e) => setSearchCapacity(e.target.value)}
//           />
//         </div>

//         {/* Available Rooms List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRooms.map((room) => (
//             <RoomCard key={room.id} room={room} onBookRoom={() => handleBooking(room.id, room.name)} />
//           ))}
//         </div>

//         {/* No Rooms Message */}
//         {filteredRooms.length === 0 && (
//           <p className="text-center text-lg font-semibold text-gray-800 mt-6">
//             No available rooms for the selected criteria.
//           </p>
//         )}
//       </div>

//       {/* Booking Confirmation Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Confirmed!</h2>
//             <p className="text-lg text-gray-700 mb-4">
//               Room "{bookedRoomDetails?.roomName}" has been successfully booked!
//             </p>
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//               onClick={handleClosePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AvailableRoomsComponent;
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import bgImage from "../../../assets/images/m11.jpg";

const AvailableRoomsComponent = ({
  startTime,
  endTime,
  availableRooms,
  searchCapacity,
  onSearchCapacityChange,
  onBookRoom,
  onSignOut,
  navigate,
}) => {
  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-50">
        <h1 className="text-2xl font-bold">MeetEase</h1>
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
          onClick={onSignOut}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-20 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
          <div className="flex gap-4">
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate("/booked-booking")}
            >
              Go to Booked Rooms
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex gap-4 mb-6">
          
          <input
            type="text"
            placeholder="Search by capacity"
            className="p-2 border rounded-lg"
            value={searchCapacity}
            onChange={onSearchCapacityChange}
          />
        </div>

        {/* Available Rooms List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <h2 className="text-xl font-bold text-gray-900">{room.name}</h2>
              <p className="text-gray-600 text-lg mt-2">Room Capacity: {room.capacity}</p>
              <p className="text-blue-600 font-semibold text-sm mt-2">Status: Available</p>
              <div className="flex gap-3 mt-4">
                <button
                  className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition"
                  onClick={() => onBookRoom(room.id)}
                >
                  Book Room
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Rooms Message */}
        {availableRooms.length === 0 && (
          <p className="text-center text-lg font-semibold text-gray-800 mt-6">
            No available rooms for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default AvailableRoomsComponent;