import { Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
// Lazy load components
const LoginPage = lazy(() => import("../screens/loginPage"));
const Signup = lazy(() => import("../screens/signupPage"));
const LandingPage = lazy(() => import("../screens/landingPage"));
const UserDashboardContainer = lazy(() =>
  import("../screens/userDashBoard/container/UserDashboardContainer")
);
const AvailableRoomsContainer = lazy(() =>
  import("../screens/availableRoom/container/AvailableRoomsContainer")
);
const BookedBookingContainer = lazy(() =>
  import("../screens/bookedRoom/container/BookedBookingContainer")
);
const AdminDashboard = lazy(() =>
  import("../screens/adminDashboard/container/AdminDashboard")
);
// Map of components to route names
export const ROUTE_COMPONENTS = {
  landing: LandingPage,
  login: LoginPage,
  signup: Signup,
  dashboard: UserDashboardContainer,
  "available-rooms": AvailableRoomsContainer,
  "booked-booking": BookedBookingContainer,
  admindashboard: AdminDashboard,
};

// Public Routes
export const PUBLIC_ROUTES = [
  { path: "/landing", component: "landing" },
  { path: "/login", component: "login" },
  { path: "/signup", component: "signup" },
];

// Private Routes
export const PRIVATE_ROUTES = [
  { path: "/dashboard", component: "dashboard" },
  { path: "/available-rooms", component: "available-rooms" },
  { path: "/booked-booking", component: "booked-booking" },
  { path: "/admindashboard", component: "admindashboard" },
];

// Default Route
export const DEFAULT_ROUTE = {
  path: "*",
  element: <Navigate to="/landing" replace />,
};
