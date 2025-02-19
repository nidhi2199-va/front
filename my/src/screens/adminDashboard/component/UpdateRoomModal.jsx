import React from "react";

const UpdateRoomModal = ({
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  selectedRoom,
  setSelectedRoom,
  handleUpdateRoomSubmit,
  errorMessage,
  successMessage,
}) => {
  if (!isUpdateModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Room</h2>
        <form onSubmit={handleUpdateRoomSubmit} className="flex flex-col space-y-4">
          <label className="font-semibold text-gray-700">Room Name:</label>
          <input
            type="text"
            value={selectedRoom.name}
            onChange={(e) =>
              setSelectedRoom({ ...selectedRoom, name: e.target.value })
            }
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="font-semibold text-gray-700">Capacity:</label>
          <input
            type="number"
            value={selectedRoom.capacity}
            onChange={(e) =>
              setSelectedRoom({ ...selectedRoom, capacity: e.target.value })
            }
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500 text-center mt-2">{successMessage}</div>
          )}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsUpdateModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoomModal;