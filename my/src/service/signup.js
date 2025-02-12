import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/signup`, userData
    );

    return { success: true, message: "Signup successful! 🎉", data: response.data };
  } catch (error) {
    let errorMessage = "Something went wrong!";

    if (error.response) {
      errorMessage = error.response.data.message || "Signup failed";
    } else if (error.request) {
      errorMessage = "No response from server. Please try again later.";
    } else {
      errorMessage = error.message;
    }

    return { success: false, message: errorMessage };
  }
};
