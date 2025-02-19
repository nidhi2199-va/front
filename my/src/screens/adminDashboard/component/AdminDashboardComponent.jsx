
const AdminDashboardComponent = ({
    viewCreate,
    viewRooms,
    roomName,
    capacity,
    errorMessage,
    successMessage,
    meetingRooms,
    selectedRoom,
    isUpdateModalOpen,
    handleCreateRoom,
    handleViewEditRooms,
    handleCreateRoomSubmit,
    handleUpdate,
    handleUpdateRoomSubmit,
    handleUpdateChange,
    handleDelete,
    handleChange,
    recentRoom, // New prop to handle the recently created room
    setIsUpdateModalOpen,
    bgImage,
    navigate
}) => {
    return (
        <div className="flex min-h-screen bg-gray-100" style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}>
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-900 text-white p-6 flex flex-col space-y-4 min-h-screen">
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <button
                    onClick={handleCreateRoom}
                    className={`py-2 px-4 rounded transition ${viewCreate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
                        }`}
                >
                    Create a Room
                </button>
                <button
                    onClick={handleViewEditRooms}
                    className={`py-2 px-4 rounded transition ${viewRooms ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700"
                        }`}
                >
                    View and Edit Rooms
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                    <h1 className="text-2xl font-bold">MeetEase</h1>
                    <button
                        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = ("/login")
                        }}
                    >
                        Sign Out
                    </button>
                </div>

                {/* Welcome Message */}
                {!viewCreate && !viewRooms && (
                    <div className="flex flex-col items-center justify-center mt-20">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome, Admin!</h1>
                        <p className="text-xl text-gray-600">Manage your meeting rooms efficiently.</p>
                    </div>
                )}

                {/* Create Room Form */}
                {viewCreate && (
                    <div className="w-100 mx-auto bg-white p-8 rounded-lg shadow-xl mt-6">
                        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a Room</h1>
                        <form onSubmit={handleCreateRoomSubmit} className="w-100 flex flex-col space-y-4">
                            <div className="w-100 flex flex-col">
                                <label className="font-semibold text-gray-700">Room Name:</label>
                                <input
                                    type="text"
                                    name="roomName"
                                    value={roomName}
                                    onChange={handleChange}
                                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="w-100 flex flex-col">
                                <label className="font-semibold text-gray-700">Capacity:</label>
                                <input
                                    type="number"
                                    name="capacity"
                                    value={capacity}
                                    onChange={handleChange}
                                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>


                            {/* Show error or success messages */}
                            {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}
                            {successMessage && <div className="text-green-500 text-center mt-2">{successMessage}</div>}

                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Create Room
                            </button>

                        </form>

                        {/* Display the recently created room immediately below the form */}
                        {recentRoom && (
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recently Created Room</h3>
                                <p className="text-gray-700"><strong>Room Name:</strong> {recentRoom.name}</p>
                                <p className="text-gray-700"><strong>Capacity:</strong> {recentRoom.capacity}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Display All Meeting Rooms */}
                {viewRooms && (
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Meeting Rooms</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {meetingRooms.map((room) => (
                                <div key={room.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
                )}

                {/* Update Room Modal */}
                {isUpdateModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-xl w-1/3">
                            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Room</h2>
                            <form onSubmit={handleUpdateRoomSubmit} className="flex flex-col space-y-4">
                                <label className="font-semibold text-gray-700">Room Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedRoom.name}
                                    onChange={handleUpdateChange}
                                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />

                                <label className="font-semibold text-gray-700">Capacity:</label>
                                <input
                                    type="number"
                                    name="capacity"
                                    value={selectedRoom.capacity}
                                    onChange={handleUpdateChange}
                                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />

                                {/* Show error or success messages */}
                                {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}
                                {successMessage && <div className="text-green-500 text-center mt-2">{successMessage}</div>}

                                <div className="flex justify-end space-x-4">
                                    <button onClick={() => setIsUpdateModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboardComponent;
