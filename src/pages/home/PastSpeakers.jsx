import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const PastSpeakers = ({ title, data, direction }) => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    // Clear existing clones (in case of re-render)
    container.innerHTML = "";
  
    // Create a new set of elements including clones
    const originalCards = data.map((speaker) => createCardElement(speaker));
    const clonedCards = originalCards.map((card) => card.cloneNode(true));
  
    // Append original + cloned cards
    originalCards.forEach((card) => container.appendChild(card));
    clonedCards.forEach((card) => container.appendChild(card));
  
    const totalWidth = container.scrollWidth / 2;
  
    // Start position fix for L->R scrolling
    gsap.set(container, { x: direction ? 0 : -totalWidth });
  
    tl.current = gsap.to(container, {
      x: direction ? -totalWidth : 0, // Move in the desired direction
      duration: 30,
      ease: "none",
      repeat: -1,
      onUpdate: function () {
        if (direction && Math.abs(this.progress()) === 1) {
          gsap.set(container, { x: 0 });
          this.restart();
        }
        if (!direction && this.progress() === 1) {
          gsap.set(container, { x: -totalWidth });
          this.restart();
        }
      },
    });
  
    return () => tl.current.kill();
  }, [direction]);
  
  // Function to create card element
  const createCardElement = (speaker) => {
    const card = document.createElement("div");
    card.className =
      "relative flex-shrink-0 w-64 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-10 cursor-pointer";
    
    // Set content
    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-48 object-cover rounded-md mb-4" />
      <h3 class="text-xl font-semibold text-white">${speaker.name}</h3>
      <h4 class="text-lg text-gray-400">${speaker.designation}</h4>
      <div class="gradient-overlay absolute bottom-0 left-0 w-full h-[calc(100%-12rem)] opacity-0 z-0 rounded-lg overflow-hidden"
        style="background: linear-gradient(to bottom, rgba(255, 165, 0, 0.3), rgba(255, 255, 255, 0.3), rgba(0, 128, 0, 0.3)); clip-path: inset(12rem 0px 0px 0px);">
      </div>
      <div class="icons absolute bottom-4 right-4 flex space-x-4 opacity-0">
        <i class="fa fa-instagram text-white text-2xl cursor-pointer hover:text-orange-500 transition-colors"></i>
        <i class="fa fa-linkedin text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors"></i>
      </div>
    `;
  
    // Add hover listeners
    card.addEventListener("mouseenter", (e) => handleHover(e, true));
    card.addEventListener("mouseleave", (e) => handleHover(e, false));
  
    return card;
  };
  
  
  
  

  // Function to handle hover on a speaker card
  const handleHover = (event, isHovered) => {
    const card = event.currentTarget;
    const gradientOverlay = card.querySelector(".gradient-overlay");
    const icons = card.querySelector(".icons");

    if (isHovered) {
      tl.current.pause(); // Pause the animation on hover
      gsap.to(card, { scale: 1.1, duration: 0.1, ease: "power2.out" });
      gsap.to(gradientOverlay, { opacity: 1, duration: 0.1 }); // Show gradient
      gsap.to(icons, { opacity: 1, duration: 0.1 }); // Show icons

      // Add 3D tilt effect on hover
      card.addEventListener("mousemove", handleTilt);
      card.addEventListener("mouseleave", resetTilt);
    } else {
      tl.current.play(); // Resume the animation on mouse leave
      gsap.to(card, { scale: 1, duration: 0.01, ease: "power2.out" });
      gsap.to(gradientOverlay, { opacity: 0, duration: 0.01 }); // Hide gradient
      gsap.to(icons, { opacity: 0, duration: 0.01 }); // Hide icons

      // Remove 3D tilt effect
      card.removeEventListener("mousemove", handleTilt);
      card.removeEventListener("mouseleave", resetTilt);
      resetTilt({ currentTarget: card }); // Reset the card to its original state
    }
  };

  // Function to handle 3D tilt effect
  const handleTilt = (event) => {
    const card = event.currentTarget;
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = card;

    // Calculate rotation values based on mouse position
    const rotateX = ((offsetY - offsetHeight / 2) / offsetHeight) * 20; // Tilt up/down
    const rotateY = ((offsetX - offsetWidth / 2) / offsetWidth) * -20; // Tilt left/right

    // Apply rotation using GSAP
    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000, // Add perspective for 3D effect
      ease: "power2.out",
      duration: 0.01,
    });
  };

  // Function to reset the card to its original state
  const resetTilt = (event) => {
    const card = event.currentTarget;
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
      duration: 0.01,
    });
  };

  return (
    <div className="overflow-hidden py-10 bg-transparent">
      <h1>{title}</h1>
      <div
        ref={containerRef}
        className="flex space-x-8"
        style={{ whiteSpace: "nowrap" }}
      >
        {data.map((speaker) => (
          <div
            key={speaker.id}
            className="relative flex-shrink-0 w-64 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-10 cursor-pointer"
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {/* Speaker Image and Details */}
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
            <h4 className="text-lg text-gray-400">{speaker.designation}</h4>

            {/* Gradient Overlay (Horizontal and Below Image) */}
            {/* Gradient Overlay (Covers Card, Not Image) */}
            <div
              className="gradient-overlay absolute bottom-0 left-0 w-full h-[calc(100%-12rem)] opacity-0 z-0 rounded-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 165, 0, 0.3), rgba(255, 255, 255, 0.3), rgba(0, 128, 0, 0.3))",
                clipPath: "inset(12rem 0px 0px 0px)", // This ensures the gradient starts below the image
              }}
            ></div>

            {/* Icons (Bottom Right) */}
            <div className="icons absolute bottom-4 right-4 flex space-x-4 opacity-0">
              <FaInstagram className="text-white text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
              <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastSpeakers;
