import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Outlet /> {/* This will render the public pages */}
    </div>
  );
};

export default PublicLayout;