import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EventCard from "../../components/events/EventCard.jsx";
import { events } from "../../data/events.js";
import "../../styles/events/competitions.css";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    
    //able page scroll when a card is expanded
    if (active && typeof active === "object") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "auto";
    }
    
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <div className="page-background">
      {/* Overlay for expanded card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="expanded-card-container">
            <motion.button
              key={`button-${active.EventName}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="close-button"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.EventName}-${id}`}
              ref={ref}
              className="expanded-card"
            >
              <EventCard event={active} isExpanded={true} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* List of Event Cards */}
      <ul className="event-cards-container">
        {events.map((event) => (
          <motion.div
            layoutId={`card-${event.EventName}-${id}`}
            key={event.EventName}
            onClick={() => setActive(event)}
            className="event-card-wrapper"
          >
            <EventCard event={event} isExpanded={false} />
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="close-icon"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
