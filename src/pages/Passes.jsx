import React from "react";
import { passData } from "../data/passData";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Layout from "../layouts/Layout";

const Passes = () => {
    const startupPasses = passData.slice(4, 7);
    const studentPasses = passData.slice(0, 4);

    return (
        <Layout children={
            <div className="text-white mt-8 text-center px-5 py-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#e16d13] via-white to-[#138808] bg-clip-text text-transparent">
                    Buy E-Summit Pass
                </h1>
                <p className="text-lg mt-2 opacity-80">
                    Grab your entry ticket to PEC's E-Summit happening on 22nd and 23rd March, 2025!
                </p>

                {/* Startup Passes */}
                <h2 className="text-2xl uppercase font-bold bg-gradient-to-r from-[#e16d13] via-white to-[#138808] bg-clip-text text-transparent mt-10">
                    Startup Passes
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {startupPasses.map((pass, i) => (
                        <div
                            key={i}
                            className="relative bg-gradient-to-r from-black to-gray-700 border-t-4 border-[#FCA757] rounded-lg p-6 w-80 text-left shadow-lg hover:scale-105 hover:shadow-orange-600 transition-transform"
                        >
                            {pass.sold && (
                                <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#FCA757] text-black font-bold text-sm px-3 py-1 rounded">
                                    Sold Out
                                </div>
                            )}
                            <h2 className="text-xl font-bold text-[#FFFAE2] text-center my-4">{pass.type}</h2>
                            <ul className="space-y-2">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white">
                                        <CheckCircleIcon /> {item}
                                    </li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-500">
                                        <CancelIcon /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Total Payable</p>
                                    <p className="text-lg font-semibold text-white">{pass.cost}</p>
                                </div>
                                <Link to={!pass.sold ? `/pass/${pass.link}` : "#"}>
                                    {!pass.sold ? (
                                        <button className="px-4 py-2 font-bold bg-white text-black rounded hover:bg-[#138808] hover:text-white transition">
                                            Buy Now
                                        </button>
                                    ) : (
                                        <button className="px-4 py-2 font-bold bg-gray-500 text-black rounded cursor-not-allowed">
                                            Unavailable
                                        </button>
                                    )}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Student Passes */}
                <h2 className="text-2xl uppercase font-bold bg-gradient-to-r from-[#e16d13] via-white to-[#138808] bg-clip-text text-transparent mt-10">
                    Student Passes
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {studentPasses.map((pass, i) => (
                        <div
                            key={i}
                            className="relative bg-gradient-to-r from-black to-gray-700 border-t-4 border-[#FCA757] rounded-lg p-6 w-80 text-left shadow-lg hover:scale-105 hover:shadow-orange-600 transition-transform"
                        >
                            {pass.sold && (
                                <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#FCA757] text-black font-bold text-sm px-3 py-1 rounded">
                                    Sold Out
                                </div>
                            )}
                            <h2 className="text-xl font-bold text-[#FFFAE2] text-center my-4">{pass.type}</h2>
                            <ul className="space-y-2">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white">
                                        <CheckCircleIcon /> {item}
                                    </li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-500">
                                        <CancelIcon /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Total Payable</p>
                                    <p className="text-lg font-semibold text-white">{pass.cost}</p>
                                </div>
                                <Link to={!pass.sold ? `/pass/${pass.link}` : "#"}>
                                    {!pass.sold ? (
                                        <button className="px-4 py-2 font-bold bg-white text-black rounded hover:bg-[#138808] hover:text-white transition">
                                            Buy Now
                                        </button>
                                    ) : (
                                        <button className="px-4 py-2 font-bold bg-gray-500 text-black rounded cursor-not-allowed">
                                            Unavailable
                                        </button>
                                    )}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        } />
    );
};

export default Passes;
