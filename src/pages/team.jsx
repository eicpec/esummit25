    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import Organiser from "../components/team/organiser.jsx";
    import { coreTeam } from "../data/team.js";
    import Layout from "../layouts/Layout.jsx";
    import "../styles/passes.css";

    const Team = () => {
        const [stuckItems, setStuckItems] = useState({});

        const handleClick = (index) => {
            setStuckItems((prev) => ({
                ...prev,
                [index]: !prev[index], // Toggle stuck state on click
            }));
        };

        const fadeInVariants = {
            hidden: { opacity: 0.8, scale: 1 },
            visible: { opacity: 1, scale: 1.1 },
        };

        const transition = {
            duration: 0.3,
            ease: "easeInOut",
        };

        return (
            <Layout>
                <div className="bg-transparent min-h-[91vh] bg-center bg-no-repeat bg-cover bg-fixed overflow-x-hidden">
                    <div className="max-w-6xl mx-auto py-10">
                        <h1 className="title text-center mt-14 mb-5">Core Team - E-Summit'25</h1>

                        {/* Generic Section Rendering */}
                        {[
                            { title: "Conveners", data: coreTeam.convener, offset: 0 },
                            { title: "Heads", data: coreTeam.head, offset: 100 },
                            { title: "Website Developers", data: coreTeam.jointhead, offset: 200 }
                        ].map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-10">
                                <h2 className="text-3xl font-bold text-white text-center shadow-lg mb-6">{section.title}</h2>
                                <div className="flex flex-wrap justify-center items-center gap-6">
                                    {section.data.map((item, i) => {
                                        const index = i + section.offset;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial="hidden"
                                                animate={stuckItems[index] ? "visible" : undefined}
                                                whileHover={!stuckItems[index] ? "visible" : undefined}
                                                variants={fadeInVariants}
                                                transition={transition}
                                                onClick={() => handleClick(index)}
                                                className="cursor-pointer"
                                            >
                                                <Organiser organiser={item} />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        );
    };

    export default Team;