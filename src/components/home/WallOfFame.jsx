import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Column = ({ images, y }) => {
  return (
    <div className="column flex flex-col items-center gap-8 w-auto">
      <motion.div style={{ y }} className="motion-column flex flex-col gap-8">
        {images.map((src, index) => (
          <img
          className="w-[48vw] sm:w-[47vw] md:w-[32vw] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          src={src}
          alt="walloffame"
      />
      
        ))}
      </motion.div>
    </div>
  );
};

const WallOfFame = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // All columns move up, but columns 2 & 4 move faster
  const y1 = useTransform(scrollYProgress, [0, 1], [300, -300]); // Normal speed
  const y2 = useTransform(scrollYProgress, [0, 1], [700, -700]); // Faster speed

  return (
    <div
      ref={containerRef}
      className="wall flex justify-center items-center overflow-hidden w-full bg-transparent py-20 min-h-screen"
    >
      <div className="wall-container w-full px-1 sm:px-2 grid grid-cols-2 gap-x-6 gap-y-4 lg:flex lg:flex-nowrap lg:space-x-10">


        <Column
          images={["/assets/wallOfFame/1.jpg", "/assets/wallOfFame/2.jpg"]}
          y={y1}
        />
        <Column
          images={["/assets/wallOfFame/3.jpg", "/assets/wallOfFame/4.jpg"]}
          y={y2}
        />
        <Column
          images={["/assets/wallOfFame/5.jpg", "/assets/wallOfFame/6.jpg"]}
          y={y1}
        />
        <Column
          images={["/assets/wallOfFame/7.jpg", "/assets/wallOfFame/8.jpg"]}
          y={y2}
        />
      </div>
    </div>
  );
};

export default WallOfFame;
