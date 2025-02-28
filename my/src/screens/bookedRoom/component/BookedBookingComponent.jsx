
// // import {React} from "react";
// // import { FaSignOutAlt } from "react-icons/fa";
// // import dayjs from "dayjs";
// // import bgImage from "../../../assets/images/m11.jpg";

// // const BookedBookingComponent = ({
// //   bookedMeetings,
// //   searchDate,
// //   setSearchDate,
// //   searchRoom,
// //   setSearchRoom,
// //   handleComplete,
// //   handleCancel,
// //   openUpdateModal,
// //   handleUpdateBooking,
// //   handleSignOut,
// //   handleCheckAvailability,
// //   showModal,
// //   setShowModal,
// //   selectedBooking,
// //   selectedDate,
// //   setSelectedDate,
// //   newStartTime,
// //   setNewStartTime,
// //   newEndTime,
// //   setNewEndTime,
// // }) => {

// //   const formatTime = (startTime, endTime) => {
// //     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
// //       {/* Navbar */}
// //       <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-50">
// //         <h1 className="text-2xl font-bold">MeetEase</h1>
// //         <button
// //           className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
// //           onClick={handleSignOut}
// //         >
// //           <FaSignOutAlt />
// //           <span>Sign Out</span>
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div className="p-8 pt-20">
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
// //           <button
// //             className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
// //             onClick={() => window.location.href = "/dashboard"}
// //           >
// //             Go to Dashboard
// //           </button>
// //         </div>

// //         <div className="flex gap-4 mb-6">
// //           <input
// //             type="date"
// //             className="p-2 border rounded-lg"
// //             value={searchDate}
// //             onChange={(e) => setSearchDate(e.target.value)}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Search Room Name"
// //             className="p-2 border rounded-lg"
// //             value={searchRoom}
// //             onChange={(e) => setSearchRoom(e.target.value)}
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {bookedMeetings
// //   .filter((booking) => {
// //     const endTime = new Date(booking.endTime);
// //     const now = new Date();

// //     return booking.status === "BOOKED" && endTime > now;
// //   })
// //           .map((booking) => (
// //             <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
// //               <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
// //               <p className="text-gray-600 text-lg mt-2">{booking.startTime.split("T")[0]}</p>
// //               <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>
// //               <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>
// //               <div className="flex gap-3 mt-4">
// //                 <button className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition" onClick={() => handleComplete(booking.id)}>Complete</button>
// //                 <button className="bg-yellow-500 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition" onClick={() => openUpdateModal(booking)}>Update</button>
// //                 <button className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition" onClick={() => handleCancel(booking.id)}>Cancel</button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {showModal && (
// //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// //             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //               <h2 className="text-xl font-bold mb-4">Update Booking</h2>
// //               <label className="block mb-2">Booking Date:</label>
// //               <input type="date" className="w-full p-2 border rounded-lg mb-4" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

// //               <label className="block mb-2">Start Time:</label>
// //               <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)} />

// //               <label className="block mb-2">End Time:</label>
// //               <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} />

// //               <div className="flex justify-end gap-3">
// //                 <button className="bg-gray-400 px-4 py-2 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowModal(false)}>Cancel</button>
// //                 {/* <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700" onClick={handleUpdateBooking}>Update</button> */}
// //                 <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 w-full" onClick={handleCheckAvailability}>Check Availability</button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };


// // export default BookedBookingComponent; 

// import {React} from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import dayjs from "dayjs";
// import bgImage from "../../../assets/images/m11.jpg";

// const BookedBookingComponent = ({
//   bookedMeetings,
//   searchDate,
//   setSearchDate,
//   searchRoom,
//   setSearchRoom,
//   handleComplete,
//   handleCancel,
//   openUpdateModal,
//   handleUpdateBooking,
//   handleSignOut,
//   handleCheckAvailability,
//   showModal,
//   setShowModal,
//   selectedBooking,
//   selectedDate,
//   setSelectedDate,
//   newStartTime,
//   setNewStartTime,
//   newEndTime,
//   setNewEndTime,
// }) => {

//   const formatTime = (startTime, endTime) => {
//     return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
//       {/* Navbar */}
//       <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-50">
//         <h1 className="text-2xl font-bold">MeetEase</h1>
//         <button
//           className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
//           onClick={handleSignOut}
//         >
//           <FaSignOutAlt />
//           <span>Sign Out</span>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="p-8 pt-20">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
//           <button
//             className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//             onClick={() => window.location.href = "/dashboard"}
//           >
//             Go to Dashboard
//           </button>
//         </div>

//         <div className="flex gap-4 mb-6">
//           <input
//             type="date"
//             className="p-2 border rounded-lg"
//             value={searchDate}
//             onChange={(e) => setSearchDate(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Search Room Name"
//             className="p-2 border rounded-lg"
//             value={searchRoom}
//             onChange={(e) => setSearchRoom(e.target.value)}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookedMeetings
//   .filter((booking) => {
//     const endTime = new Date(booking.endTime);
//     const now = new Date();

//     return booking.status === "BOOKED" && endTime > now;
//   })
//           .map((booking) => (
//             <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//               <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
//               <p className="text-gray-600 text-lg mt-2">{booking.startTime.split("T")[0]}</p>
//               <p className="text-gray-700 text-lg font-medium">{formatTime(booking.startTime, booking.endTime)}</p>
//               <p className="text-blue-600 font-semibold text-sm mt-2">Status: {booking.status}</p>
//               <div className="flex gap-3 mt-4">
//                 <button className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 transition" onClick={() => handleComplete(booking.id)}>Complete</button>
//                 <button className="bg-yellow-500 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition" onClick={() => openUpdateModal(booking)}>Update</button>
//                 <button className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition" onClick={() => handleCancel(booking.id)}>Cancel</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-4">Update Booking</h2>
//               <label className="block mb-2">Booking Date:</label>
//               <input type="date" className="w-full p-2 border rounded-lg mb-4" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

//               <label className="block mb-2">Start Time:</label>
//               <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)} />

//               <label className="block mb-2">End Time:</label>
//               <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} />

//               <div className="flex justify-end gap-3">
//                 <button className="bg-gray-400 px-4 py-2 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowModal(false)}>Cancel</button>
//                 {/* <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700" onClick={handleUpdateBooking}>Update</button> */}
//                 <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 w-full" onClick={handleCheckAvailability}>Check Availability</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default BookedBookingComponent; 

import {React, useState} from "react";
import { FaSignOutAlt } from "react-icons/fa";
import dayjs from "dayjs";
import bgImage from "../../../assets/images/m11.jpg";

const BookedBookingComponent = ({
  bookedMeetings,
  searchDate,
  setSearchDate,
  searchRoom,
  setSearchRoom,
  handleComplete,
  handleCancel,
  openUpdateModal,
  handleUpdateBooking,
  handleSignOut,
  handleCheckAvailability,
  showModal,
  setShowModal,
  selectedBooking,
  selectedDate,
  setSelectedDate,
  newStartTime,
  setNewStartTime,
  newEndTime,
  setNewEndTime,
  availableRooms,
  setAvailableRooms,
  setSelectedRoom,
  selectedRoom
}) => {
  
  const formatTime = (startTime, endTime) => {
    return `${dayjs(startTime).format("h:mm A")} - ${dayjs(endTime).format("h:mm A")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
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
      <div className="p-8 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Booked Meetings</h1>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => window.location.href = "/dashboard"}
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
          {bookedMeetings
            .filter((booking) => {
              const endTime = new Date(booking.endTime);
              const now = new Date();
              return booking.status === "BOOKED" && endTime > now;
            })
            .map((booking) => (
              <div key={booking.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-900">{booking.roomName}</h2>
                <p className="text-gray-600 text-lg mt-2">{booking.startTime.split("T")[0]}</p>
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
              <label className="block mb-2">Booking Date:</label>
              <input type="date" className="w-full p-2 border rounded-lg mb-4" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

              <label className="block mb-2">Start Time:</label>
              <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)} />

              <label className="block mb-2">End Time:</label>
              <input type="time" className="w-full p-2 border rounded-lg mb-4" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)} />

              <button className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700 w-full" onClick={handleCheckAvailability}>Check Availability</button>

              {availableRooms.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Select an Available Room:</h3>
                  <select
                    className="w-full p-2 border rounded-lg mb-4"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                  >
                    <option value="">-- Select Room --</option>
                    {availableRooms.map((room) => (
                      <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                  </select>

                  <button className="bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-700 w-full" onClick={handleUpdateBooking}>Update Booking</button>
                </div>
              )}

              <button className="bg-gray-400 px-4 py-2 text-white rounded-lg hover:bg-gray-500 w-full mt-2" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedBookingComponent;
