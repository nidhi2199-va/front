
// import React, { Component } from "react";
// import { fetchMeetingRooms, createRoom, updateRoom, deleteRoom } from "../../../shared/utils/api";
// import AdminDashboardComponent from "../component/AdminDashboardComponent";

// class AdminDashboard extends Component {
//   state = {
//     viewCreate: false,
//     viewRooms: false,
//     roomName: "",
//     capacity: "",
//     time: "", // Added time field
//     errorMessage: null,
//     successMessage: null,
//     meetingRooms: [],
//     selectedRoom: null,
//     isUpdateModalOpen: false,
//     recentRoom: null, // State to store the most recently created room
//   };

//   // Fetch all meeting rooms
//   fetchMeetingRoomsData = async () => {
//     try {
//       const rooms = await fetchMeetingRooms();
//       this.setState({ meetingRooms: rooms });
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
//     }
//   };

//   // Handle Create Room
//   handleCreateRoom = () => {
//     this.setState({ viewCreate: true, viewRooms: false });
//   };

//   // Handle View and Edit Rooms
//   handleViewEditRooms = () => {
//     this.setState({ viewRooms: true, viewCreate: false }, () => {
//       this.fetchMeetingRoomsData();
//     });
//   };

//   // Handle Create Room Submit
//   handleCreateRoomSubmit = async (e) => {
//     e.preventDefault();

//     const { roomName, capacity } = this.state;
//     const roomData = {
//       name: roomName,
//       capacity: parseInt(capacity, 10),
//     };

//     try {
//       const response = await createRoom(roomData);
//       const createdRoom = response; // Newly created room response

//       this.setState({
//         successMessage: "Room created successfully!",
//         roomName: "",
//         capacity: "",
//         recentRoom: createdRoom, // Set the recently created room
//       });

//       // After creating the room, switch view to "viewRooms"
//       this.setState({
//         viewCreate: true,  // Hide the "Create Room" view
//         viewRooms: false,    // Show the "View Rooms" view
//       });

//     } catch (error) {
//       this.setState({ errorMessage: "Room name already exists." });
//     }
//   };

//   // Handle Update (Open Update Modal)
//   handleUpdate = (room) => {
//     this.setState({ selectedRoom: room, isUpdateModalOpen: true });
//   };

//   // Handle Change in Update Modal
//   handleUpdateChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       selectedRoom: { ...prevState.selectedRoom, [name]: value },
//     }));
//   };

//   // Handle Update Room Submit
//   handleUpdateRoomSubmit = async (e) => {
//     e.preventDefault();
//     const { selectedRoom } = this.state;

//     try {
//       const updatedRoomData = {
//         name: selectedRoom.name,
//         capacity: parseInt(selectedRoom.capacity, 10),
//         time: selectedRoom.time, // Include time in update
//       };

//       await updateRoom(selectedRoom.id, updatedRoomData);
//       this.setState({ 
//         successMessage: "Room updated successfully!", 
//         isUpdateModalOpen: false, 
//         selectedRoom: null 
//       });
//       this.fetchMeetingRoomsData();
//       this.clearMessages();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to update room. Please try again." });
//       this.clearMessages();
//     }
//   };

//   // Handle Delete
//   handleDelete = async (roomId) => {
//     try {
//       await deleteRoom(roomId);
//       this.setState({
//         meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
//         successMessage: "Room deleted successfully!",
//       });
//       this.clearMessages();
//     } catch (error) {
//       this.setState({ errorMessage: "Failed to delete the room. Please try again." });
//       this.clearMessages();
//     }
//   };

//   // Handle Input Changes for Create Form
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // Clear messages after 3 seconds
//   clearMessages = () => {
//     setTimeout(() => {
//       this.setState({ successMessage: null, errorMessage: null });
//     }, 3000);
//   };

//   render() {
//     return (
//       <AdminDashboardComponent
//         {...this.state}
//         handleCreateRoom={this.handleCreateRoom}
//         handleViewEditRooms={this.handleViewEditRooms}
//         handleCreateRoomSubmit={this.handleCreateRoomSubmit}
//         handleUpdate={this.handleUpdate}
//         handleUpdateChange={this.handleUpdateChange} // Fix: Pass this function
//         handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
//         handleDelete={this.handleDelete}
//         handleChange={this.handleChange}
//       />
//     );
//   }
// }

// export default AdminDashboard;
import React, { Component } from "react";
import { fetchMeetingRooms, fetchBookings, createRoom, updateRoom, deleteRoom } from "../../../shared/utils/api";
import AdminDashboardComponent from "../component/AdminDashboardComponent";

class AdminDashboard extends Component {
  state = {
    viewCreate: false,
    viewRooms: false,
    viewBookings: false,
    roomName: "",
    capacity: "",
    errorMessage: null,
    successMessage: null,
    meetingRooms: [],
    bookings: [],
    selectedRoom: null,
    isUpdateModalOpen: false,
    recentRoom: null,
  };

  componentDidMount() {
    this.fetchMeetingRoomsData();
    this.fetchBookingsData();
  }

  fetchMeetingRoomsData = async () => {
    try {
      const rooms = await fetchMeetingRooms();
      this.setState({ meetingRooms: rooms });
    } catch (error) {
      this.setState({ errorMessage: "Failed to fetch meeting rooms. Please try again." });
    }
  };

  fetchBookingsData = async () => {
    try {
      const bookings = await fetchBookings();
      this.setState({ bookings });
    } catch (error) {
      this.setState({ errorMessage: "Failed to fetch bookings. Please try again." });
    }
  };

  handleCreateRoom = () => {
    this.setState({ viewCreate: true, viewRooms: false, viewBookings: false });
  };

  handleViewEditRooms = () => {
    this.setState({ viewRooms: true, viewCreate: false, viewBookings: false }, () => {
      this.fetchMeetingRoomsData();
    });
  };

  handleViewBookings = () => {
    this.setState({ viewBookings: true, viewCreate: false, viewRooms: false }, () => {
      this.fetchBookingsData();
    });
  };

  handleCreateRoomSubmit = async (e) => {
    e.preventDefault();
    const { roomName, capacity } = this.state;
    const roomData = { name: roomName, capacity: parseInt(capacity, 10) };

    try {
      const response = await createRoom(roomData);
      this.setState({
        successMessage: "Room created successfully!",
        roomName: "",
        capacity: "",
        recentRoom: response,
        viewCreate: true,
        viewRooms: false,
      });
    } catch (error) {
      this.setState({ errorMessage: "Room name already exists." });
    }
  };

  handleUpdate = (room) => {
    this.setState({ selectedRoom: room, isUpdateModalOpen: true });
  };

  handleUpdateChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      selectedRoom: { ...prevState.selectedRoom, [name]: value },
    }));
  };

  handleUpdateRoomSubmit = async (e) => {
    e.preventDefault();
    const { selectedRoom } = this.state;

    try {
      await updateRoom(selectedRoom.id, {
        name: selectedRoom.name,
        capacity: parseInt(selectedRoom.capacity, 10),
      });
      this.setState({ successMessage: "Room updated successfully!", isUpdateModalOpen: false, selectedRoom: null });
      this.fetchMeetingRoomsData();
      this.clearMessages();
    } catch (error) {
      this.setState({ errorMessage: "Failed to update room. Please try again." });
      this.clearMessages();
    }
  };

  handleDelete = async (roomId) => {
    try {
      await deleteRoom(roomId);
      this.setState({
        meetingRooms: this.state.meetingRooms.filter((room) => room.id !== roomId),
        successMessage: "Room deleted successfully!",
      });
      this.clearMessages();
    } catch (error) {
      this.setState({ errorMessage: "Failed to delete the room. Please try again." });
      this.clearMessages();
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearMessages = () => {
    setTimeout(() => {
      this.setState({ successMessage: null, errorMessage: null });
    }, 3000);
  };

  render() {
    return (
      <AdminDashboardComponent
        {...this.state}
        handleCreateRoom={this.handleCreateRoom}
        handleViewEditRooms={this.handleViewEditRooms}
        handleViewBookings={this.handleViewBookings}
        handleCreateRoomSubmit={this.handleCreateRoomSubmit}
        handleUpdate={this.handleUpdate}
        handleUpdateChange={this.handleUpdateChange}
        handleUpdateRoomSubmit={this.handleUpdateRoomSubmit}
        handleDelete={this.handleDelete}
        handleChange={this.handleChange}
      />
    );
  }
}

export default AdminDashboard;
