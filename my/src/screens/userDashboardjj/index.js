import React from "react";
import { Navbar, Sidebar } from "../../shared/components";
import { RoomBookingContainer, BookingHistoryContainer } from "./containers";

const UserDashboard = () => {
  const [viewBookings, setViewBookings] = useState(false);

  const handleBookRoom = () => setViewBookings(false);
  const handleViewBookings = () => setViewBookings(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onBookRoom={handleBookRoom} onViewBookings={handleViewBookings} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[25%]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 mt-16">
          {viewBookings ? <BookingHistoryContainer /> : <RoomBookingContainer />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;