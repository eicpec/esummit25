import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const ContactUsPage = () => {
  const canvasRef = useRef(null);
  const particleCount = 700;
  const particles = [];
  const colors = ["#FF9933", "#FFFFFF", "#138808"]; // Saffron, White, Green

  const createParticle = (x, y) => {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  };

  const updateParticles = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;
      
      if (p.alpha <= 0) particles.splice(index, 1);
      
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
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
      for (let i = 0; i < 5; i++) {
        particles.push(createParticle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center text-white">
      <motion.canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></motion.canvas>
      
      <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you!</p>
        <div className="mt-4 space-y-2">
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Chandigarh, India</p>
        </div>
        <a
          href="mailto:contact@example.com"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};
