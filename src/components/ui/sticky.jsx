  import React, { useEffect, useRef, useState } from "react";
  import { useMotionValueEvent, useScroll, motion } from "framer-motion";

  export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      container: ref, // Controls scroll inside the container
      offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        return Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = ["#000000","#1E293B", "#171717"]; // Tailwind slate-900, black, neutral-900
    const linearGradients = [
      "linear-gradient(to bottom right, #06B6D4, #10B981)", // cyan-500, emerald-500
      "linear-gradient(to bottom right, #EC4899, #6366F1)", // pink-500, indigo-500
      "linear-gradient(to bottom right, #F97316, #FACC15)", // orange-500, yellow-500
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
      setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
      <motion.div
        animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 custom-scrollbar"
        ref={ref}
      >

        {/* Left Section: Text Content */}
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">  
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        {/* Right Section: Sticky Card */}
        <div
          style={{ background: backgroundGradient }}
          className={`hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden ${contentClassName}`}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    );
  };
