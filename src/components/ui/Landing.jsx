import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import FullLogo from "../../assets/esummit25logo.png";
import BgImage from "../../assets/bgesummit.png"; // Import the background image
import Home from "../../pages/Home";

const LandingPage = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const timeline = gsap.timeline();

        // Logo animation
        timeline.fromTo(
            ".logo",
            { y: 10, opacity: 0, scale: 8 },
            { y: 0, opacity: 1, scale: 4.5, duration: 2, ease: "power2.out" }
        );

        // Set `showHeader` to `true` after the animation completes
        timeline.to({}, { duration: 1, onComplete: () => setShowHeader(true) });

    }, []);

    return (
        <div
            className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden"
            style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {!showHeader ? (
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover" }}
                >
                    <img src={FullLogo} alt="Logo" className="logo w-40 absolute" />
                </div>
            ) : (
                <>
                    <Header />
                    <Home />
                </>
            )}
        </div>
    );
};

export default LandingPage;
