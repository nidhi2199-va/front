// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";  // Adjust path if necessary
// import Signup from "./components/Signup"; // Adjust path if necessary
// import BookingPage from "./components/UserDashboard";
// import './index.css'; // Ensure Tailwind CSS is imported
// import AvailableRooms from "./components/AvailableRooms";
// import BookedBooking from "./components/BookedBooking";
// import AdminDashboard from "./components/AdminDashboard";
// // Mock Auth Function (Replace with actual authentication)

// function App() { 
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} /> {/* Default page is Login */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<Login />} /> {/* Default to login */}
//         <Route path="/userdashboard" element={<BookingPage />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         <Route path="/available-rooms" element={<AvailableRooms />} />
//         <Route path="/booked-booking" element={<BookedBooking />} /> {/* New route for booked bookings */}

//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import AppRouter from "./navigation/AppRouter";

const App = () => {
  return <AppRouter />;
};

export default App;