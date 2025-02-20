
import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/images/m11.jpg";

const LandingPageComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Navbar */}
            <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                <h1 className="text-2xl font-bold">MeetEase</h1>
                <div>
                    <button
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-4"
                    
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Main Content */}
            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4 mt-[-500px]">
                    Welcome to MeetEase
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mt-4"> {/* Added mt-4 here */}
    <h3 className="text-2xl font-semibold text-gray-700 mb-2 mt-4">
      MeetEase – Where your next great meeting begins!!
    </h3>
    
    MeetEase is a seamless meeting room booking platform that simplifies scheduling, avoids conflicts, and ensures hassle-free room reservations.
  </p>
</main>
        </div>
    );
};

export default LandingPageComponent;
