import axios from "axios";

const API_URL = "http://localhost:8080/user/login"; // Adjust to your backend URL

export const login = async (loginData) => {
  try {
    const response = await axios.post(API_URL, loginData);
    return {
      success: true,
      token: response.data.token,
      role: parseJwt(response.data.token).role, // Extract role from token
      email: parseJwt(response.data.token).sub, // Extract email from token
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

// Helper function to decode JWT
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
  } catch (error) {
    return {};
  }
};
