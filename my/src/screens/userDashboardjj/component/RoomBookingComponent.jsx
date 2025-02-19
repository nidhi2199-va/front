// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FaCalendarAlt, FaClock } from "react-icons/fa";

// const BookingForm = ({ selectedDate, startTime, endTime, onDateChange, onStartTimeChange, onEndTimeChange, onFindRooms }) => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <FaCalendarAlt className="text-2xl text-blue-500" />
//             <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//           </div>
//           <DatePicker selected={selectedDate} onChange={onDateChange} dateFormat="yyyy-MM-dd" minDate={new Date()} className="w-full p-3 border border-gray-300 rounded-lg" />
//         </div>
//         <div className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <FaClock className="text-2xl text-blue-500" />
//             <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//           </div>
//           <input type="time" value={startTime} onChange={(e) => onStartTimeChange(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg" />
//           <input type="time" value={endTime} onChange={(e) => onEndTimeChange(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg" />
//         </div>
//       </div>
//       <div className="mt-8 flex justify-center">
//         <button onClick={onFindRooms} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Find Available Rooms</button>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
// import React, { Component } from "react";

// class BookingForm extends Component {
//   constructor(props) {
//     super(props);

//     // Initialize state if needed
//     this.state = {
//       // You can add local state here if required
//     };

//     // Bind event handlers to `this`
//     this.handleDateChange = this.handleDateChange.bind(this);
//     this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
//     this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
//   }

//   // Handler for date change
//   handleDateChange(e) {
//     const newDate = e.target.value;
//     this.props.onFetchAvailableRooms(newDate, this.props.startTime, this.props.endTime);
//   }

//   // Handler for start time change
//   handleStartTimeChange(e) {
//     const newStartTime = e.target.value;
//     this.props.onFetchAvailableRooms(this.props.selectedDate, newStartTime, this.props.endTime);
//   }

//   // Handler for end time change
//   handleEndTimeChange(e) {
//     const newEndTime = e.target.value;
//     this.props.onFetchAvailableRooms(this.props.selectedDate, this.props.startTime, newEndTime);
//   }

//   render() {
//     // Destructure props for easier access
//     const { selectedDate, startTime, endTime } = this.props;

//     // Ensure default values are empty strings if null or undefined
//     const safeSelectedDate = selectedDate || "";
//     const safeStartTime = startTime || "";
//     const safeEndTime = endTime || "";

//     return (
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Date Picker */}
//           <div className="space-y-6">
//             <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//             <input
//               type="date"
//               value={safeSelectedDate}
//               onChange={this.handleDateChange}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           {/* Time Slot Picker */}
//           <div className="space-y-6">
//             <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//             <input
//               type="time"
//               value={safeStartTime}
//               onChange={this.handleStartTimeChange}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//             <input
//               type="time"
//               value={safeEndTime}
//               onChange={this.handleEndTimeChange}
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default BookingForm;
// import React from "react";
// import DatePicker from "react-datepicker";
// import { FaCalendarAlt, FaClock } from "react-icons/fa";

// const BookingForm = ({ fetchAvailableRooms }) => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <FaCalendarAlt className="text-2xl text-blue-500" />
//             <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
//           </div>
//           <DatePicker className="w-full p-3 border border-gray-300 rounded-lg" placeholderText="Choose a date" />
//         </div>
//         <div className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <FaClock className="text-2xl text-blue-500" />
//             <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
//           </div>
//           <div className="space-y-4">
//             <input type="time" className="w-full p-3 border border-gray-300 rounded-lg" />
//             <input type="time" className="w-full p-3 border border-gray-300 rounded-lg" />
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 flex justify-center">
//         <button onClick={fetchAvailableRooms} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
//           Find Available Rooms
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
import React from "react";

const RoomBookingComponent = ({ selectedDate, startTime, endTime, onDateChange, onStartTimeChange, onEndTimeChange }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book a Room</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date Picker */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Select Date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={onDateChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Time Slot Picker */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Select Time Slot</h2>
          <input
            type="time"
            value={startTime}
            onChange={onStartTimeChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="time"
            value={endTime}
            onChange={onEndTimeChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomBookingComponent;