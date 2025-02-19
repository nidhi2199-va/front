// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import LoginPage from "../screens/loginPage";
// // // import Signup from "../screens/signupPage";
// // // //import UserDashboard from "../screens/userDashboard/container"; // ✅ Import UserDashboard
// // // import PublicLayout from "../layouts/PublicLayouts";
// // // import PrivateLayout from "../layouts/PrivateLayouts";
// // // //import UserDashboardContainer from "../screens/userDashboard/container";

// // // const AppRouter = () => {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Public Routes */}
// // //         <Route element={<PublicLayout />}>
// // //           <Route path="/login" element={<LoginPage />} />
// // //           <Route path="/signup" element={<Signup />} />
       
// // //         {/* Default Route (Redirect to Login) */}
// // //         <Route path="*" element={<LoginPage />} />
// // //         </Route>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // // export default AppRouter;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LoginPage from "../screens/loginPage";
// // import Signup from "../screens/signupPage";
// // //import UserDashboardContainer from "../screens/userDashboard/container"; // Import UserDashboardContainer
// // import PublicLayout from "../layouts/PublicLayouts";
// // import PrivateLayout from "../layouts/PrivateLayouts";
// // import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE } from "../constants/constant"; // Import constants

// // const AppRouter = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route element={<PublicLayout />}>
// //           {PUBLIC_ROUTES.map((route, index) => (
// //             <Route key={index} path={route.path} element={route.element} />
// //           ))}
// //         </Route>

// //         {/* Private Routes */}
// //         <Route element={<PrivateLayout />}>
// //           {PRIVATE_ROUTES.map((route, index) => (
// //             <Route key={index} path={route.path} element={route.element} />
// //           ))}
// //         </Route>

// //         {/* Default Route (Redirect to Login) */}
// //         <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import PublicLayout from "../layouts/PublicLayouts";
// // import PrivateLayout from "../layouts/PrivateLayouts";
// // import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE } from "../constants/constant";

// // const AppRouter = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route element={<PublicLayout />}>
// //           {PUBLIC_ROUTES.map((route, index) => (
// //             <Route key={index} path={route.path} element={route.element} />
// //           ))}
// //         </Route>

// //         {/* Private Routes */}
// //         <Route element={<PrivateLayout />}>
// //           {PRIVATE_ROUTES.map((route, index) => (
// //             <Route key={index} path={route.path} element={route.element} />
// //           ))}
// //         </Route>

// //         {/* Default Route */}
// //         <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute
// // import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE } from "../constants/constant";

// // const AppRouter = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Routes */}
// //         {PUBLIC_ROUTES.map((route, index) => (
// //           <Route key={index} path={route.path} element={route.element} />
// //         ))}

// //         {/* Private Routes */}
// //         <Route element={<PrivateRoute />}>
// //           {PRIVATE_ROUTES.map((route, index) => (
// //             <Route key={index} path={route.path} element={route.element} />
// //           ))}
// //         </Route>

// //         {/* Default Route */}
// //         <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE } from "../constants/constant";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         {PUBLIC_ROUTES.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}

//         {/* Private Routes */}
//         <Route element={<PrivateRoute />}>
//           {PRIVATE_ROUTES.map((route, index) => (
//             <Route key={index} path={route.path} element={route.element} />
//           ))}
//         </Route>

//         {/* Default Route */}
//         <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
// import React, { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE } from "../constants/constant";



// const AppRouter = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {/* Public Routes */}
//           {PUBLIC_ROUTES.map((route, index) => {
            
//             return <Route key={index} path={route.path} element={<LazyComponent />} />;
//           })}

//           {/* Private Routes */}
//           <Route element={<PrivateRoute />}>
//             {PRIVATE_ROUTES.map((route, index) => {
              
//               return <Route key={index} path={route.path} element={<LazyComponent />} />;
//             })}
//           </Route>

//           {/* Default Route */}
//           <Route path={DEFAULT_ROUTE.path} element={<DefaultPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default AppRouter;
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE, ROUTE_COMPONENTS } from "../utils/constants/constant";

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          {PUBLIC_ROUTES.map((route, index) => {
            const Component = ROUTE_COMPONENTS[route.component];
            return <Route key={index} path={route.path} element={<Component />} />;
          })}

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            {PRIVATE_ROUTES.map((route, index) => {
              const Component = ROUTE_COMPONENTS[route.component];
              return <Route key={index} path={route.path} element={<Component />} />;
            })}
          </Route>

          {/* Default Route */}
          <Route path={DEFAULT_ROUTE.path} element={DEFAULT_ROUTE.element} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
