import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const TricolorEffect = ({ children }) => {
  const canvasRef = useRef(null);
  const particles = [];
  const colors = ["#FF9933", "#FFFFFF", "#138808"]; // Saffron, White, Green

  const createParticle = (x, y) => {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5, // Slower movement
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 4 + 2, // Smaller particles
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 80 + 40, // Shorter life span
      shape: Math.random() > 0.5 ? "circle" : "square",
    };
  };

  const updateParticles = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.015; // Faster fading
      p.life -= 1;

      if (p.life <= 0 || p.alpha <= 0) {
        particles.splice(index, 1);
        return;
      }

      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }

      // Very subtle trail effect
      ctx.globalAlpha = p.alpha * 0.2;
      ctx.beginPath();
      ctx.arc(p.x - p.vx * 1.5, p.y - p.vy * 1.5, p.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      updateParticles(ctx);
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(e.clientX, e.clientY)); // Fewer particles
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      ></motion.canvas>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
