import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Logo from "../../assets/General/esummit25logofull.png";

const springConfig = {
  stiffness: 100,
  damping: 20,
  bounce: 0,
};

const HeroParallax = ({ products }) => {
  const ref = useRef(null);

  const { firstRow, secondRow, thirdRow } = useMemo(() => {
    return {
      firstRow: products.slice(0, 6),
      secondRow: products.slice(6, 12),
      // thirdRow: products.slice(10, 15),
    };
  }, [products]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [-800, 800]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [-300, -800]), springConfig);
  const baseTransforms = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), springConfig);

  const rotateXTransform = useTransform(baseTransforms, [0, 1], [10, 0]);
  const rotateZTransform = useTransform(baseTransforms, [0, 1], [20, 0]);
  const translateYTransform = useTransform(baseTransforms, [0, 1], [-300, 150]);
  const opacityTransform = useTransform(baseTransforms, [0, 1], [0.3, 1]);
  const scaleTransform = useTransform(baseTransforms, [0, 1], [0.95, 1]);

  return (
    <div
      ref={ref}
      className="min-h-screen py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-black to-black/60"
    >
      <motion.div className="sticky top-0 z-10">
        <Header />
      </motion.div>
      <motion.div
        style={{
          rotateX: rotateXTransform,
          rotateZ: rotateZTransform,
          translateY: translateYTransform,
          opacity: opacityTransform,
          scale: scaleTransform,
        }}
        className="sticky top-0"
      >
        <ProductRow products={firstRow} translate={translateX} />
        <ProductRow products={secondRow} translate={translateXReverse} />
        {/* <ProductRow products={thirdRow} translate={translateX} /> */}
      </motion.div>
    </div>
  );
};

const ProductRow = React.memo(({ products, translate }) => (
  <motion.div className="flex flex-row space-x-10 mb-10 px-4">
    {products.map((product) => (
      <ProductCard key={product.title} product={product} translate={translate} />
    ))}
  </motion.div>
));

const ProductCard = React.memo(({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="group h-80 w-[26rem] relative overflow-hidden rounded-xl flex-shrink-0 bg-gray-900 shadow-lg border border-gray-800 transition-transform duration-300 hover:opacity-85"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </motion.div>
  );
});

const Header = React.memo(() => (
  <div className="max-w-4xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0 flex justify-center">
    <img src={Logo} alt="Event Logo" className="w-full max-w-[1100px] h-auto object-contain opacity-100" />
  </div>
));

export default React.memo(HeroParallax);
