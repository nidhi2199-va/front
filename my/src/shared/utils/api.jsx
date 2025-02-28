

// import axios from "axios";

// // Create an Axios instance with a base URL
// const api = axios.create({
//   baseURL: "http://localhost:8080", // Replace with your backend base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request interceptor to add token to headers
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor to handle data consistently
// api.interceptors.response.use(
//   (response) => response.data, // return response.data directly
//   (error) => Promise.reject(error.response?.data?.message || "Something went wrong.")
// );

// // Helper function to decode JWT
// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//   } catch (error) {
//     return {};
//   }
// };

// // ✅ Login function
// export const login = async (loginData) => {
//   try {
//     console.log("🔄 Sending login request with data:", loginData);
//     const response = await api.post("/user/login", loginData);
//     console.log("✅ Full API Response:", response);

//     if (!response || !response.token) {
//       console.error("🚨 Response or token is missing. Check API response.");
//       throw new Error("Response or token is missing. Check API response.");
//     }

//     return {
//       success: true,
//       token: response.token,
//       role: parseJwt(response.token).role,
//       email: parseJwt(response.token).sub,
//     };
//   } catch (error) {
//     console.error("❌ Login failed error:", error);
//     return { success: false, message: error.response || "Login failed" };
//   }
// };

// // ✅ Signup function
// export const signup = async (signupData) => {
//   try {
//     console.log("🔄 Sending signup request with data:", signupData);
//     const response = await api.post("/user/signup", signupData);
//     console.log("✅ Full API Response:", response);

//     if (!response) {
//       console.error("🚨 Response is missing. Check API response.");
//       throw new Error("Response is missing. Check API response.");
//     }

//     return { success: true, message: "Signup successful! 🎉", data: response };
//   } catch (error) {
//     console.error("❌ Signup failed error:", error);
//     return {
//       success: false,
//       message: error.response?.data?.message || "Signup failed",
//     };
//   }
// };

// // ✅ Fetch completed bookings
// export const fetchCompletedBookings = async () => {
//   try {
//     const response = await api.get("/bookings/history/user");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching completed bookings:", error);
//     throw error;
//   }
// };

// // ✅ Fetch available rooms
// export const fetchAvailableRooms = async (startTime, endTime) => {
//   try {
//     const response = await api.get("/meeting-rooms/availability", {
//       params: { startTime, endTime },
//     });
//     return response.availableRoomIds; // returns an array of available room IDs
//   } catch (error) {
//     throw new Error("Error fetching available rooms: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Fetch all rooms
// export const fetchAllRooms = async () => {
//   try {
//     const response = await api.get("/meeting-rooms/all");
//     return response; // returns the list of all rooms
//   } catch (error) {
//     throw new Error("Error fetching all rooms: " + (error.response?.data || error.message));
//   }
// };
// export const bookRoom = async (roomId, startTime, endTime) => {
//   try {
//     const response = await api.post("/bookings/create", { roomId, startTime, endTime });
//     return response; // returns the booking confirmation
//   } catch (error) {
//     throw new Error("Error booking room: " + (error.response?.data || error.message));
//   }
// };
// // ✅ Complete a booking
// export const updateBooking = async (bookingId, roomId, startTime, endTime) => {
//   try {
//     const response = await api.put(`/bookings/update/${bookingId}`, {
//       roomId,
//       startTime,
//       endTime,
//     });
//     return response; // returns the updated booking data
//   } catch (error) {
//     throw new Error("Error updating booking: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Complete a booking
// export const completeBooking = async (bookingId) => {
//   try {
//     const response = await api.put(`/bookings/complete/${bookingId}`);
//     return response; // returns the completion confirmation
//   } catch (error) {
//     throw new Error("Error completing booking: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Cancel a booking
// export const cancelBooking = async (bookingId) => {
//   try {
//     const response = await api.delete(`/bookings/cancel/${bookingId}`);
//     return response; // returns the cancellation confirmation
//   } catch (error) {
//     throw new Error("Error cancelling booking: " + (error.response?.data || error.message));
//   }
// };

// export default api;
// import axios from "axios";

// // Create an Axios instance with a base URL
// const api = axios.create({
//   baseURL: "http://localhost:8080", // Replace with your backend base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request interceptor to add token to headers
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor to handle data consistently
// api.interceptors.response.use(
//   (response) => response.data, // return response.data directly
//   (error) => Promise.reject(error.response?.data?.message || "Something went wrong.")
// );

// // Helper function to decode JWT
// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//   } catch (error) {
//     return {};
//   }
// };

// // ✅ Login function
// export const login = async (loginData) => {
//   try {
//     console.log("🔄 Sending login request with data:", loginData);
//     const response = await api.post("/user/login", loginData);
//     console.log("✅ Full API Response:", response);

//     if (!response || !response.token) {
//       console.error("🚨 Response or token is missing. Check API response.");
//       throw new Error("Response or token is missing. Check API response.");
//     }

//     return {
//       success: true,
//       token: response.token,
//       role: parseJwt(response.token).role,
//       email: parseJwt(response.token).sub,
//     };
//   } catch (error) {
//     console.error("❌ Login failed error:", error);
//     return { success: false, message: error.response || "Login failed" };
//   }
// };

// // ✅ Signup function
// export const signup = async (signupData) => {
//   try {
//     console.log("🔄 Sending signup request with data:", signupData);
//     const response = await api.post("/user/signup", signupData);
//     console.log("✅ Full API Response:", response);

//     if (!response) {
//       console.error("🚨 Response is missing. Check API response.");
//       throw new Error("Response is missing. Check API response.");
//     }

//     return { success: true, message: "Signup successful! 🎉", data: response };
//   } catch (error) {
//     console.error("❌ Signup failed error:", error);
//     return {
//       success: false,
//       message: error.response?.data?.message || "Signup failed",
//     };
//   }
// };

// // ✅ Fetch completed bookings
// export const fetchCompletedBookings = async () => {
//   try {
//     const response = await api.get("/bookings/history/user");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching completed bookings:", error);
//     throw error;
//   }
// };

// // ✅ Fetch available rooms
// export const fetchAvailableRooms = async (startTime, endTime) => {
//   try {
//     const response = await api.get("/meeting-rooms/availability", {
//       params: { startTime, endTime },
//     });
//     return response.availableRoomIds; // returns an array of available room IDs
//   } catch (error) {
//     throw new Error("Error fetching available rooms: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Fetch all rooms
// export const fetchAllRooms = async () => {
//   try {
//     const response = await api.get("/meeting-rooms/all");
//     return response; // returns the list of all rooms
//   } catch (error) {
//     throw new Error("Error fetching all rooms: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Fetch booked meetings (Add this function)
// export const getBookedMeetings = async () => {
//   try {
//     const response = await api.get("/bookings/history/user"); // Adjust the endpoint as needed
//     return response; // returns the list of booked meetings
//   } catch (error) {
//     throw new Error("Error fetching booked meetings: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Book a room
// export const bookRoom = async (roomId, startTime, endTime) => {
//   try {
//     const response = await api.post("/bookings/create", { roomId, startTime, endTime });
//     return response; // returns the booking confirmation
//   } catch (error) {
//     throw new Error("Error booking room: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Update a booking
// export const updateBooking = async (bookingId, roomId, startTime, endTime) => {
//   try {
//     const response = await api.put(`/bookings/${bookingId}`, {
//       roomId,
//       startTime,
//       endTime,
//     });
//     return response; // returns the updated booking data
//   } catch (error) {
//     throw new Error("Error updating booking: " + (error.response?.data || error.message));
//   }
// };

// // ✅ Complete a booking
// export const completeBooking = async (bookingId) => {
//   try {
//     const response = await api.put(`/bookings/${bookingId}/complete`);
//     return response; // returns the completion confirmation
//   } catch (error) {
//     throw new Error("Error completing booking: " + (error.response?.data || error.message));
//   }
// };
// // ✅ Cancel a booking
// export const cancelBooking = async (bookingId) => {
//   try {
//     const response = await api.put(`/bookings/cancel`,{bookingId});
//     return response; // returns the cancellation confirmation
//   } catch (error) {
//     throw new Error("Error cancelling booking: " + (error.response?.data || error.message));
//   }
 
// export const createRoom = async (roomData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/room`, roomData, getAuthHeader());
//     return response.data; // Return the created room
//   } catch (error) {
//     throw new Error("Failed to create room");
//   }
// };

// // Update a room
// export const updateRoom = async (roomId, updatedRoomData) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/${roomId}`, updatedRoomData, getAuthHeader());
//     return response.data; // Return the updated room
//   } catch (error) {
//     throw new Error("Failed to update room");
//   }
// };

// // Delete a room
// export const deleteRoom = async (roomId) => {
//   try {
//     await axios.delete(`${BASE_URL}`, {
//       headers: getAuthHeader().headers,
//       data: { roomId },
//     });
//   } catch (error) {
//     throw new Error("Failed to delete room");
//   }
// };


// export default api;
import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle data consistently
api.interceptors.response.use(
  (response) => response.data, // return response.data directly
  (error) => Promise.reject(error.response?.data?.message || "Something went wrong.")
);

// Helper function to decode JWT
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
  } catch (error) {
    return {};
  }
};

// ✅ Login function
export const login = async (loginData) => {
  try {
    const response = await api.post("/user/login", loginData);
    if (!response || !response.token) {
      throw new Error("Response or token is missing. Check API response.");
    }
    return {
      success: true,
      token: response.token,
      role: parseJwt(response.token).role,
      email: parseJwt(response.token).sub,
    };
  } catch (error) {
    return { success: false, message: error.response || "Login failed" };
  }
};

// ✅ Signup function
export const signup = async (signupData) => {
  try {
    const response = await api.post("/user/signup", signupData);
    if (!response) {
      throw new Error("Response is missing. Check API response.");
    }
    return { success: true, message: "Signup successful! 🎉", data: response };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Signup failed",
    };
  }
};

// ✅ Fetch completed bookings
export const fetchCompletedBookings = async () => {
  try {
    const response = await api.get("/bookings/history/user");
    return response;
  } catch (error) {
    throw new Error("Error fetching completed bookings: " + error.message);
  }
};

// ✅ Fetch available rooms
export const fetchAvailableRooms = async (startTime, endTime) => {
  try {
    
    const response = await api.get("/meeting-rooms/availability", {
      params: { startTime, endTime },
    });
    return response.availableRoomIds; // returns an array of available room IDs
  } catch (error) {
    throw new Error("Error fetching available rooms: " + error.message);
  }
};

// ✅ Fetch all rooms
export const fetchAllRooms = async () => {
  try {
    const response = await api.get("/meeting-rooms/all");
    return response; // returns the list of all rooms
  } catch (error) {
    throw new Error("Error fetching all rooms: " + error.message);
  }
};

// ✅ Fetch booked meetings (Add this function)
export const getBookedMeetings = async () => {
  try {
    const response = await api.get("/bookings/history/user"); // Adjust the endpoint as needed
    return response; // returns the list of booked meetings
  } catch (error) {
    throw new Error("Error fetching booked meetings: " + error.message);
  }
};

// ✅ Book a room
export const bookRoom = async (roomId, startTime, endTime) => {
  try {
    const response = await api.post("/bookings/create", { roomId, startTime, endTime });
    return response; // returns the booking confirmation
  } catch (error) {
    throw new Error("Error booking room: " + error.message);
  }
};

// ✅ Update a booking
export const updateBooking = async (bookingId, roomId, startTime, endTime) => {
  try {
    const response = await api.put(`/bookings/${bookingId}`, {
      roomId,
      startTime,
      endTime,
    });
    return response; // returns the updated booking data
  } catch (error) {
    throw new Error("Error updating booking: " + error.message);
  }
};

// ✅ Complete a booking
export const completeBooking = async (bookingId) => {
  try {
    const response = await api.put(`/bookings/${bookingId}/complete`);
    return response; // returns the completion confirmation
  } catch (error) {
    throw new Error("Error completing booking: " + error.message);
  }
};

// ✅ Cancel a booking
export const cancelBooking = async (bookingId) => {
  try {
    const response = await api.put(`/bookings/cancel`, { bookingId });
    return response; // returns the cancellation confirmation
  } catch (error) {
    throw new Error("Error cancelling booking: " + error.message);
  }
};

// ✅ Create a room
export const createRoom = async (roomData) => {
  try {
    const response = await api.post("/meeting-rooms/room", roomData); // Correct the endpoint to match room creation
    return response; // Return the created room
  } catch (error) {
    throw new Error("Failed to create room: " + error.message);
  }
};

// ✅ Update a room
export const updateRoom = async (roomId, updatedRoomData) => {
  try {
    const response = await api.put(`/meeting-rooms/${roomId}`, updatedRoomData); // Correct endpoint for updating a room
    return response; // Return the updated room
  } catch (error) {
    throw new Error("Failed to update room: " + error.message);
  }
};

// ✅ Delete a room
export const deleteRoom = async (roomId) => {
  try {
    // Sending roomId in the body of the DELETE request
    const response = await api.delete('http://localhost:8080/meeting-rooms', {
      data: { roomId }, // Axios supports sending data in the body for DELETE requests
    });

    return response.data; // Return response data if successful
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
export const fetchMeetingRooms = async () => {
  try {
    const response = await api.get("/meeting-rooms/all"); // Using axios instance for the API call
    return response; // Return the fetched rooms
  } catch (error) {
    throw new Error("Failed to fetch meeting rooms. Please try again.");
  }
};
export const fetchBookings = async () => {
  try {
    const response = await api.get("/bookings/all-booking"); // Replace with your API endpoint
    return response; // Return the created room
  } catch (error) {
    throw new Error("Failed to fetch meeting rooms. Please try again.");
  }
};

export default api;
