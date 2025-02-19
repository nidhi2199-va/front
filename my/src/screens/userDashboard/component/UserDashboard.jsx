// import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt, FaClock, FaSignOutAlt } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';

// const UserDashboard = ({
//   viewBookings,
//   selectedDate,
//   startTime,
//   endTime,
//   completedBookings,
//   showCompleted,
//   onViewBookingsChange,
//   onDateChange,
//   onStartTimeChange,
//   onEndTimeChange,
//   onShowCompletedChange,
//   onSignOut,
//   onFetchCompletedBookings,
//   onFetchAvailableRooms,
// }) => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 fixed h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           onClick={() => onViewBookingsChange(false)}
//           className={`py-2 px-4 rounded transition ${!viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           Book a Room
//         </button>
//         <button
//           onClick={() => {
//             onViewBookingsChange(true);
//             onFetchCompletedBookings();
//           }}
//           className={`py-2 px-4 rounded transition ${viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-[25%]">
//         {/* Navbar */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-40">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-right space-x-2"
//             onClick={onSignOut}
//           >
//             <FaSignOutAlt />
//             <span>Sign Out</span>
//           </button>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? (
//             <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//               <div className="flex justify-center space-x-4 my-4">
//                 <button
//                   onClick={() => onShowCompletedChange(!showCompleted)}
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   {showCompleted ? 'Hide Completed Bookings' : 'View Completed Bookings'}
//                 </button>
//                 <button
//                   onClick={() => navigate('/booked-booking')}
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   View Booked Bookings
//                 </button>
//               </div>
//               {showCompleted && (
//                 <table className="w-full border-collapse border border-gray-300 mt-4">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Start Time</th>
//                       <th className="border p-2">End Time</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings
//                       .filter((booking) => booking.status === 'COMPLETED')
//                       .map((booking) => (
//                         <tr key={booking.id} className="text-center">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                           <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                           <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ) : (
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Calendar Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaCalendarAlt className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//                   </div>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={onDateChange}
//                     dateFormat="yyyy-MM-dd"
//                     minDate={new Date()}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholderText="Choose a date"
//                   />
//                 </div>

//                 {/* Time Slot Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaClock className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">Start Time</label>
//                       <input
//                         type="time"
//                         value={startTime}
//                         onChange={(e) => onStartTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">End Time</label>
//                       <input
//                         type="time"
//                         value={endTime}
//                         onChange={(e) => onEndTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={onFetchAvailableRooms}
//                   className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Find Available Rooms
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt, FaClock, FaSignOutAlt } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';

// const UserDashboard = ({
//   viewBookings,
//   selectedDate,
//   startTime,
//   endTime,
//   completedBookings,
//   showCompleted,
//   onViewBookingsChange,
//   onDateChange,
//   onStartTimeChange,
//   onEndTimeChange,
//   onShowCompletedChange,
//   onSignOut,
//   onFetchCompletedBookings,
//   onFetchAvailableRooms,
// }) => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 fixed h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           onClick={() => onViewBookingsChange(false)}
//           className={`py-2 px-4 rounded transition ${!viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           Book a Room
//         </button>
//         <button
//           onClick={() => {
//             onViewBookingsChange(true);
//             onFetchCompletedBookings(); // Ensure fetch is called on view bookings
//           }}
//           className={`py-2 px-4 rounded transition ${viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-[25%]">
//         {/* Navbar */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-40">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-right space-x-2"
//             onClick={onSignOut}
//           >
//             <FaSignOutAlt />
//             <span>Sign Out</span>
//           </button>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? (
//             <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//               <div className="flex justify-center space-x-4 my-4">
//                 <button
//                   onClick={() => onShowCompletedChange(!showCompleted)}
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   {showCompleted ? 'Hide Completed Bookings' : 'View Completed Bookings'}
//                 </button>
//                 <button
//                   onClick={() => navigate('/booked-booking')}
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   View Booked Bookings
//                 </button>
//               </div>
//               {showCompleted && (
//                 <table className="w-full border-collapse border border-gray-300 mt-4">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Start Time</th>
//                       <th className="border p-2">End Time</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings
//                       .filter((booking) => booking.status === 'COMPLETED') // Ensure status is 'COMPLETED'
//                       .map((booking) => (
//                         <tr key={booking.id} className="text-center">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                           <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                           <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ) : (
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Calendar Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaCalendarAlt className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//                   </div>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={onDateChange}
//                     dateFormat="yyyy-MM-dd"
//                     minDate={new Date()}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholderText="Choose a date"
//                   />
//                 </div>

//                 {/* Time Slot Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaClock className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">Start Time</label>
//                       <input
//                         type="time"
//                         value={startTime}
//                         onChange={(e) => onStartTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">End Time</label>
//                       <input
//                         type="time"
//                         value={endTime}
//                         onChange={(e) => onEndTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={onFetchAvailableRooms}
//                   className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Find Available Rooms
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt, FaClock, FaSignOutAlt } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';

// const UserDashboard = ({
//   viewBookings,
//   selectedDate,
//   startTime,
//   endTime,
//   completedBookings,
//   showCompleted,
//   onViewBookingsChange,
//   onDateChange,
//   onStartTimeChange,
//   onEndTimeChange,
//   onShowCompletedChange,
//   onSignOut,
//   onFetchCompletedBookings,
//   onFetchAvailableRooms,
// }) => {
//   const navigate = useNavigate();  // Use this to navigate to other pages

//   const handleShowCompletedChange = () => {
//     onShowCompletedChange(!showCompleted); // Toggle the visibility of completed bookings
//     if (!showCompleted) {
//       onFetchCompletedBookings();  // Fetch completed bookings if it's being shown
//     }
//   };

//   const handleViewBookedBookings = () => {
//     navigate('/booked-booking');  // Navigate to the Booked Bookings page
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 fixed h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           onClick={() => onViewBookingsChange(false)}
//           className={`py-2 px-4 rounded transition ${!viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           Book a Room
//         </button>
//         <button
//           onClick={() => {
//             onViewBookingsChange(true);
            
//           }}
//           className={`py-2 px-4 rounded transition ${viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'}`}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-[25%]">
       
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-40">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center"
//             onClick={onSignOut}
//           >
//             <FaSignOutAlt />
//             <span>Sign Out</span>
//           </button>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? (
//             <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//               <div className="flex justify-center space-x-4 my-4">
//                 <button
//                   onClick={handleShowCompletedChange}  // Toggle view completed bookings
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   {showCompleted ? 'Hide Completed Bookings' : 'View Completed Bookings'}
//                 </button>
//                 <button
//                   onClick={handleViewBookedBookings}  // Navigate to the booked bookings page
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   View Booked Bookings
//                 </button>
//               </div>
//               {showCompleted && (
//                 <table className="w-full border-collapse border border-gray-300 mt-4">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Start Time</th>
//                       <th className="border p-2">End Time</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings
//                       .filter((booking) => booking.status === 'COMPLETED')
//                       .map((booking) => (
//                         <tr key={booking.id} className="text-center">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                           <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                           <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ) : (
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Calendar Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaCalendarAlt className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//                   </div>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={onDateChange}
//                     dateFormat="yyyy-MM-dd"
//                     minDate={new Date()}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholderText="Choose a date"
//                   />
//                 </div>

//                 {/* Time Slot Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaClock className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">Start Time</label>
//                       <input
//                         type="time"
//                         value={startTime}
//                         onChange={(e) => onStartTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">End Time</label>
//                       <input
//                         type="time"
//                         value={endTime}
//                         onChange={(e) => onEndTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={onFetchAvailableRooms}
//                   className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Find Available Rooms
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt, FaClock, FaSignOutAlt } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';

// const UserDashboard = ({
//   viewBookings,
//   selectedDate,
//   startTime,
//   endTime,
//   completedBookings,
//   showCompleted,
//   onViewBookingsChange,
//   onDateChange,
//   onStartTimeChange,
//   onEndTimeChange,
//   onShowCompletedChange,
//   onSignOut,
//   onFetchCompletedBookings,
//   onFetchAvailableRooms,
// }) => {
//   const navigate = useNavigate(); // Use this to navigate to other pages

//   const handleShowCompletedChange = () => {
//     onShowCompletedChange(!showCompleted); // Toggle the visibility of completed bookings
//     if (!showCompleted) {
//       onFetchCompletedBookings(); // Fetch completed bookings if it's being shown
//     }
//   };

//   const handleViewBookedBookings = () => {
//     navigate('/booked-booking'); // Navigate to the Booked Bookings page
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 fixed h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           onClick={() => onViewBookingsChange(false)}
//           className={`py-2 px-4 rounded transition ${
//             !viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'
//           }`}
//         >
//           Book a Room
//         </button>
//         <button
//           onClick={() => {
//             onViewBookingsChange(true);
//           }}
//           className={`py-2 px-4 rounded transition ${
//             viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'
//           }`}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-[25%]">
//         {/* Header */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-40">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 flex items-center space-x-2"
//             onClick={onSignOut}
//           >
//             <FaSignOutAlt />
//             <span>Sign Out</span>
//           </button>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? (
//             // View Bookings Section
//             <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//               <div className="flex justify-center space-x-4 my-4">
//                 <button
//                   onClick={handleShowCompletedChange} // Toggle view completed bookings
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   {showCompleted ? 'Hide Completed Bookings' : 'View Completed Bookings'}
//                 </button>
//                 <button
//                   onClick={handleViewBookedBookings} // Navigate to the booked bookings page
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   View Booked Bookings
//                 </button>
//               </div>
//               {showCompleted && (
//                 <table className="w-full border-collapse border border-gray-300 mt-4">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Start Time</th>
//                       <th className="border p-2">End Time</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings
//                       .filter((booking) => booking.status === 'COMPLETED')
//                       .map((booking) => (
//                         <tr key={booking.id} className="text-center">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                           <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                           <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ) : (
//             // Book a Room Section
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Calendar Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaCalendarAlt className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//                   </div>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={onDateChange}
//                     dateFormat="yyyy-MM-dd"
//                     minDate={new Date()}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholderText="Choose a date"
//                   />
//                 </div>

//                 {/* Time Slot Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaClock className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">Start Time</label>
//                       <input
//                         type="time"
//                         value={startTime}
//                         onChange={(e) => onStartTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">End Time</label>
//                       <input
//                         type="time"
//                         value={endTime}
//                         onChange={(e) => onEndTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={onFetchAvailableRooms}
//                   className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Find Available Rooms
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt, FaClock, FaSignOutAlt } from 'react-icons/fa';
// import 'tailwindcss/tailwind.css';

// const UserDashboard = ({
//   viewBookings,
//   selectedDate,
//   startTime,
//   endTime,
//   completedBookings,
//   showCompleted,
//   onViewBookingsChange,
//   onDateChange,
//   onStartTimeChange,
//   onEndTimeChange,
//   onShowCompletedChange,
//   onSignOut,
//   onFetchCompletedBookings,
//   onFetchAvailableRooms,
// }) => {
//   const navigate = useNavigate(); // Use this to navigate to other pages

//   const handleShowCompletedChange = () => {
//     onShowCompletedChange(!showCompleted); // Toggle the visibility of completed bookings
//     if (!showCompleted) {
//       onFetchCompletedBookings(); // Fetch completed bookings if it's being shown
//     }
//   };

//   const handleViewBookedBookings = () => {
//     navigate('/booked-booking'); // Navigate to the Booked Bookings page
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col space-y-4 fixed h-screen">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <button
//           onClick={() => onViewBookingsChange(false)}
//           className={`py-2 px-4 rounded transition ${
//             !viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'
//           }`}
//         >
//           Book a Room
//         </button>
//         <button
//           onClick={() => {
//             onViewBookingsChange(true);
//           }}
//           className={`py-2 px-4 rounded transition ${
//             viewBookings ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700'
//           }`}
//         >
//           View My Bookings
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-[25%]">
//         {/* Header */}
//         <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-40">
//           <h1 className="text-2xl font-bold">MeetEase</h1>
//           <button
//             className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 flex items-center space-x-2"
//             onClick={onSignOut}
//           >
//             <FaSignOutAlt />
//             <span>Sign Out</span>
//           </button>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? (
//             // View Bookings Section
//             <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//               <div className="flex justify-center space-x-4 my-4">
//                 <button
//                   onClick={handleShowCompletedChange} // Toggle view completed bookings
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   {showCompleted ? 'Hide Completed Bookings' : 'View Completed Bookings'}
//                 </button>
//                 <button
//                   onClick={handleViewBookedBookings} // Navigate to the booked bookings page
//                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//                 >
//                   View Booked Bookings
//                 </button>
//               </div>
//               {showCompleted && (
//                 <table className="w-full border-collapse border border-gray-300 mt-4">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="border p-2">Room Name</th>
//                       <th className="border p-2">Date</th>
//                       <th className="border p-2">Start Time</th>
//                       <th className="border p-2">End Time</th>
//                       <th className="border p-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {completedBookings
//                       .filter((booking) => booking.status === 'COMPLETED')
//                       .map((booking) => (
//                         <tr key={booking.id} className="text-center">
//                           <td className="border p-2">{booking.roomName}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                           <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                           <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                           <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ) : (
//             // Book a Room Section
//             <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//               <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Calendar Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaCalendarAlt className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//                   </div>
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={onDateChange}
//                     dateFormat="yyyy-MM-dd"
//                     minDate={new Date()}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholderText="Choose a date"
//                   />
//                 </div>

//                 {/* Time Slot Section */}
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <FaClock className="text-2xl text-blue-500" />
//                     <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">Start Time</label>
//                       <input
//                         type="time"
//                         value={startTime}
//                         onChange={(e) => onStartTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <label className="text-gray-600 font-medium">End Time</label>
//                       <input
//                         type="time"
//                         value={endTime}
//                         onChange={(e) => onEndTimeChange(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="mt-8 flex justify-center">
//                 <button
//                   onClick={onFetchAvailableRooms}
//                   className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Find Available Rooms
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import bgImage from "../../../assets/images/m11.jpg";
const UserDashboard = ({
  viewBookings,
  selectedDate,
  startTime,
  endTime,
  completedBookings,
  showCompleted,
  onViewBookingsChange,
  onDateChange,
  onStartTimeChange,
  onEndTimeChange,
  onShowCompletedChange,
  onSignOut,
  onFetchCompletedBookings,
  onFetchAvailableRooms,
}) => {
  const navigate = useNavigate();

  const handleShowCompletedChange = () => {
    onShowCompletedChange(!showCompleted);
    if (!showCompleted) {
      onFetchCompletedBookings();
    }
  };
  
  
  const handleViewBookedBookings = () => {
    navigate("/booked-booking");
  };

  return (
    <div className="flex min-h-screen bg-gray-100" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}>
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen fixed top-0 left-0 mt-6">
        {/* Sidebar Title */}
        {/* <h2 className="text-2xl font-bold mb-8 mt-10 justify-between items-center ">User Dashboard</h2> */}
        <h2 className="text-2xl font-bold mb-8 mt-10 text-center py-4">Welcome to UserDashboard!!</h2>
        {/* Action Buttons */}
        <button
          onClick={() => onViewBookingsChange(false)}
          className={`py-2 px-4 rounded transition ${
            !viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
          }`}
        >
          Book a Room
        </button>
        <button
          onClick={() => onViewBookingsChange(true)}
          className={`py-2 px-4 rounded transition ${
            viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
          }`}
        >
          View My Bookings
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[25%] p-6">
        {/* Header */}
        <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-40">
          <h1 className="text-2xl font-bold">MeetEase</h1>
          <button
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 mt-16">
          {viewBookings ? (
            // View Bookings Section
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
              <div className="flex justify-center space-x-4 my-4">
                <button
                  onClick={handleShowCompletedChange}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  {showCompleted ? "Hide Completed Bookings" : "View Completed Bookings"}
                </button>
                <button
                  onClick={handleViewBookedBookings}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
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
                      .filter((booking) => booking.status === "COMPLETED")
                      .map((booking) => (
                        <tr key={booking.id} className="text-center">
                          <td className="border p-2">{booking.roomName}</td>
                          <td className="border p-2">{booking.startTime.split("T")[0]}</td>
                          <td className="border p-2">{booking.startTime.split("T")[1]}</td>
                          <td className="border p-2">{booking.endTime.split("T")[1]}</td>
                          <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          ) : (
            // Book a Room Section
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaCalendarAlt className="text-2xl text-blue-500" />
                    <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
                  </div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={onDateChange}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholderText="Choose a date"
                  />
                </div>

                {/* Time Slot Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaClock className="text-2xl text-blue-500" />
                    <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label className="text-gray-600 font-medium">Start Time</label>
                      <input
                        type="time"
                        value={startTime}
                        onChange={(e) => onStartTimeChange(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-gray-600 font-medium">End Time</label>
                      <input
                        type="time"
                        value={endTime}
                        onChange={(e) => onEndTimeChange(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={onFetchAvailableRooms}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Find Available Rooms
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
