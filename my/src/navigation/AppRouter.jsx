import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../screens/loginPage";
import Signup from "../screens/signupPage";
import UserDashboard from "../screens/userDashboard"; // ✅ Import UserDashboard
import PublicLayout from "../layouts/PublicLayouts";
import PrivateLayout from "../layouts/PrivateLayouts";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Private Routes (Protected) */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
