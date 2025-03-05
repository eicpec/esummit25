import React from "react";
import { StickyScroll } from "../ui/sticky.jsx";

const content = [
  {
    title: "E-summit'25 Startup Culture",
    description:
      "E-Summit'25 Startup Culture is a vibrant platform celebrating entrepreneurship and innovation. It brings together founders, investors, and industry leaders for workshops, keynotes, and discussions on disruptive ideas and business growth. Whether pitching, networking, or learning, this event fuels collaboration and startup success.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="../assets/wallOfFame/1.jpg"
          width="300"
          height="300"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "1. Expert Insights: Gain strategies from founders, investors, and industry leaders\n 2. Scaling Smart: Understand how to pivot and grow in an evolving landscape.\n 3. Future-Ready Startups: Decode the next wave of entrepreneurial success.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="../assets/wallOfFame/3.jpg"
          width="300"
          height="300"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
export default StickyScrollRevealDemo;