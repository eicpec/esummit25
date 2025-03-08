import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const YoutubeEmbed = () => {
    return (
        <div className="w-full h-64 bg-gray-800 flex justify-center items-center text-white">
            YouTube Embed Placeholder
        </div>
    );
};

const Column = ({ images, y }) => {
    return (
        <div className="flex flex-col items-center w-full">
            <motion.div style={{ y }} className="relative -top-40">
                {images.map((i, index) => (
                    i === "<YoutubeEmbed />" ? (
                        <YoutubeEmbed key={index} />
                    ) : (
                        <img
                            key={index}
                            className="w-[25vw] object-cover rounded-xl m-1 sm:w-[33.33vw] xs:w-[50vw]"
                            src={i}
                            alt="walloffame"
                        />
                    )
                ))}
            </motion.div>
        </div>
    );
};

const WallOfFame = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [1000, 0]);

    return (
        <motion.div ref={container} className="bg-black flex justify-center items-center overflow-hidden w-full">
            <div className="hidden lg:flex justify-center items-center overflow-hidden">
                <Column images={["/assets/wallOfFame/1.jpg"]} y={y1} />
                <Column images={["/assets/wallOfFame/2.jpg", "/assets/wallOfFame/3.jpg", "/assets/wallOfFame/4.jpg"]} y={y2} />
                <Column images={["/assets/wallOfFame/5.jpg"]} y={y1} />
                <Column images={["/assets/wallOfFame/6.jpg", "/assets/wallOfFame/7.jpg", "<YoutubeEmbed />", "/assets/wallOfFame/8.jpg"]} y={y2} />
            </div>
            <div className="hidden md:flex lg:hidden justify-center items-center overflow-hidden">
                <Column images={["/assets/wallOfFame/1.jpg", "/assets/wallOfFame/2.jpg"]} y={y1} />
                <Column images={["/assets/wallOfFame/3.jpg", "/assets/wallOfFame/4.jpg", "/assets/wallOfFame/5.jpg", "/assets/wallOfFame/6.jpg"]} y={y2} />
                <Column images={["<YoutubeEmbed />", "/assets/wallOfFame/7.jpg", "/assets/wallOfFame/8.jpg"]} y={y1} />
            </div>
            <div className="flex md:hidden justify-center items-center overflow-hidden">
                <Column images={["/assets/wallOfFame/1.jpg", "/assets/wallOfFame/2.jpg", "/assets/wallOfFame/3.jpg"]} y={y1} />
                <Column images={["/assets/wallOfFame/4.jpg", "/assets/wallOfFame/5.jpg", "/assets/wallOfFame/6.jpg", "<YoutubeEmbed />", "/assets/wallOfFame/7.jpg", "/assets/wallOfFame/8.jpg"]} y={y2} />
            </div>
        </motion.div>
    );
};

export default WallOfFame;
