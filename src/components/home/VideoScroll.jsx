import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation.jsx";
import { motion } from "framer-motion";

export default function VideoScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Witness The Greatness of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                E-Summit'25
              </span>
            </h1>
          </>
        }
      >
        <motion.iframe
          src="https://www.youtube.com/embed/v5zOMEJ3ads?autoplay=1&mute=1"
          title="YouTube video player"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </ContainerScroll>
    </div>
  );
}
