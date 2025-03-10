import React, { useEffect, useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { events } from "../../data/events.js";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

const ExpandableCardDemo = () => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Global Black Background */}
      <div className="bg-transparent min-h-screen w-full">

        {/* Heading and Tagline */}
        <div className="text-center text-white py-10 mt-20">
          <h1 className="text-4xl rammetto-one-regular font-bold">EVENTS</h1>
          <p className="text-lg text-gray-300 mt-2">
            Explore thrilling events, secure your spot, and make every moment count.
          </p>
        </div>

        {/* Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-10"
            />
          )}
        </AnimatePresence>

        {/* Expanded Card */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 flex items-center justify-center z-20">
              <motion.div
                layoutId={`card-${active.EventName}-${id}`}
                ref={ref}
                className="bg-black p-6 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden text-white"
                style={{
                  outline: "4px solid transparent",
                  outlineOffset: "-4px",
                  boxShadow: "0 0 0 4px rgba(255, 153, 51, 1), 0 0 0 8px rgba(255, 255, 255, 1), 0 0 0 12px rgba(19, 136, 8, 1)",
                }}
              >

                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
                  onClick={() => setActive(null)}
                >
                  ✖
                </button>
                <img
                  src={active.EventPhoto}
                  alt={active.EventName}
                  className="w-full h-56 object-cover rounded-xl"
                />
                <h3 className="text-2xl font-semibold mt-4">{active.EventName}</h3>
                <p className="text-gray-300">{active.About}</p>
                <a
                  href={active.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 transition-all"
                >
                  Register
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Card Row */}
        <div className="flex flex-wrap gap-6 px-6 py-8 justify-center mt-1">
          {events.map((card) => (
            <motion.div
              key={card.EventName}
              layoutId={`card-${card.EventName}-${id}`}
              className="cursor-pointer p-4 bg-black rounded-3xl border-2 border-transparent w-[260px] transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                borderImage: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808) 1",
                clipPath: "inset(0 round 15px)", // Smooth rounded edges
              }}
              onClick={() => setActive(card)}
            >
              <img
                src={card.EventPhoto}
                alt={card.EventName}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold mt-3 text-white">{card.EventName}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        html, body {
          background-color: black;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default ExpandableCardDemo;
