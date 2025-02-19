
const RoomCard = ({ room, onBookRoom }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-900">{room.name}</h2>
        <p className="text-gray-600 text-lg mt-2">Capacity: {room.capacity}</p>
        <p className="text-blue-600 font-semibold text-sm mt-2">Status: Available</p>
        <div className="flex gap-3 mt-4">
          <button
            className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => onBookRoom(room.id)}
          >
            Book Room
          </button>
        </div>
      </div>
    );
  };
  
  export default RoomCard; // ✅ Ensure this is the default export