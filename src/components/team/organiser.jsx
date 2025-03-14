import React, { useState } from "react";

const Organiser = ({ organiser }) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`relative w-60 h-64 p-6 m-8 rounded-4xl bg-gray-300 transform transition-all duration-700 
            hover:scale-110 sm:w-40 sm:h-44 md:w-48 md:h-52 group ${isActive && "scale-110"}`} // Adds scale on tap for mobile
            onClick={handleToggle}
        >
            {/* Background Gradient for Card */}
            <div
                className={`absolute inset-0 rounded-4xl bg-gradient-to-b from-[#FF9933] via-white to-[#138808] 
                opacity-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}
            ></div>

            {/* Image Wrapper */}
            <div className={`relative w-full h-full rounded-full overflow-hidden transform transition-all duration-700 
            ${isActive ? "-translate-y-16" : "group-hover:-translate-y-16"}`}>
                <img
                    src={organiser.Photo}
                    alt={organiser.Name}
                    className="w-full h-full object-cover transition-all duration-700"
                />
            </div>

            {/* Text Overlay */}
            <div className={`text-center opacity-0 transform -translate-y-16 transition-all duration-700 
            ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}>
                <h3 className="text-lg font-bold text-black mt-3">{organiser.Name}</h3>
                <p className="text-sm text-black">{organiser.Committee}</p>
            </div>
        </div>
    );
};

export default Organiser;

