// // import React, { Component } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { fetchCompletedBookings, fetchAvailableRooms } from '../../../utils/api';
// // import UserDashboard from '../component/UserDashboard';

// // class UserDashboardContainer extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       viewBookings: false,
// //       selectedDate: null,
// //       startTime: '',
// //       endTime: '',
// //       rooms: [],
// //       completedBookings: [],
// //       showCompleted: false,
// //     };
// //   }

// //   handleSignOut = () => {
// //     localStorage.removeItem('token');
// //     this.props.navigate('/login'); // ✅ Use navigate from props
// //   };

// //   fetchCompletedBookings = async () => {
// //     try {
// //       const bookings = await fetchCompletedBookings();
// //       this.setState({ completedBookings: bookings });
// //     } catch (error) {
// //       console.error('Error fetching completed bookings:', error);
// //     }
// //   };

// //   fetchAvailableRooms = async () => {
// //     const { selectedDate, startTime, endTime } = this.state;
// //     if (!selectedDate || !startTime || !endTime) {
// //       alert('Please select a date, start time, and end time.');
// //       return;
// //     }
// //     if (endTime <= startTime) {
// //       alert('End time must be after start time.');
// //       return;
// //     }

// //     try {
// //       const rooms = await fetchAvailableRooms(selectedDate, startTime, endTime);
// //       this.setState({ rooms });
// //       this.props.navigate('/available-rooms', { state: { startTime, endTime, availableRooms: rooms } });
// //     } catch (error) {
// //       console.error('Error fetching available rooms', error);
// //       if (error.response?.status === 401) {
// //         alert('Session expired. Please log in again.');
// //         localStorage.removeItem('token');
// //         this.props.navigate('/login');
// //       } else {
// //         alert('Failed to fetch available rooms. Try again later.');
// //       }
// //     }
// //   };

// //   render() {
// //     const { viewBookings, selectedDate, startTime, endTime, completedBookings, showCompleted } = this.state;

// //     return (
// //       <UserDashboard
// //         viewBookings={viewBookings}
// //         selectedDate={selectedDate}
// //         startTime={startTime}
// //         endTime={endTime}
// //         completedBookings={completedBookings}
// //         showCompleted={showCompleted}
// //         onViewBookingsChange={(value) => this.setState({ viewBookings: value })}
// //         onDateChange={(date) => this.setState({ selectedDate: date })}
// //         onStartTimeChange={(time) => this.setState({ startTime: time })}
// //         onEndTimeChange={(time) => this.setState({ endTime: time })}
// //         onShowCompletedChange={(value) => this.setState({ showCompleted: value })}
// //         onSignOut={this.handleSignOut}
// //         onFetchCompletedBookings={this.fetchCompletedBookings}
// //         onFetchAvailableRooms={this.fetchAvailableRooms}
// //       />
// //     );
// //   }
// // }

// // // ✅ Wrap the class component inside a function that passes navigate
// // function UserDashboardContainerWrapper(props) {
// //   const navigate = useNavigate();
// //   return <UserDashboardContainer {...props} navigate={navigate} />;
// // }

// // export default UserDashboardContainerWrapper;
// import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchCompletedBookings, fetchAvailableRooms } from '../../../utils/api';
// import UserDashboard from '../component/UserDashboard';

// class UserDashboardContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewBookings: false,
//       selectedDate: null,
//       startTime: '',
//       endTime: '',
//       rooms: [],
//       completedBookings: [],
//       showCompleted: false,
//     };
//   }

//   handleSignOut = () => {
//     localStorage.removeItem('token');
//     this.props.navigate('/login'); // ✅ Use navigate from props
//   };

//   fetchCompletedBookings = async () => {
//     try {
//       const bookings = await fetchCompletedBookings();
//       this.setState({ completedBookings: bookings });
//     } catch (error) {
//       console.error('Error fetching completed bookings:', error);
//     }
//   };

//   fetchAvailableRooms = async () => {
//     const { selectedDate, startTime, endTime } = this.state;
//     if (!selectedDate || !startTime || !endTime) {
//       alert('Please select a date, start time, and end time.');
//       return;
//     }
//     if (endTime <= startTime) {
//       alert('End time must be after start time.');
//       return;
//     }

//     try {
//       const rooms = await fetchAvailableRooms(selectedDate, startTime, endTime);
//       this.setState({ rooms });
//       this.props.navigate('/available-rooms', { state: { startTime, endTime, availableRooms: rooms } });
//     } catch (error) {
//       console.error('Error fetching available rooms', error);
//       if (error.response?.status === 401) {
//         alert('Session expired. Please log in again.');
//         localStorage.removeItem('token');
//         this.props.navigate('/login');
//       } else {
//         alert('Failed to fetch available rooms. Try again later.');
//       }
//     }
//   };

//   render() {
//     const { viewBookings, selectedDate, startTime, endTime, completedBookings, showCompleted } = this.state;

//     return (
//       <UserDashboard
//         viewBookings={viewBookings}
//         selectedDate={selectedDate}
//         startTime={startTime}
//         endTime={endTime}
//         completedBookings={completedBookings}
//         showCompleted={showCompleted}
//         onViewBookingsChange={(value) => this.setState({ viewBookings: value })}
//         onDateChange={(date) => this.setState({ selectedDate: date })}
//         onStartTimeChange={(time) => this.setState({ startTime: time })}
//         onEndTimeChange={(time) => this.setState({ endTime: time })}
//         onShowCompletedChange={(value) => this.setState({ showCompleted: value })}
//         onSignOut={this.handleSignOut}
//         onFetchCompletedBookings={this.fetchCompletedBookings}
//         onFetchAvailableRooms={this.fetchAvailableRooms}
//       />
//     );
//   }
// }

// // ✅ Functional Wrapper to inject `navigate`
// function UserDashboardContainerWrapper(props) {
//   const navigate = useNavigate();
//   return <UserDashboardContainer {...props} navigate={navigate} />;
// }

// export default UserDashboardContainerWrapper;
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAvailableRooms, fetchAllRooms ,fetchCompletedBookings} from "../../../utils/api";
import UserDashboard from "../component/UserDashboard";

class UserDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBookings: false,
      selectedDate: null,
      startTime: "",
      endTime: "",
      rooms: [],
      completedBookings: [],
      showCompleted: false,
    };
  }

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.navigate("/login"); // Use navigate from props
  };

  fetchCompletedBookings = async () => {
    try {
      const bookings = await fetchCompletedBookings();
      this.setState({ completedBookings: bookings });
    } catch (error) {
      console.error("Error fetching completed bookings:", error);
      alert("Failed to fetch completed bookings. Please try again later.");
    }
  };

  fetchAvailableRooms = async () => {
    const { selectedDate, startTime, endTime } = this.state;
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
      this.props.navigate("/login");
      return;
    } 
    
      

    const formattedStartTime = `${selectedDate.toISOString().split("T")[0]}T${startTime}:00`;
    const formattedEndTime = `${selectedDate.toISOString().split("T")[0]}T${endTime}:00`;

    try {
      // Fetch available room IDs
      const availableRoomIds = await fetchAvailableRooms(formattedStartTime, formattedEndTime);

      // Fetch all rooms to filter the available ones
      const allRooms = await fetchAllRooms();

      // Filter available rooms
      const filteredRooms = allRooms.filter(room =>
        availableRoomIds.includes(room.id)
      );

      // Set the filtered rooms in state
      this.setState({ rooms: filteredRooms });

      // Navigate to the available rooms page with the necessary state
      this.props.navigate("/available-rooms", {
        state: { startTime: formattedStartTime, endTime: formattedEndTime, availableRooms: filteredRooms },
      });
    } catch (error) {
      console.error("Error fetching available rooms", error);
      if (error.message.includes("401")) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        this.props.navigate("/login");
      } else {
        alert("Failed to fetch available rooms. Try again later.");
      }
    }
  };

  render() {
    const {
      viewBookings,
      selectedDate,
      startTime,
      endTime,
      completedBookings,
      showCompleted,
    } = this.state;

    return (
      <UserDashboard
        viewBookings={viewBookings}
        selectedDate={selectedDate}
        startTime={startTime}
        endTime={endTime}
        completedBookings={completedBookings}
        showCompleted={showCompleted}
        onViewBookingsChange={(value) => this.setState({ viewBookings: value })}
        onDateChange={(date) => this.setState({ selectedDate: date })}
        onStartTimeChange={(time) => this.setState({ startTime: time })}
        onEndTimeChange={(time) => this.setState({ endTime: time })}
        onShowCompletedChange={(value) => this.setState({ showCompleted: value })}
        onSignOut={this.handleSignOut}
        onFetchCompletedBookings={this.fetchCompletedBookings}
        onFetchAvailableRooms={this.fetchAvailableRooms}
      />
    );
  }
}

// Wrapper to inject `navigate` into the container class component
function UserDashboardContainerWrapper(props) {
  const navigate = useNavigate();
  return <UserDashboardContainer {...props} navigate={navigate} />;
}

export default UserDashboardContainerWrapper;
