import React, { useEffect, useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { events } from "../../data/events.js";
import { registerForEvent } from "../../utils/firebaseConfig.js";
import { getAuth } from "firebase/auth";
import "../../styles/passes.css";
import { RxCrossCircled } from "react-icons/rx";
import RegistrationForm from "../../components/RegistrationForm.jsx";
import { Link } from "react-router-dom";

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

const ExpandableCardDemo = ({ onRegisterClick }) => {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  const handleRegister = async (eventName) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Please sign in to register for the event.");
      return;
    }

    try {
      await registerForEvent(eventName);
      // alert("You have successfully registered for the event!");
    } catch (error) {
      alert(error.message);
    }
  };


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
        <div className="text-center text-white py-5 mt-20">
          <h1 className="title">Events</h1>
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
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-lg">
              <motion.div
                layoutId={`card-${active.EventName}-${id}`}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden text-white border border-white/20"
                style={{
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Close Button */}
                <button
                  className="absolute bg-black/80 rounded-full p-1.5 top-4 right-4 text-gray-300 hover:text-white transition-all hover:scale-110"
                  onClick={() => setActive(null)}
                >
                  <RxCrossCircled className="h-7 w-7 text-white" />
                </button>

                {/* Event Image */}
                <motion.img
                  src={active.EventPhoto}
                  alt={active.EventName}
                  className="w-full h-60 object-cover rounded-2xl shadow-lg"
                />

                {/* Event Title */}
                <h3 className="text-3xl font-bold mt-4 text-center text-white drop-shadow-md">
                  {active.EventName}
                </h3>

                {/* Event Description */}
                <p className="text-gray-200 text-base text-center mt-2 leading-relaxed">
                  {active.About}
                </p>

                {/* Register Button */}
                <a
                  href={active.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-green-500/50"
                >
                 <Link to={'/eventregister'}> Register Now</Link>
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
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRegisterClick(card.EventName);
                }}
                className="mt-4 block text-center bg-green-500 text-white py-2 rounded-full font-medium hover:bg-green-600 transition-all"
              >
                Register
              </button> */}
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
