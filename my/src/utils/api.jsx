// import axios from "axios";

// // Create an Axios instance with a base URL
// const api = axios.create({
//   baseURL: "http://localhost:8080", // Replace with your backend base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     // Add authentication token to headers if available
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = 'Bearer ${token}';
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor
// api.interceptors.response.use(
//   (response) => response.data, // ✅ response is already response.data
//   (error) => {
//     return Promise.reject(error.response?.data?.message || "Something went wrong.");
//   }
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

//     // ✅ No .data because interceptor already modifies the response
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

//     return {
//       success: false,
//       message: error.response || "Login failed",
//     };
//   }
// };

// // ✅ Signup function
// export const signup = async (signupData) => {
//   try {
//     console.log("🔄 Sending signup request with data:", signupData);

//     const response = await api.post("/user/signup", signupData);
//     console.log("✅ Full API Response:", response);

//     // ✅ No .data because interceptor already modifies the response
//     if (!response) {
//       console.error("🚨 Response is missing. Check API response.");
//       throw new Error("Response is missing. Check API response.");
//     }

//     return {
//       success: true,
//       message: "Signup successful! 🎉",
//       data: response,
//     };
//   } catch (error) {
//     console.error("❌ Signup failed error:", error);

//     let errorMessage = "Something went wrong!";

//     if (error.response) {
//       errorMessage = error.response.data?.message || "Signup failed";
//     } else if (error.request) {
//       errorMessage = "No response from server. Please try again later.";
//     } else {
//       errorMessage = error.message;
//     }

//     return {
//       success: false,
//       message: errorMessage,
//     };
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

// Request interceptor
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

// Response interceptor
api.interceptors.response.use(
  (response) => response.data, // ✅ response is already response.data
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
    console.log("🔄 Sending login request with data:", loginData);
    const response = await api.post("/user/login", loginData);
    console.log("✅ Full API Response:", response);

    if (!response || !response.token) {
      console.error("🚨 Response or token is missing. Check API response.");
      throw new Error("Response or token is missing. Check API response.");
    }

    return {
      success: true,
      token: response.token,
      role: parseJwt(response.token).role,
      email: parseJwt(response.token).sub,
    };
  } catch (error) {
    console.error("❌ Login failed error:", error);
    return { success: false, message: error.response || "Login failed" };
  }
};

// ✅ Signup function
export const signup = async (signupData) => {
  try {
    console.log("🔄 Sending signup request with data:", signupData);
    const response = await api.post("/user/signup", signupData);
    console.log("✅ Full API Response:", response);

    if (!response) {
      console.error("🚨 Response is missing. Check API response.");
      throw new Error("Response is missing. Check API response.");
    }

    return { success: true, message: "Signup successful! 🎉", data: response };
  } catch (error) {
    console.error("❌ Signup failed error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Signup failed",
    };
  }
};

//
// 📌 USER DASHBOARD APIs
//

// ✅ Fetch User Booking History
export const fetchUserBookingHistory = async () => {
  try {
    const response = await api.get("/bookings/history/user");
    return response;
  } catch (error) {
    console.error("❌ Error fetching booking history:", error);
    return [];
  }
};

// ✅ Fetch Available Meeting Rooms
export const fetchAvailableRooms = async (selectedDate, startTime, endTime) => {
  try {
    if (!selectedDate || !startTime || !endTime) {
      throw new Error("Date, start time, and end time are required.");
    }

    const formattedStartTime = `${selectedDate.toISOString().split('T')[0]}T${startTime}:00`;
    const formattedEndTime = `${selectedDate.toISOString().split('T')[0]}T${endTime}:00`;

    const response = await api.get("/meeting-rooms/availability", {
      params: { startTime: formattedStartTime, endTime: formattedEndTime },
    });

    return response;
  } catch (error) {
    console.error("❌ Error fetching available rooms:", error);
    return [];
  }
};

// ✅ Fetch All Meeting Rooms
export const fetchAllMeetingRooms = async () => {
  try {
    const response = await api.get("/meeting-rooms/all");
    return response;
  } catch (error) {
    console.error("❌ Error fetching all meeting rooms:", error);
    return [];
  }
};

// ✅ Book a Meeting Room
export const bookMeetingRoom = async (bookingData) => {
  try {
    const response = await api.post("/bookings/book-room", bookingData);
    return response;
  } catch (error) {
    console.error("❌ Booking failed:", error);
    throw new Error(error.response?.data?.message || "Booking failed");
  }
};

// ✅ Sign Out (Just removes token)
export const signOut = () => {
  localStorage.removeItem("token");
};

export default api;
