import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SpeakerCard = ({ image, name, designation }) => {
  const cardRef = useRef(null);
  const hoverBgRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const hoverBg = hoverBgRef.current;

    const handleMouseEnter = () => {
      gsap.to(hoverBg, {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(hoverBg, {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group block p-2 h-full w-full"
    >
      <div
        ref={hoverBgRef}
        className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl opacity-0 transition-opacity duration-300"
      />
      <div className="relative flex h-full w-full rounded-3xl items-center bg-neutral-100 dark:bg-slate-800 justify-center p-10 text-center">
        <div className="space-y-5">
          <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto" />
          <h2 className="text-xl font-semibold lg:text-2xl">{name}</h2>
          <p className="text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;