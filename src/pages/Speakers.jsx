import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/pastSpeakers/1.jpg";
import img2 from "../assets/pastSpeakers/2.jpg";
import img3 from "../assets/pastSpeakers/3.jpg";
import img4 from "../assets/pastSpeakers/4.jpg";
import Layout from "../layouts/Layout";

const speakers = [
  { image: img1, name: "Speaker One", designation: "CEO, Company A" },
  { image: img2, name: "Speaker Two", designation: "CTO, Company B" },
  { image: img3, name: "Speaker Three", designation: "Founder, Startup C" },
  { image: img4, name: "Speaker Four", designation: "Designer, Studio D" },
  { image: img4, name: "Speaker Four", designation: "Designer, Studio D" },
  { image: img4, name: "Speaker Four", designation: "Designer, Studio D" },
  { image: img4, name: "Speaker Four", designation: "Designer, Studio D" },
  { image: img4, name: "Speaker Four", designation: "Designer, Studio D" },
];

const Speakers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Layout header={true} children={
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="relative group block p-4 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full rounded-3xl"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,165,0,0.4) 0%, rgba(255,255,255,0.4) 50%, rgba(0,128,0,0.4) 100%)",
                  }}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <Card>
              <img src={speaker.image} alt={speaker.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
              <CardTitle>{speaker.name}</CardTitle>
              <CardDescription>{speaker.designation}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    } />
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300 ${className}`}
    >
      <div className="relative z-50 text-center">{children}</div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return <h4 className={`text-zinc-100 font-bold tracking-wide mt-4 ${className}`}>{children}</h4>;
};

const CardDescription = ({ className, children }) => {
  return <p className={`mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}>{children}</p>;
};

export default Speakers;
