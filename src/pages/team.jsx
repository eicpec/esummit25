import React from "react";
import Organiser from "../components/team/organiser.jsx";
import { coreTeam } from "../data/team.js";
import Layout from "../layouts/Layout.jsx";
import "../styles/passes.css";

const Team = () => {
    return (
        <Layout children={
            <div className="bg-transparent min-h-[91vh] bg-center bg-no-repeat bg-cover bg-fixed overflow-x-hidden">
                <div className="max-w-6xl mx-auto py-10">
                    <h1 className="title text-center mt-14 mb-5">Core Team - E-Summit'25</h1>
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Conveners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.convener && coreTeam.convener.map((item, i) => (
                                <Organiser key={i} organiser={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Heads</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.head.map((item, i) => (
                                <Organiser key={i} organiser={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Joint Heads</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.jointhead.map((item, i) => (
                                <Organiser key={i} organiser={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        } />
    );
};

export default Team;
