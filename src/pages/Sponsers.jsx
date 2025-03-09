import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NeuronAnimation = () => {
  const svgRef = useRef(null);
  const blueLineRefs = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    // Get all paths in the SVG
    const paths = svgRef.current.querySelectorAll("path");

    // Animate blue portions along each path
    paths.forEach((path, index) => {
      const blueLine = blueLineRefs.current[index];
      const circle = circleRefs.current[index];

      // Animate the blue portion along the path
      gsap.to(blueLine, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
        },
        duration: 3,
        ease: "power1.inOut",
        onComplete: () => {
          // Animate the circle popping up at the end
          gsap.fromTo(
            circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
            }
          );
        },
      });
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* SVG */}
      <svg
        ref={svgRef}
        width="300"
        height="224"
        viewBox="0 0 300 224"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        {/* Main SVG Path */}
        <path
          d="M1440 1883 c0 -5 0 -178 0 -387 l0 -378 -32 27 c-18 15 -196 170 -396 344 -200 174 -368 316 -373 316 -5 0 -8 -4 -7 -10 2 -8 524 -467 745 -655 l41 -35 -514 3 c-460 3 -514 2 -514 -12 0 -14 56 -16 510 -18 l509 -3 -394 -338 c-217 -186 -395 -343 -395 -348 0 -5 4 -9 8 -9 5 0 189 155 411 345 l402 346 -3 -386 c-2 -303 0 -385 10 -385 9 0 12 84 12 387 l0 387 48 -45 c26 -25 135 -122 242 -215 107 -94 266 -231 352 -307 94 -82 160 -132 164 -126 3 6 0 17 -7 24 -12 11 -661 573 -747 647 l-33 28 541 0 c429 0 541 3 537 13 -3 9 -120 12 -541 12 l-537 0 24 20 c13 11 192 164 398 339 206 176 376 321 378 323 3 2 0 8 -5 13 -6 6 -153 -114 -409 -333 l-400 -343 -3 383 c-1 244 -6 383 -12 383 -6 0 -10 -3 -10 -7z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Blue Portions */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`blue-line-${i}`}
          ref={(el) => (blueLineRefs.current[i] = el)}
          className="w-1 h-1 bg-blue-500 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2"
        />
      ))}

      {/* Circles at the Ends */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`circle-${i}`}
          ref={(el) => (circleRefs.current[i] = el)}
          className="w-8 h-8 bg-white rounded-full absolute opacity-0 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${50 + Math.sin((i * Math.PI) / 2) * 50}%`,
            left: `${50 + Math.cos((i * Math.PI) / 2) * 50}%`,
          }}
        />
      ))}
    </div>
  );
};

export default NeuronAnimation;