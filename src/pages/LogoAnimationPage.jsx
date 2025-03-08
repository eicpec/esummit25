import React, { useEffect } from "react";
import { gsap } from "gsap";
import FullLogo from "../assets/General/Logo_Vector_Image.png"; // Image 1: Vector Logo
import TextLogo from "../assets/General/Logo_Text.png"; // Image 2: Logo Text
import BgImage from "../assets/General/bgesummit.png"; // Background image

const LogoAnimationPage = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        // Step 1: FullLogo (Vector) appears in center (Large → Small)
        timeline.fromTo(
            ".logo-vector",
            { y: 0, opacity: 0, scale: 5 },
            { opacity: 1, scale: 2, duration: 2, ease: "power2.out" }
        );

        // Step 2: Move FullLogo (Vector) to the left
        timeline.to(".logo-vector", {
            x: "-100px", // Adjust position based on layout
            scale: 1.5,
            duration: 1,
            ease: "power2.inOut",
        });

        // Step 3: TextLogo fades in from left to right
        timeline.fromTo(
            ".logo-text",
            { x: "100px", scale: 3, opacity: 0 },
            { x: "100px", scale: 3, opacity: 1, duration: 2, ease: "power2.out" },
            "-=1" // Starts slightly before the previous animation ends
        );

    }, []);

    return (
        <div
            className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            {/* Logo Vector */}
            <img src={FullLogo} alt="Logo Vector" className="logo-vector relative w-40 z-10" />

            {/* Logo Text (Initially hidden, will slide in) */}
            <img src={TextLogo} alt="Logo Text" className="logo-text relative w-60 opacity-0" />
        </div>
    );
};

export default LogoAnimationPage;
