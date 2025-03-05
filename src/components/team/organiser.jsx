import React from "react";
import { coreTeam } from "../../data/team.js";

const Organiser = ({ organiser }) => {
    return (
        <div className="w-60 h-64 p-6 m-8 rounded-lg bg-gray-300 transform transition-all duration-700 hover:scale-110">
            <div className="w-full h-full rounded-full overflow-hidden transform transition-all duration-700 hover:-translate-y-16 absolute inset-0 bg-gradient-to-b from-orange-500via-white to-green-500 opacity-70 group-hover-opacity-100 group-hover:brightness-125 transition-all duration-300">
                <img
                    src={organiser.Photo}
                    alt={organiser.Name}
                    className="w-full h-full object-cover rounded-full transition-all duration-700 hover:rounded-lg"
                />
            </div>
            <div className=""></div>
            <div className="text-center opacity-0 transform -translate-y-16 transition-all duration-700 hover:opacity-100">
                <h3 className="text-lg font-bold text-black mt-3">{organiser.Name}</h3>
                <p className="text-sm text-black">{organiser.Committee}</p>
            </div>
        </div>
    );      
};

export default Organiser;
