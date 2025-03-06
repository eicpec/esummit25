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
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-10"
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
              className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-600"
                onClick={() => setActive(null)}
              >
                ✖
              </button>
              <img
                src={active.EventPhoto}
                alt={active.EventName}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{active.EventName}</h3>
              <p className="text-gray-600">{active.About}</p>
              <a
                href={active.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-green-500 text-white py-2 rounded-lg"
              >
                Register
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Row */}
      <div className="flex flex-wrap gap-4 px-4 py-6 justify-center bg-black">
  {events.map((card) => (
    <motion.div
      key={card.EventName}
      layoutId={`card-${card.EventName}-${id}`}
      className="cursor-pointer p-4 bg-gray-100 rounded-lg hover:bg-gray-200 w-[250px]"
      onClick={() => setActive(card)}
    >
      <img
        src={card.EventPhoto}
        alt={card.EventName}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{card.EventName}</h3>
    </motion.div>
  ))}
      </div>
    </>
  );
};

export default ExpandableCardDemo;
