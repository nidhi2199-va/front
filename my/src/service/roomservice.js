const BASE_URL = "http://localhost:8080/meeting-rooms";

export const fetchAvailableRooms = async (date, startTime, endTime) => {
  try {
    if (!date || !startTime || !endTime) {
      throw new Error("Invalid date or time selection.");
    }

    const formattedStartTime = `${date}T${startTime}:00`;
    const formattedEndTime = `${date}T${endTime}:00`;

    const response = await fetch(
      `${BASE_URL}/availability?startTime=${formattedStartTime}&endTime=${formattedEndTime}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch available rooms.");
    }

    const data = await response.json();
    return data.availableRoomIds;
  } catch (error) {
    throw new Error(error.message);
  }
};
