import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Import images
import image1 from "../assets/sponsers/1.jpg";
import image2 from "../assets/sponsers/2.png";
import image3 from "../assets/sponsers/3.jpg";
import image4 from "../assets/sponsers/4.png";   

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin);

const Sponsers = () => {
  const outerHeartRef = useRef(null);
  const middleHeartRef = useRef(null);
  const innerHeartRef = useRef(null);

  // Array of imported images
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    // Function to animate images along a path
    const animateImages = (pathRef, direction) => {
      const images = gsap.utils.toArray(`.image-${pathRef.current.id}`);
      images.forEach((image, index) => {
        gsap.to(image, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.5, 0.5],
            start: direction === "clockwise" ? 0 : 1, // Start from beginning or end
            end: direction === "clockwise" ? 1 : 0, // End at beginning or end
          },
          duration: 5 + index * 0.5, // Stagger duration for each image
          repeat: -1,
          ease: "none",
          delay: index * 0.5, // Stagger the start time
        });
      });
    };

    // Animate images for each heart
    animateImages(outerHeartRef, "clockwise");
    animateImages(middleHeartRef, "anti-clockwise");
    animateImages(innerHeartRef, "clockwise");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* SVG for Hearts */}
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        {/* Outer Heart (Orange) */}
        <path
          id="outer-heart"
          ref={outerHeartRef}
          d="M250,100 C150,50 50,100 50,200 C50,300 250,450 250,450 C250,450 450,300 450,200 C450,100 350,50 250,100 Z"
          stroke="orange"
          strokeWidth="4"
          fill="transparent"
        />
        {/* Middle Heart (White) */}
        <path
          id="middle-heart"
          ref={middleHeartRef}
          d="M250,150 C175,100 100,150 100,225 C100,300 250,400 250,400 C250,400 400,300 400,225 C400,150 325,100 250,150 Z"
          stroke="white"
          strokeWidth="4"
          fill="transparent"
        />
        {/* Inner Heart (Green) */}
        <path
          id="inner-heart"
          ref={innerHeartRef}
          d="M250,200 C200,150 150,200 150,250 C150,300 250,350 250,350 C250,350 350,300 350,250 C350,200 300,150 250,200 Z"
          stroke="green"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>

      {/* Text in the Middle */}
      <div className="absolute text-white text-4xl font-bold font-mono text-center">
        Our Sponsors
      </div>

      {/* Images for Outer Heart */}
      {images.map((image, i) => (
        <img
          key={`outer-${i}`}
          src={image}
          alt={`Sponsor ${i + 1}`}
          className={`image-outer-heart w-12 h-12 absolute rounded-full`}
        />
      ))}

      {/* Images for Middle Heart */}
      {images.map((image, i) => (
        <img
          key={`middle-${i}`}
          src={image}
          alt={`Sponsor ${i + 1}`}
          className={`image-middle-heart w-10 h-10 absolute rounded-full`}
        />
      ))}

      {/* Images for Inner Heart */}
      {images.map((image, i) => (
        <img
          key={`inner-${i}`}
          src={image}
          alt={`Sponsor ${i + 1}`}
          className={`image-inner-heart w-8 h-8 absolute rounded-full`}
        />
      ))}
    </div>
  );
};

export default Sponsers;