
// import { PRIVATE_ROUTES } from "../../../navigation/routes";
// import { Routes, Route } from "react-router-dom";
// import { Suspense } from "react";

// const PrivateComponent = () => {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//                 {PRIVATE_ROUTES.map((route, index) => {
//                     if (!route.path || !route.component) return null; // Prevent errors
//                     const Component = route.component;
//                     return <Route key={index} path={route.path} element={<Component />} />;
//                 })}
//             </Routes>
//         </Suspense>
//     );
// };

// export default PrivateComponent;
