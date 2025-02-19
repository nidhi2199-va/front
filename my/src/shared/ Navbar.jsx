// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg fixed z-40">
//       <h1 className="text-2xl font-bold">MeetEase</h1>
//       <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2" onClick={handleSignOut}>
//         <FaSignOutAlt />
//         <span>Sign Out</span>
//       </button>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">MeetEase</h1>
      <button
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;