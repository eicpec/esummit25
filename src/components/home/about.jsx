import React from "react";
import { StickyScroll } from "../ui/sticky.jsx";
import { content } from "../../data/HomeContent.jsx";


export function StickyScrollRevealDemo() {
  return (
    <div className="p-0 h-screen bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
export default StickyScrollRevealDemo;