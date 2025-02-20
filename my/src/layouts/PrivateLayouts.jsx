import React from "react";
import { Outlet } from "react-router-dom";
import PublicLayout from "./PublicLayouts";
const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Outlet /> {/* This will render the public pages */}
    </div>
  );
};

export default PrivateLayout;