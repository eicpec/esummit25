import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { passData } from "../data/passData";
import Layout from "../layouts/Layout";

const Passes = () => {
    const startupPasses = passData.slice(4, 7);
    const studentPasses = passData.slice(0, 4);

    return (
        <Layout children={
            <div className="text-white text-center mt-10 py-12 px-5">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent">
                    BUY E-SUMMIT PASSES
                </h1>
                <p className="text-lg mt-2 opacity-80">
                    Grab your entry ticket to PEC's E-Summit happening on 22nd and 23rd March, 2025!
                </p>

                <h2 className="text-2xl bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent uppercase mt-10">
                    Startup Passes
                </h2>
                <div className="flex justify-center gap-5 flex-wrap mt-5">
                    {startupPasses.map((pass, i) => (
                        <div key={i} className="relative bg-gray-900 border-t-4 border-orange-500 p-6 w-80 text-left shadow-md hover:shadow-orange-500 transition-transform transform hover:-translate-y-2 rounded-lg">
                            {pass.sold && <div className="bg-orange-500 text-black text-sm font-bold py-1 px-2 absolute top-2 left-1/2 transform -translate-x-1/2 rounded">Sold Out</div>}
                            <h3 className="text-yellow-100 text-center font-bold mt-3">{pass.type}</h3>
                            <ul className="mt-3">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white text-sm">
                                        <FaCheckCircle className="text-green-400" /> {item}
                                    </li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm opacity-80">
                                        <FaTimesCircle className="text-red-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center mt-5">
                                <div>
                                    <p className="text-gray-400 text-sm">Total Payable</p>
                                    <p className="text-white text-lg font-bold">{pass.cost}</p>
                                </div>
                                <button className={`py-2 px-4 rounded font-bold ${pass.sold ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`} disabled={pass.sold}>
                                    {pass.sold ? "Unavailable" : "Buy Now"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl bg-gradient-to-r from-orange-600 via-white to-green-600 bg-clip-text text-transparent uppercase mt-10">
                    Student Passes
                </h2>
                <div className="flex justify-center gap-5 flex-wrap mt-5">
                    {studentPasses.map((pass, i) => (
                        <div key={i} className="relative bg-gray-900 border-t-4 border-orange-500 p-6 w-80 text-left shadow-md hover:shadow-orange-500 transition-transform transform hover:-translate-y-2 rounded-lg">
                            {pass.sold && <div className="bg-orange-500 text-black text-sm font-bold py-1 px-2 absolute top-2 left-1/2 transform -translate-x-1/2 rounded">Sold Out</div>}
                            <h3 className="text-yellow-100 text-center font-bold mt-3">{pass.type}</h3>
                            <ul className="mt-3">
                                {pass.inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white text-sm">
                                        <FaCheckCircle className="text-green-400" /> {item}
                                    </li>
                                ))}
                                {pass.exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm opacity-80">
                                        <FaTimesCircle className="text-red-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between items-center mt-5">
                                <div>
                                    <p className="text-gray-400 text-sm">Total Payable</p>
                                    <p className="text-white text-lg font-bold">{pass.cost}</p>
                                </div>
                                <button className={`py-2 px-4 rounded font-bold ${pass.sold ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`} disabled={pass.sold}>
                                    {pass.sold ? "Unavailable" : "Buy Now"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>} />
    );
};

export default Passes;