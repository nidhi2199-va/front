// // src/screens/AvailableRooms/container/AvailableRoomsContainer.jsx
// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { getAvailableRooms, bookRoom } from "../../../util/api";
// import AvailableRoomsComponent from "../component/AvailableRoomsComponent";

// class AvailableRoomsContainer extends Component {
//   constructor(props) {
//     super(props);
//     const { availableRooms: initialRooms, startTime, endTime } = this.props.location.state || {};
//     this.state = {
//       availableRooms: initialRooms || [],
//       searchCapacity: "",
//       startTime: startTime || "",
//       endTime: endTime || "",
//     };
//   }

//   async componentDidMount() {
//     const { startTime, endTime } = this.state;
//     try {
//       const rooms = await getAvailableRooms(startTime, endTime);
//       this.setState({ availableRooms: rooms });
//     } catch (error) {
//       console.error("Error fetching available rooms:", error);
//     }
//   }

//   handleBooking = async (roomId) => {
//     const { startTime, endTime } = this.state;
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         this.props.history.push("/login");
//         return;
//       }

//       await bookRoom(roomId, startTime, endTime, token);

//       this.setState((prevState) => ({
//         availableRooms: prevState.availableRooms.filter((room) => room.id !== roomId),
//       }));

//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room. Please try again.");
//     }
//   };

//   handleSignOut = () => {
//     localStorage.removeItem("token");
//     this.props.history.push("/login");
//   };

//   handleSearchCapacityChange = (e) => {
//     this.setState({ searchCapacity: e.target.value });
//   };

//   getFilteredRooms = () => {
//     const { availableRooms, searchCapacity } = this.state;
//     return availableRooms.filter((room) =>
//       searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
//     );
//   };

//   render() {
//     return (
//       <AvailableRoomsComponent
//         availableRooms={this.getFilteredRooms()}
//         handleBooking={this.handleBooking}
//         handleSignOut={this.handleSignOut}
//         handleSearchCapacityChange={this.handleSearchCapacityChange}
//         {...this.state}
//       />
//     );
//   }
// }

// export default withRouter(AvailableRoomsContainer);
// import React, { Component } from "react";
// import { useNavigate, useLocation } from "react-router-dom"; // React Router v6 hooks
// import { getAvailableRooms, bookRoom } from "../../../utils/api";
// import AvailableRoomsComponent from "../component/AvailableRoomsComponent";

// // Wrapper component to provide hooks in class components
// class AvailableRoomsContainerWrapper extends Component {
//   render() {
//     return <AvailableRoomsContainer {...this.props} />;
//   }
// }

// class AvailableRoomsContainer extends Component {
//   constructor(props) {
//     super(props);
//     const { availableRooms: initialRooms, startTime, endTime } = this.props.location.state || {};
//     this.state = {
//       availableRooms: initialRooms || [],
//       searchCapacity: "",
//       startTime: startTime || "",
//       endTime: endTime || "",
//     };
//   }

//   // Use navigate hook from React Router v6
//   handleSignOut = () => {
//     localStorage.removeItem("token");
//     this.props.navigate("/login");
//   };

//   async componentDidMount() {
//     const { startTime, endTime } = this.state;
//     try {
//       const rooms = await getAvailableRooms(startTime, endTime);
//       this.setState({ availableRooms: rooms });
//     } catch (error) {
//       console.error("Error fetching available rooms:", error);
//     }
//   }

//   handleBooking = async (roomId) => {
//     const { startTime, endTime } = this.state;
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         this.props.navigate("/login");
//         return;
//       }

//       await bookRoom(roomId, startTime, endTime, token);

//       this.setState((prevState) => ({
//         availableRooms: prevState.availableRooms.filter((room) => room.id !== roomId),
//       }));

//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room. Please try again.");
//     }
//   };

//   handleSearchCapacityChange = (e) => {
//     this.setState({ searchCapacity: e.target.value });
//   };

//   getFilteredRooms = () => {
//     const { availableRooms, searchCapacity } = this.state;
//     return availableRooms.filter((room) =>
//       searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
//     );
//   };

//   render() {
//     return (
//       <AvailableRoomsComponent
//         availableRooms={this.getFilteredRooms()}
//         handleBooking={this.handleBooking}
//         handleSignOut={this.handleSignOut}
//         handleSearchCapacityChange={this.handleSearchCapacityChange}
//         {...this.state}
//       />
//     );
//   }
// }

// // Use this component wrapped to pass location and navigate props
// const AvailableRoomsContainerWithRouter = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <AvailableRoomsContainerWrapper
//       {...props}
//       navigate={navigate}
//       location={location}
//     />
//   );
// };

// export default AvailableRoomsContainerWithRouter;
// import React, { Component } from "react";
// import { useNavigate, useLocation } from "react-router-dom"; // import hooks

// import { fetchAvailableRooms, bookRoom } from "../../../utils/api";
// import AvailableRoomsComponent from "../component/AvailableRoomsComponent";

// // Create a wrapper functional component to use hooks
// const AvailableRoomsContainerWrapper = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   return <AvailableRoomsContainer navigate={navigate} location={location} />;
// };

// // Main class component
// class AvailableRoomsContainer extends Component {
//   constructor(props) {
//     super(props);
//     const { availableRooms: initialRooms, startTime, endTime } = this.props.location.state || {};
//     this.state = {
//       availableRooms: initialRooms || [],
//       searchCapacity: "",
//       startTime: startTime || "",
//       endTime: endTime || "",
//     };
//   }

//   async componentDidMount() {
//     const { startTime, endTime } = this.state;
//     try {
//       const rooms = await fetchAvailableRooms(startTime, endTime);
//       this.setState({ availableRooms: rooms });
//     } catch (error) {
//       console.error("Error fetching available rooms:", error);
//     }
//   }

//   handleBooking = async (roomId) => {
//     const { startTime, endTime } = this.state;
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized: Please login first.");
//         this.props.navigate("/login"); // Use navigate
//         return;
//       }

//       await bookRoom(roomId, startTime, endTime, token);

//       this.setState((prevState) => ({
//         availableRooms: prevState.availableRooms.filter((room) => room.id !== roomId),
//       }));

//       alert("Room booked successfully!");
//     } catch (error) {
//       console.error("Error booking room:", error);
//       alert("Failed to book room. Please try again.");
//     }
//   };

//   handleSignOut = () => {
//     localStorage.removeItem("token");
//     this.props.navigate("/login"); // Use navigate
//   };

//   handleSearchCapacityChange = (e) => {
//     this.setState({ searchCapacity: e.target.value });
//   };

//   getFilteredRooms = () => {
//     const { availableRooms, searchCapacity } = this.state;
//     return availableRooms.filter((room) =>
//       searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
//     );
//   };

//   render() {
//     return (
//       <AvailableRoomsComponent
//         availableRooms={this.getFilteredRooms()}
//         handleBooking={this.handleBooking}
//         handleSignOut={this.handleSignOut}
//         handleSearchCapacityChange={this.handleSearchCapacityChange}
//         {...this.state}
//       />
//     );
//   }
// }

// // At the bottom of AvailableRoomsContainer.jsx
// export default AvailableRoomsContainerWrapper;

// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AvailableRoomsComponent from "../component/AvailableRoomsComponent";

// const AvailableRoomsContainer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [availableRooms, setAvailableRooms] = useState([]);
//   const { startTime, endTime, availableRooms: initialRooms } = location.state || {};

//   useEffect(() => {
//     if (!initialRooms) {
//       navigate("/dashboard"); // Redirect if no data is passed
//     } else {
//       setAvailableRooms(initialRooms);
//     }
//   }, [initialRooms, navigate]);

//   return (
//     <AvailableRoomsComponent
//       startTime={startTime}
//       availableRooms={availableRooms}
//     />
//   );
// };

// export default AvailableRoomsContainer;
// import React, { Component } from "react";
// import { useNavigate, useLocation } from "react-router-dom"; // Hooks from React Router v6
// import AvailableRoomsComponent from "../component/AvailableRoomsComponent";

// // Create a functional wrapper for the class component
// class AvailableRoomsContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       availableRooms: [],
//     };
//   }

//   componentDidMount() {
//     const { availableRooms: initialRooms } = this.props.location.state || {};

//     if (!initialRooms) {
//       this.props.navigate("/dashboard"); // Redirect if no data is passed
//     } else {
//       this.setState({ availableRooms: initialRooms });
//     }
//   }

//   render() {
//     const { location } = this.props;
//     const { startTime } = location.state || {};
//     const { availableRooms } = this.state;

//     return (
//       <AvailableRoomsComponent
//         startTime={startTime}
//         availableRooms={availableRooms}
//       />
//     );
//   }
// }

// // Convert the component to a functional one to use hooks
// const AvailableRoomsContainerWrapper = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <AvailableRoomsContainer
//       location={location}
//       navigate={navigate}
//     />
//   );
// };

// export default AvailableRoomsContainerWrapper;
import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Hooks from React Router v6
import AvailableRoomsComponent from "../component/AvailableRoomsComponent";
import { bookRoom } from "../../../shared/utils/api"; // Import the bookRoom function
import {toast} from "react-hot-toast"
class AvailableRoomsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableRooms: [],
      searchCapacity: "",
    };
  }

  componentDidMount() {
    const { availableRooms: initialRooms } = this.props.location.state || {};

    if (!initialRooms) {
      this.props.navigate("/dashboard"); // Redirect if no data is passed
    } else {
      this.setState({ availableRooms: initialRooms });
    }
  }

  handleBooking = async (roomId) => {
    const { startTime, endTime } = this.props.location.state || {};
    const { navigate } = this.props;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized: Please login first.");
        navigate("/login");
        return;
      }

      await bookRoom(roomId, startTime, endTime, token);

      // Remove booked room from the list
      this.setState((prevState) => ({
        availableRooms: prevState.availableRooms.filter((room) => room.id !== roomId),
      }));

      toast.success("Room booked successfully!");
    } catch (error) {
     
      alert("Failed to book room. Please try again.");
    }
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.navigate("/login");
  };

  handleSearchCapacityChange = (e) => {
    this.setState({ searchCapacity: e.target.value });
  };

  render() {
    const { location } = this.props;
    const { startTime, endTime } = location.state || {};
    const { availableRooms, searchCapacity } = this.state;

    const filteredRooms = availableRooms.filter((room) =>
      searchCapacity ? room.capacity >= parseInt(searchCapacity) : true
    );

    return (
      <AvailableRoomsComponent
        startTime={startTime}
        endTime={endTime}
        availableRooms={filteredRooms}
        searchCapacity={searchCapacity}
        onSearchCapacityChange={this.handleSearchCapacityChange}
        onBookRoom={this.handleBooking}
        onSignOut={this.handleSignOut}
        navigate={this.props.navigate}
      />
    );
  }
}

// Convert the component to a functional one to use hooks
const AvailableRoomsContainerWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AvailableRoomsContainer
      location={location}
      navigate={navigate}
    />
  );
};

export default AvailableRoomsContainerWrapper;