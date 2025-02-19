// // import React from "react";
// // import BookingForm from "./BookingForm";
// // import BookingHistory from "./BookingHistory";

// // const UserDashboardComponent = ({
// //   viewBookings,
// //   selectedDate,
// //   startTime,
// //   endTime,
// //   rooms,
// //   completedBookings,
// //   showCompleted,
// //   onToggleViewBookings,
// //   onFetchAvailableRooms,
// //   onSignOut,
// // }) => {
// //   return (
// //     <div className="flex-1 p-6 mt-16">
// //       {viewBookings ? (
// //         <BookingHistory completedBookings={completedBookings} onToggle={onToggleViewBookings} />
// //       ) : (
// //         <BookingForm
// //           selectedDate={selectedDate}
// //           startTime={startTime}
// //           endTime={endTime}
// //           rooms={rooms}
// //           onFetchAvailableRooms={onFetchAvailableRooms}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default UserDashboardComponent;
// iimport React from "react";
// import { Navbar, Sidebar } from "../../shared/components";
// import RoomBookingContainer from "./containers/RoomBookingContainer";
// import BookingHistoryContainer from "./containers/BookingHistoryContainer";

// const UserDashboard = () => {
//   const [viewBookings, setViewBookings] = React.useState(false);

//   const handleBookRoom = () => setViewBookings(false);
//   const handleViewBookings = () => setViewBookings(true);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar onBookRoom={handleBookRoom} onViewBookings={handleViewBookings} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ml-[25%]">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 mt-16">
//           {viewBookings ? <BookingHistoryContainer /> : <RoomBookingContainer />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;