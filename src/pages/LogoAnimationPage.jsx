import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Logo from "../assets/esummit25logofull.png"; // Update your logo path

const LogoAnimationPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Faster scroll effect
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.5]), { stiffness: 200, damping: 15 });
  const yPosition = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), { stiffness: 200, damping: 15 });

  return (
    <div ref={ref} className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Logo Animation */}
      <motion.img
        src={Logo}
        alt="Event Logo"
        className="w-1/2 md:w-1/3 h-auto object-contain fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }} // Slower initial zoom
        style={{ scale, y: yPosition }}
      />

      {/* Page Content */}
      <div className="mt-[100vh] w-full h-[200vh] flex items-center justify-center text-white text-2xl">
        Scroll down to see the effect
      </div>
    </div>
  );
};

export default LogoAnimationPage;
