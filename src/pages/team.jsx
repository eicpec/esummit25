import React from "react";
import { motion } from "framer-motion";
import Organiser from "../components/team/organiser.jsx";
import { coreTeam } from "../data/team.js";
import Layout from "../layouts/Layout.jsx";
import "../styles/passes.css";

const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5 },
    }),
};

const Team = () => {
    return (
        <Layout>
            <div className="bg-transparent min-h-[91vh] bg-center bg-no-repeat bg-cover bg-fixed overflow-x-hidden">
                <div className="max-w-6xl mx-auto py-10">
                    <h1 className="title text-center mt-14 mb-5">Core Team - E-Summit'25</h1>

                    {/* Conveners Section */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Conveners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.convener && coreTeam.convener.map((item, i) => (
                                <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={fadeInVariants}>
                                    <Organiser organiser={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Heads Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Heads</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.head.map((item, i) => (
                                <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={fadeInVariants}>
                                    <Organiser organiser={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Website Developers Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">Website Developers</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {coreTeam.jointhead.map((item, i) => (
                                <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={fadeInVariants}>
                                    <Organiser organiser={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Team;
