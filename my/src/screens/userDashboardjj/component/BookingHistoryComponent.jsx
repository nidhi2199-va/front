// import React from "react";

// const BookingHistory = ({ completedBookings, showCompleted, onToggleShowCompleted }) => {
//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//       <button onClick={onToggleShowCompleted} className="bg-blue-500 text-white py-2 px-4 rounded">
//         {showCompleted ? "Hide Completed Bookings" : "View Completed Bookings"}
//       </button>
//       {showCompleted && (
//         <table className="w-full border-collapse border border-gray-300 mt-4">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Room Name</th>
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Start Time</th>
//               <th className="border p-2">End Time</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {completedBookings.map((booking) => (
//               <tr key={booking.id} className="text-center">
//                 <td className="border p-2">{booking.roomName}</td>
//                 <td className="border p-2">{booking.startTime.split('T')[0]}</td>
//                 <td className="border p-2">{booking.startTime.split('T')[1]}</td>
//                 <td className="border p-2">{booking.endTime.split('T')[1]}</td>
//                 <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BookingHistory;
// import React from "react";

// const BookingHistory = ({ completedBookings, onToggle }) => {
//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//       <button onClick={onToggle} className="bg-blue-500 text-white px-4 py-2 rounded">
//         Toggle Completed Bookings
//       </button>
//       <table className="w-full border-collapse border border-gray-300 mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Room Name</th>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Start Time</th>
//             <th className="border p-2">End Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {completedBookings.map((booking) => (
//             <tr key={booking.id}>
//               <td className="border p-2">{booking.roomName}</td>
//               <td className="border p-2">{booking.startTime.split("T")[0]}</td>
//               <td className="border p-2">{booking.startTime.split("T")[1]}</td>
//               <td className="border p-2">{booking.endTime.split("T")[1]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingHistory;
// import React from "react";

// const BookingHistory = ({ completedBookings, onToggle }) => {
//   return (
//     <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
//       <div className="flex justify-center space-x-4 my-4">
//         <button
//           onClick={onToggle}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
//         >
//           Toggle Bookings
//         </button>
//       </div>

//       <table className="w-full border-collapse border border-gray-300 mt-4">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Room Name</th>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Start Time</th>
//             <th className="border p-2">End Time</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {completedBookings.map((booking) => (
//             <tr key={booking.id} className="text-center">
//               <td className="border p-2">{booking.roomName}</td>
//               <td className="border p-2">{booking.startTime.split("T")[0]}</td>
//               <td className="border p-2">{booking.startTime.split("T")[1]}</td>
//               <td className="border p-2">{booking.endTime.split("T")[1]}</td>
//               <td className="border p-2 bg-green-500 text-white">{booking.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingHistory; // ✅ Ensure there is a default export
import React from "react";

const BookingHistoryComponent = ({ bookings }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Booking History</h1>
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
          {bookings.map((booking) => (
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
    </div>
  );
};

export default BookingHistoryComponent;