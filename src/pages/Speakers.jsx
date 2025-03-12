import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../layouts/Layout";
import { speakers } from "../data/speakers";

const Speakers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Separating speakers into Influencers (1-4) and Investors (5-15)
  const influencers = speakers.slice(0, 4);
  const investors = speakers.slice(4);

  return (
    <Layout header={true}>
      <div className="mt-28 space-y-10 py-10">
        
        {/* Influencers Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencers.map((speaker, idx) => (
              <SpeakerCard
                key={idx}
                speaker={speaker}
                idx={idx}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

        {/* Investors Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-6">Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investors.map((speaker, idx) => (
              <SpeakerCard
                key={idx + 4} // Offset index for unique keys
                speaker={speaker}
                idx={idx + 4}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

const SpeakerCard = ({ speaker, idx, hoveredIndex, setHoveredIndex }) => {
  return (
    <div
      className="relative group block p-4 h-full w-full cursor-pointer"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full rounded-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,165,0,0.4) 0%, rgba(255,255,255,0.4) 50%, rgba(0,128,0,0.4) 100%)",
            }}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>

      <Card>
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
        <CardTitle>{speaker.name}</CardTitle>
        <CardDescription>{speaker.designation}</CardDescription>
      </Card>
    </div>
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
