import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import FullLogo from "../../assets/esummit25logo.png";
import BgImage from "../../assets/bgesummit.png"; // Import the background image
import Home from "../../pages/Home";

const LandingPage = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        // Initial Logo Animation: Appears large, then shrinks
        timeline.fromTo(
            ".logo",
            { y: 10, opacity: 0, scale: 8 },
            { y: 0, opacity: 1, scale: 5, duration: 1.5, ease: "power2.out" }
        );

        // Shrink slightly
        timeline.to(".logo", {
            scale: 3,
            duration: 1,
            ease: "power2.inOut",
        });

        // Expand again
        timeline.to(".logo", {
            scale: 10,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        });

    }, []);

    return (
        <div
            className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden"
            style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover" }}
            >
                <img src={FullLogo} alt="Logo" className="logo w-40 absolute" />
            </div>
        </div>
    );
};

export default LandingPage;
