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
              <span class="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                E-Summit'25
              </span>
            </h1>
          </>
        }
      >
        <motion.iframe
          src="https://www.youtube.com/embed/qhqkavoq5P4?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&fs=0&playsinline=1&loop=1&playlist=qhqkavoq5P4"
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
