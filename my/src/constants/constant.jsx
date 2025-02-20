// // // // // constants.js

// // // // import LoginPage from "../screens/loginPage";

// // // // import Signup from "../screens/signupPage";
// // // // export const PUBLIC_ROUTES = [
// // // //     {
// // // //       path: "/login",
// // // //       element: <LoginPage />,
// // // //     },
// // // //     {
// // // //       path: "/signup",
// // // //       element: <Signup />,
// // // //     },
// // // //   ];
  
// // // //   export const PRIVATE_ROUTES = [
// // // //     // {
// // // //     //   path: "/dashboard",
// // // //     //   element: <UserDashboardContainer />,
// // // //     // },
// // // //     // Add more private routes here
// // // //   ];
  
// // // //   export const DEFAULT_ROUTE = {
// // // //     path: "*",
// // // //     element: <LoginPage />,
// // // //   };
// // // import LoginPage from "../screens/loginPage";
// // // import Signup from "../screens/signupPage";
// // // import UserDashboardContainer from "../screens/userDashboard/container"; // Import container

// // // export const PUBLIC_ROUTES = [
// // //   {
// // //     path: "/login",
// // //     element: <LoginPage />,
// // //   },
// // //   {
// // //     path: "/signup",
// // //     element: <Signup />,
// // //   },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   {
// // //     path: "/dashboard/*",
// // //     element: <UserDashboardContainer />,
// // //   },
// // // ];

// // // export const DEFAULT_ROUTE = {
// // //   path: "*",
// // //   element: <LoginPage />,
// // // };
// // // import LoginPage from "../screens/loginPage";
// // // import Signup from "../screens/signupPage";
// // // import UserDashboardContainer from "../screens/userDashboard/container/UserDashboardContainer";

// // // export const PUBLIC_ROUTES = [
// // //   { path: "/login", element: <LoginPage /> },
// // //   { path: "/signup", element: <Signup /> },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   { path: "/dashboard", element: <UserDashboardContainer /> },
// // // ];

// // // export const DEFAULT_ROUTE = { path: "*", element: <Navigate to="/login" /> };
// // // import React from "react";
// // // import { Navigate } from "react-router-dom"; // ✅ Import Navigate
// // // import LoginPage from "../screens/loginPage";
// // // import Signup from "../screens/signupPage";
// // // import UserDashboardContainer from "../screens/userDashboard/container/UserDashboardContainer";

// // // export const PUBLIC_ROUTES = [
// // //   {
// // //     path: "/login",
// // //     element: <LoginPage />,
// // //   },
// // //   {
// // //     path: "/signup",
// // //     element: <Signup />,
// // //   },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   { path: "/dashboard", element: <UserDashboardContainer /> },
// // // ];



// // // export const DEFAULT_ROUTE = {
// // //   path: "*",
// // //   element: <Navigate to="/login" />, // ✅ Redirect unknown routes
// // // };
// // // import React from "react";
// // // import { Navigate } from "react-router-dom";
// // // import LoginPage from "../screens/loginPage";
// // // import Signup from "../screens/signupPage";
// // // import UserDashboardContainer from "../screens/userDashboard/container/UserDashboardContainer";
// // // import AvailableRoomsContainer from "../screens/availableRoom/container/AvailableRoomsContainer"
// // // import BookedBookingContainer from "../screens/bookedRoom/container/BookedBookingContainer";
// // // import AdminDashboard from "../screens/adminDashboard/container/AdminDashboard";

// // // export const PUBLIC_ROUTES = [
// // //   {
// // //     path: "/login",
// // //     element: <LoginPage />,
// // //   },
// // //   {
// // //     path: "/signup",
// // //     element: <Signup />,
// // //   },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   { path: "/dashboard", element: <UserDashboardContainer /> },
// // //   { path: "/available-rooms", element: <AvailableRoomsContainer /> }, // Add Available Rooms route
// // //   {path: "/booked-booking",element: <BookedBookingContainer/>},
// // //   {path: "/admindashboard",element:<AdminDashboard/>}

// // // ];
// // // export const DEFAULT_ROUTE = {
// // //   path: "*",
// // //   element: <Navigate to="/login" replace />,
// // // };
// // // import React, { lazy, Suspense } from "react";
// // // import { Navigate } from "react-router-dom";

// // // // Lazy load components
// // // const LoginPage = lazy(() => import("../screens/loginPage"));
// // // const Signup = lazy(() => import("../screens/signupPage"));
// // // const UserDashboardContainer = lazy(() =>
// // //   import("../screens/userDashboard/container/UserDashboardContainer")
// // // );
// // // const AvailableRoomsContainer = lazy(() =>
// // //   import("../screens/availableRoom/container/AvailableRoomsContainer")
// // // );
// // // const BookedBookingContainer = lazy(() =>
// // //   import("../screens/bookedRoom/container/BookedBookingContainer")
// // // );
// // // const AdminDashboard = lazy(() =>
// // //   import("../screens/adminDashboard/container/AdminDashboard")
// // // );

// // // // Loading fallback
// // // //const Loading = () => <div>Loading...</div>;

// // // export const PUBLIC_ROUTES = [
// // //   { path: "/login", element: <LoginPage /> },
// // //   { path: "/signup", element: <Signup /> },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   { path: "/dashboard", element: <UserDashboardContainer /> },
// // //   { path: "/available-rooms", element: <AvailableRoomsContainer /> },
// // //   { path: "/booked-booking", element: <BookedBookingContainer /> },
// // //   { path: "/admindashboard", element: <AdminDashboard /> },
// // // ];

// // // export const DEFAULT_ROUTE = {
// // //   path: "*",
// // //   element: <Navigate to="/login" replace />,
// // // };
// // // import React, { lazy } from "react";

// // // // Lazy load components directly here
// // // export const PUBLIC_ROUTES = [
// // //   { path: "/login", component: "loginPage" },
// // //   { path: "/signup", component: "signupPage" },
// // // ];

// // // export const PRIVATE_ROUTES = [
// // //   { path: "/dashboard", component: "userDashboard/container/UserDashboardContainer" },
// // //   { path: "/available-rooms", component: "availableRoom/container/AvailableRoomsContainer" },
// // //   { path: "/booked-booking", component: "bookedRoom/container/BookedBookingContainer" },
// // //   { path: "/admindashboard", component: "adminDashboard/container/AdminDashboard" },
// // // ];

// // // export const DEFAULT_ROUTE = {
// // //   path: "*",
// // //   element: <Navigate to="/login" replace />,
// // // };
// // import { Navigate } from 'react-router-dom';

// // import React, { lazy } from 'react';

// // // Lazy load components
// // const LoginPage = lazy(() => import("../screens/loginPage"));
// // const Signup = lazy(() => import("../screens/signupPage"));
// // const UserDashboardContainer = lazy(() =>
// //   import("../screens/userDashboard/container/UserDashboardContainer")
// // );
// // const AvailableRoomsContainer = lazy(() =>
// //   import("../screens/availableRoom/container/AvailableRoomsContainer")
// // );
// // const BookedBookingContainer = lazy(() =>
// //   import("../screens/bookedRoom/container/BookedBookingContainer")
// // );
// // const AdminDashboard = lazy(() =>
// //   import("../screens/adminDashboard/container/AdminDashboard")
// // );

// // // Map of components to route names
// // export const ROUTE_COMPONENTS = {
// //   login: LoginPage,
// //   signup: Signup,
// //   dashboard: UserDashboardContainer,
// //   "available-rooms": AvailableRoomsContainer,
// //   "booked-booking": BookedBookingContainer,
// //   admindashboard: AdminDashboard,
// // };

// // // Public Routes
// // export const PUBLIC_ROUTES = [
// //   { path: "/login", component: "login" },
// //   { path: "/signup", component: "signup" },
// // ];

// // // Private Routes
// // export const PRIVATE_ROUTES = [
// //   { path: "/dashboard", component: "dashboard" },
// //   { path: "/available-rooms", component: "available-rooms" },
// //   { path: "/booked-booking", component: "booked-booking" },
// //   { path: "/admindashboard", component: "admindashboard" },
// // ];

// // // Default Route
// // export const DEFAULT_ROUTE = {
// //   path: "*",
// //   element: <Navigate to="/login" replace />,
// // };
// import { Navigate } from 'react-router-dom';

// import React, { lazy } from 'react';

// // Lazy load components
// const LoginPage = lazy(() => import("../screens/loginPage"));
// const Signup = lazy(() => import("../screens/signupPage"));
// const LandingPage=lazy(()=> import("../screens/landingPage"));
// const UserDashboardContainer = lazy(() =>
//   import("../screens/userDashBoard/container/UserDashboardContainer")
// );
// const AvailableRoomsContainer = lazy(() =>
//   import("../screens/availableRoom/container/AvailableRoomsContainer")
// );
// const BookedBookingContainer = lazy(() =>
//   import("../screens/bookedRoom/container/BookedBookingContainer")
// );
// const AdminDashboard = lazy(() =>
//   import("../screens/adminDashboard/container/AdminDashboard")
// );

// // Map of components to route names
// export const ROUTE_COMPONENTS = {
//   landing:LandingPage,
//   login: LoginPage,
//   signup: Signup,
//   dashboard: UserDashboardContainer,
//   "available-rooms": AvailableRoomsContainer,
//   "booked-booking": BookedBookingContainer,
//   admindashboard: AdminDashboard,
// };

// // Public Routes
// export const PUBLIC_ROUTES = [
//   {path: "/landing",component: "landingpage"},
//   { path: "/login", component: "login" },
//   { path: "/signup", component: "signup" },
// ];

// // Private Routes
// export const PRIVATE_ROUTES = [
//   { path: "/dashboard", component: "dashboard" },
//   { path: "/available-rooms", component: "available-rooms" },
//   { path: "/booked-booking", component: "booked-booking" },
//   { path: "/admindashboard", component: "admindashboard" },
// ];

// // Default Route
// export const DEFAULT_ROUTE = {
//   path: "*",
//   element: <Navigate to="/login" replace />,
// };

