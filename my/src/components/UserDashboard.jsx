
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import bgImage from "/src/components/image/m5.jpg";
const UserDashboard = () => {
  const navigate = useNavigate();
  const [viewBookings, setViewBookings] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [rooms, setRooms] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const fetchCompletedBookings = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("Token not found. Please log in again.");
      alert("Session expired. Please log in again.");
      return;
    }
  
    try {
      const response = await axios.get("http://localhost:8080/bookings/history/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Completed bookings:", response.data);
      setCompletedBookings(response.data);
    } catch (error) {
      console.error("Error fetching completed bookings:", error);
    }
  };
  
  const navigateToBookedBookings = () => {
    navigate("/booked-booking");
  };
  const fetchAvailableRooms = async () => {
    if (!selectedDate || !startTime || !endTime) {
      alert("Please select a date, start time, and end time.");
      return;
    }
    if (endTime <= startTime) {
      alert("End time must be after start time.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized. Please log in again.");
      navigate("/login");
      return;
    }

    const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
    const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

    try {
      const response = await axios.get("http://localhost:8080/meeting-rooms/availability", {
        params: { startTime: formattedStartTime, endTime: formattedEndTime },
        headers: { Authorization: `Bearer ${token}` },
      });

      const roomDetailsResponse = await axios.get("http://localhost:8080/meeting-rooms/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const allRooms = roomDetailsResponse.data;
      const filteredRooms = allRooms.filter(room => response.data.availableRoomIds.includes(room.id));

      setRooms(filteredRooms);
      navigate("/available-rooms", { state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms } });
    } catch (error) {
      console.error("Error fetching available rooms", error.response?.data || error.message);
      if (error.response?.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        alert("Failed to fetch available rooms. Try again later.");
      }
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  
    return (
      <div className="flex min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={() => setViewBookings(false)} className={`py-2 px-4 rounded transition ${!viewBookings ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"}`}>Book a Room</button>
          <button onClick={() => {
            setViewBookings(true);
            fetchCompletedBookings();
          }} className={`py-2 px-4 rounded transition ${viewBookings ? "bg-green-500 hover:bg-green-600" : "bg-gray-700"}`}>View My Bookings</button>
        </div>
  
        <div className="flex-1 p-6">
          <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold">MeetEase</h1>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}>Sign Out</button>
          </div>
  
          {viewBookings ? (
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
              <h1 className="text-3xl font-bold text-center">My Booking History</h1>
              <div className="flex space-x-4 my-4">
                <button onClick={() => setShowCompleted(!showCompleted)} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                  {showCompleted ? "Hide Completed Bookings" : "View Completed Bookings"}
                </button>
                <button onClick={() => navigate("/booked-booking")} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
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
    .filter((booking) => booking.status === "COMPLETED") // Only show completed bookings
    .map((booking) => (
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
              )}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl mt-6">
              <h1 className="text-3xl font-bold mb-6 text-center">Book a Room</h1>
              <div className="flex flex-col space-y-4">
                <label className="font-semibold">Select Date:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  className="p-2 border rounded"
                />
                <label className="font-semibold">Start Time:</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="p-2 border rounded"
                />
                 <label className="font-semibold">End Time:</label>
                 <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="p-2 border rounded"
              />

              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={fetchAvailableRooms}>Find Available Rooms</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
  
  export default UserDashboard;
  