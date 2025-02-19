import React from "react";

const RoomList = ({ meetingRooms, handleUpdate, handleDelete }) => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Meeting Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetingRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{room.name}</h2>
            <p className="text-gray-700 mb-4">Capacity: {room.capacity}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleUpdate(room)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(room.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;