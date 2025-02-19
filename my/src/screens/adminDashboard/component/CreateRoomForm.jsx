import React from "react";

const CreateRoomForm = ({
  roomName,
  capacity,
  setRoomName,
  setCapacity,
  handleCreateRoomSubmit,
  errorMessage,
  successMessage,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a Room</h1>
      <form onSubmit={handleCreateRoomSubmit} className="flex flex-col space-y-4">
        <label className="font-semibold text-gray-700">Room Name:</label>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="font-semibold text-gray-700">Capacity:</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {errorMessage && (
          <div className="text-red-500 text-center mt-2">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 text-center mt-2">{successMessage}</div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Create Room
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;