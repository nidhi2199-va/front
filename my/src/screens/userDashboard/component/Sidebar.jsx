import React from "react";

const Sidebar = ({ setViewBookings, viewBookings, fetchCompletedBookings }) => {
  return (
    <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 fixed h-screen">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <button
        onClick={() => setViewBookings(false)}
        className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
      >
        Book a Room
      </button>
      <button
        onClick={() => {
          setViewBookings(true);
          fetchCompletedBookings();
        }}
        className={`py-2 px-4 rounded transition ${viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}
      >
        View My Bookings
      </button>
    </div>
  );
};

export default Sidebar;