import React, { useState } from "react";
import { RoomBookingComponent } from "../components";

const RoomBookingContainer = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleStartTimeChange = (e) => setStartTime(e.target.value);
  const handleEndTimeChange = (e) => setEndTime(e.target.value);

  return (
    <RoomBookingComponent
      selectedDate={selectedDate}
      startTime={startTime}
      endTime={endTime}
      onDateChange={handleDateChange}
      onStartTimeChange={handleStartTimeChange}
      onEndTimeChange={handleEndTimeChange}
    />
  );
};

export default RoomBookingContainer;