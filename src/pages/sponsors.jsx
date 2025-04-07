import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SponsorsMarquee = ({ title, data, direction }) => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear container before re-rendering
    container.innerHTML = "";

    // Create card elements and their clones
    const originalCards = data.map((sponsor) => createCardElement(sponsor));
    const clonedCards = originalCards.map((card) => card.cloneNode(true));

    // Append all to the container
    originalCards.forEach((card) => container.appendChild(card));
    clonedCards.forEach((card) => container.appendChild(card));

    const totalWidth = container.scrollWidth / 2;
    gsap.set(container, { x: direction ? 0 : -totalWidth });

    tl.current = gsap.to(container, {
      x: direction ? -totalWidth : 0,
      duration: 40,
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
  }, [direction, data]);

  const createCardElement = (sponsor) => {
    const card = document.createElement("div");
    card.className =
      "relative flex-shrink-0 w-64 p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-full shadow-md transition-transform duration-300 cursor-pointer text-center ";

    card.innerHTML = `
      <img src="${sponsor.image}" alt="${sponsor.name}" class="w-90 h-45 object-cover rounded-full text-center mb-4" />
      <h3 class="text-xl font-semibold text-white">${sponsor.name}</h3>
      <h4 class="text-sm text-gray-400 break-words whitespace-normal">${sponsor.designation}</h4>
      <div class="gradient-overlay absolute bottom-0 left-0 w-full h-[calc(100%-12rem)] opacity-0 z-0 rounded-lg overflow-hidden"
        style="background: linear-gradient(to bottom, rgba(255, 165, 0, 0.3), rgba(255, 255, 255, 0.3), rgba(0, 128, 0, 0.3)); clip-path: inset(12rem 0px 0px 0px);">
      </div>
    `;

    card.addEventListener("mouseenter", (e) => handleHover(e, true));
    card.addEventListener("mouseleave", (e) => handleHover(e, false));

    return card;
  };

  const handleHover = (event, isHovered) => {
    const card = event.currentTarget;
    const gradientOverlay = card.querySelector(".gradient-overlay");

    if (isHovered) {
      tl.current.pause();
      gsap.to(card, { scale: 1.1, duration: 0.1, ease: "power2.out" });
      gsap.to(gradientOverlay, { opacity: 1, duration: 0.1 });

      card.addEventListener("mousemove", handleTilt);
      card.addEventListener("mouseleave", resetTilt);
    } else {
      tl.current.play();
      gsap.to(card, { scale: 1, duration: 0.1, ease: "power2.out" });
      gsap.to(gradientOverlay, { opacity: 0, duration: 0.15 });

      setTimeout(() => resetTilt({ currentTarget: card }), 50);
    }
  };

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = card;

    const rotateX = ((offsetY - offsetHeight / 2) / offsetHeight) * 20;
    const rotateY = ((offsetX - offsetWidth / 2) / offsetWidth) * -20;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.01,
    });
  };

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
      <h1 className="text-3xl font-bold text-center mb-6 text-white">{title}</h1>
      <div
        ref={containerRef}
        className="flex space-x-8"
        style={{ whiteSpace: "nowrap" }}
      ></div>
    </div>
  );
};

export default SponsorsMarquee;
