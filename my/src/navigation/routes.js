
// // import React, { Suspense } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import PrivateRoute from "./PrivateRoute";
// // import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE, ROUTE_COMPONENTS } from "../shared/utils/constants/constant";

// // const AppRouter = () => {
// //   return (
// //     <Router>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           {/* Public Routes */}
// //           {PUBLIC_ROUTES.map((route, index) => {
// //             const Component = ROUTE_COMPONENTS[route.component];
// //             return <Route key={index} path={route.path} element={<Component />} />;
// //           })}

// //           {/* Private Routes */}
// //           <Route element={<PrivateRoute />}>
// //             {PRIVATE_ROUTES.map((route, index) => {
// //               const Component = ROUTE_COMPONENTS[route.component];
// //               return <Route key={index} path={route.path} element={<Component />} />;
// //             })}
// //           </Route>

// //           {/* Default Route */}
// //           <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
// //         </Routes>
// //       </Suspense>
// //     </Router>
// //   );
// // };

// // export default AppRouter;

// // import { Navigate } from 'react-router-dom';
// // import React, { lazy } from 'react';
// // import UserDashboardContainerWrapper from '../screens/userDashBoard/container/UserDashboardContainer';
// // import LoginContainer from '../screens/loginPage';
// // import SignupContainer from '../screens/signupPage';
// // // Lazy load components
// // const LoginPage = lazy(() => import("../screens/loginPage"));
// // const Signup = lazy(() => import("../screens/signupPage"));
// // const UserDashboardContainer = lazy(() =>
// //   import("../screens/userDashBoard/container/UserDashboardContainer")
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

// // // Public Routes
// // export const PUBLIC_ROUTES = [
// //   { path: "/login", component: LoginPage },
// //   { path: "/signup", component: Signup },
// // ];

// // // Private Routes
// // export const PRIVATE_ROUTES = [
// //   { path: "/dashboard", component: UserDashboardContainer },
// //   { path: "/available-rooms", component: AvailableRoomsContainer},
// //   { path: "/booked-booking", component: BookedBookingContainer },
// //   { path: "/admindashboard", component: AdminDashboard },
// // ];
// // import { lazy } from "react";

// // // Lazy load components
// // const LoginContainer = lazy(() => import("../screens/loginPage"));
// // const SignupContainer = lazy(() => import("../screens/signupPage"));
// // const UserDashboardContainer = lazy(() =>
// //   import("../screens/userDashBoard/container/UserDashboardContainer")
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

// // // Public Routes
// // export const PUBLIC_ROUTES = [
// //   { path: "/login", component: LoginContainer },
// //   { path: "/signup", component: SignupContainer },
// // ];

// // // Private Routes
// // export const PRIVATE_ROUTES = [
// //   { path: "/dashboard", component: UserDashboardContainer },
// //   { path: "/available-rooms", component: AvailableRoomsContainer },
// //   { path: "/booked-booking", component: BookedBookingContainer },
// //   { path: "/admindashboard", component: AdminDashboard },
// // ];
// import { lazy } from "react-router-dom";

// // Lazy load components
// const LoginPage = lazy(() => import("../screens/loginPage"));
// const Signup = lazy(() => import("../screens/signupPage"));
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

// // Public Routes
// export const PUBLIC_ROUTES = [
//   { path: "/login", component: LoginPage },
//   { path: "/signup", component: Signup },
// ];

// // Private Routes
// export const PRIVATE_ROUTES = [
//   { path: "/dashboard", component: UserDashboardContainer },
//   { path: "/available-rooms", component: AvailableRoomsContainer },
//   { path: "/booked-booking", component: BookedBookingContainer },
//   { path: "/admindashboard", component: AdminDashboard },
// ];
