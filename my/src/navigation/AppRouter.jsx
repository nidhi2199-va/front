import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { PUBLIC_ROUTES, PRIVATE_ROUTES, DEFAULT_ROUTE, ROUTE_COMPONENTS } from "../shared/constant";
import { Toaster } from "react-hot-toast"

const AppRouter = () => {
    return (
        <Router>
            <Toaster />
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