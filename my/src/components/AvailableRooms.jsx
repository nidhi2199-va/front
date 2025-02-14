
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "/src/components/image/m4.jpg";

const AvailableRooms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { availableRooms: initialRooms, startTime, endTime } = location.state || {};
  const [availableRooms, setAvailableRooms] = useState(initialRooms || []);
  const [searchCapacity, setSearchCapacity] = useState("");

  const handleBooking = async (roomId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized: Please login first.");
        navigate("/login");
        return;
      }

      await axios.post(
        "http://localhost:8080/bookings/create",
        { roomId, startTime, endTime },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Remove booked room from the list
      setAvailableRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));

      alert("Room booked successfully!");
    } catch (error) {
      console.error("Error booking room:", error);
      alert("Failed to book room. Please try again.");
    }
  };

  const filteredRooms = availableRooms?.filter((room) =>
    searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
      
    >
      <div className="max-w-4xl w-full bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-2xl"> {/* Back Button */}
        <div className="flex justify-right mt-6">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            onClick={() => navigate("/userdashboard")}
          >
            Back to Dashboard
          </button>
        </div>
         {/* Back Button */}
         <div className="flex justify-left mt-6">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            onClick={() => navigate("/booked-booking")}
          >
            Go to Booked Rooms
          </button>
        </div>
        <h1 className="text-4xl font-extrabold text-center text-black mb-6 drop-shadow-lg">
          Available Rooms
        </h1>

        <p className="mb-6 text-center text-lg text-black drop-shadow-lg">
          <span className="font-semibold">
            {new Date(startTime).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <br />
          <span className="font-semibold">
            {new Date(startTime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}{" "}
            -{" "}
            {new Date(endTime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </p>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="number"
            placeholder="Search by minimum capacity"
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
            value={searchCapacity}
            onChange={(e) => setSearchCapacity(e.target.value)}
          />
        </div>

        {/* Available Rooms List */}
        {filteredRooms?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="border p-6 rounded-lg shadow-xl bg-white/50 backdrop-blur-md flex flex-col items-center hover:scale-105 transition transform duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-700">{room.name}</h2>
                <p className="text-lg text-gray-600">Capacity: {room.capacity}</p>
                <button
                  className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
                  onClick={() => handleBooking(room.id)}
                >
                  Book Room
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-white drop-shadow-lg">
            No available rooms for the selected criteria.
          </p>
        )}
 {/* Back Button */}
 <div className="flex justify-center mt-6">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            onClick={() => navigate("/userdashboard")}
          >
            Back to Dashboard
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default AvailableRooms;
