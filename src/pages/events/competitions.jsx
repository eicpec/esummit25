import React, { useEffect, useState, useRef, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { events } from "../../data/events.js";
import { auth, checkRegistrationStatus, getCurrentUser } from "../../utils/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../../styles/passes.css";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaLink, FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";
import { Troubleshoot } from "@mui/icons-material";

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
  const [isRegistered, setIsRegistered] = useState(false);
  const id = useId();
  const ref = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [isopen, setOpen] = useState(true);
  const [forreg, setForReg] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const ud = await getCurrentUser();
          setUserDetails(ud);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Function to handle registration check when clicking an event
  const handleEventClick = (card) => {
    setActive(card);
    if (user) {
      console.log(card);
      console.log(card.EventName, " - ", isRegistered);
      checkRegistrationStatus(user.uid, card.EventLink)
        .then((registered) => setIsRegistered(registered))
        .catch(() => setIsRegistered(false));
    } else {
      setIsRegistered(false);
    }
    var today = new Date();
    // console.log(today.getDate());
    // console.log(card.reg);
    if (card.reg >= today.getDate() && card.regmon >= today.getMonth() + 1) {
      setOpen(true);
    }
    else{
      setOpen(false);
    }
    console.log(card.forreg);
    setForReg(card.forreg);
  };

  const handleRegister = (link) => {
    if (!user) {
      toast.error("Please sign in to register for the event.");
      navigate("/register");
      return;
    } else if (!userDetails.college || !userDetails.sid || !userDetails.phone) {
      // console.log("user - ", userDetails);
      // console.log({ college: userDetails.college, phone: userDetails.phone, sid: userDetails.sid });
      toast.error(
        "Please complete your profile before registering in an event."
      );
      navigate("/profile");
      return;
    }
    navigate(`/register/${link}`);
  };

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="bg-transparent min-h-screen w-full">
        <div className="text-center text-white py-5 mt-20">
          <h1 className="title">Events</h1>
        </div>

        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-lg">
              <motion.div
                layoutId={`card-${active.EventName}-${active.id || "unknown"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden text-white border border-white/20"
                style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
              >
                <button
                  className="absolute bg-black/80 rounded-full p-1.5 top-4 right-4 text-gray-300 hover:text-white transition-all hover:scale-110"
                  onClick={() => setActive(null)}
                >
                  <RxCrossCircled className="h-7 w-7 text-white" />
                </button>

                <motion.img
                  src={active.EventPhoto || "https://via.placeholder.com/500"}
                  alt={active.EventName || "Event"}
                  className="w-full h-60 object-cover rounded-2xl shadow-lg"
                />

                <h3 className="text-3xl font-bold mt-4 text-center text-white drop-shadow-md">
                  {active.EventName || "Sample Event"}
                </h3>

                <div className="flex justify-center items-center gap-4 mt-3 text-gray-300">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-white" />
                    {active.Date || "DD/MM/YYYY"}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-white" />
                    {active.Time || "HH:MM AM/PM"}
                  </span>
                </div>

                {active?.team && (
                  <div className="flex justify-center items-center gap-2 mt-2 text-gray-300">
                    <FaUsers className="text-white" />
                    <span>
                      Team Size: {active?.team?.min + " - " + active?.team?.max}
                    </span>
                  </div>
                )}

                {active?.unstopLink && (
                  <div className="flex justify-center items-center gap-2 mt-2 text-gray-300">
                    <FaLink className="text-white" />
                    <span>
                      <Link to={`${active?.unstopLink}`}>
                        Register on Unstop
                      </Link>
                    </span>
                  </div>
                )}

                <p className="text-gray-200 text-base text-center mt-2 leading-relaxed">
                  {active.About || "No description available."}
                </p>

                <button
                  className={`mt-6 block text-center py-3 w-full rounded-xl font-medium transition-transform shadow-lg ${isRegistered
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:scale-105 hover:shadow-green-500/50"
                    }`}
                  disabled={isRegistered}
                >
                  { forreg ?
                   (isopen ? 
                  ((isRegistered ? (
                    "Already Registered"
                  ) :
                   (
                    <div onClick={() => handleRegister(active?.EventLink)}>
                      Register Now
                    </div>
                  ))):
                  ("Registeration Closed")):
                  ("No Registration Required") }
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-6 px-6 py-8 justify-center mt-1">
          {events.map((card) => (
            <motion.div
              key={card.EventName}
              layoutId={`card-${card.EventName}-${id}`}
              className="cursor-pointer p-4 bg-black rounded-3xl border-2 border-transparent w-[260px] transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                borderImage:
                  "linear-gradient(90deg, #FF9933, #FFFFFF, #138808) 1",
                clipPath: "inset(0 round 15px)",
              }}
              onClick={() => handleEventClick(card)} // Updated function call
            >
              <img
                src={card.EventPhoto}
                alt={card.EventName}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold mt-3 text-white">
                {card.EventName}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpandableCardDemo;
