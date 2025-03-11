import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import Layout from "../../layouts/Layout";
const ParallaxScrollSecond = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const firstMotion = {
    y: useTransform(scrollYProgress, [0, 1], [0, -200]),
    x: useTransform(scrollYProgress, [0, 1], [0, -200]),
    rotateZ: useTransform(scrollYProgress, [0, 1], [0, -20]),
  };

  const thirdMotion = {
    y: useTransform(scrollYProgress, [0, 1], [0, -200]),
    x: useTransform(scrollYProgress, [0, 1], [0, 200]),
    rotateZ: useTransform(scrollYProgress, [0, 1], [0, 20]),
  };

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <Layout children={
      <div className={`bg-transparent overflow-y-auto w-full ${className}`} ref={gridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
          {[firstPart, secondPart, thirdPart].map((part, index) => (
            <div className="grid gap-10" key={`grid-column-${index}`}>
              {part.map((el, idx) => (
                <motion.div
                  key={`grid-${index + 1}-${idx}`}
                  style={index === 0 ? firstMotion : index === 2 ? thirdMotion : {}}
                  className="relative p-[4px] rounded-lg overflow-hidden border-[3px] border-transparent shadow-lg transition-transform hover:scale-105"
                >
                  {/* Moving Gradient Border */}
                  <div className="absolute inset-0 rounded-lg p-[3px] animate-gradient"></div>

                  {/* Image Inside */}
                  <div className="relative rounded-lg overflow-hidden bg-black">
                    <img
                      src={el}
                      className="h-80 w-full object-cover rounded-lg border-[2px] border-white shadow-md"
                      alt={`Image ${index + 1}-${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Tailwind CSS Animation */}
        <style>
          {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background: linear-gradient(90deg, #ff9933, white, #138808);
            background-size: 200% 200%;
            animation: moveGradient 4s linear infinite;
          }
        `}
        </style>
      </div>
    } />
  );
};

export default ParallaxScrollSecond;
