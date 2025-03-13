import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import FullLogo from "../../assets/General/Logo_Vector_Image.png"; // Vector Logo
import TextLogo from "../../assets/General/Logo_Text.png"; // Text Logo

const LogoAnimationPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timeline = gsap.timeline();

        if (isMobile) {
            // Mobile Animation: Scale down smoothly
            timeline.fromTo(
                ".logo-vector",
                { scale: 5, opacity: 0 }, // Start big
                { scale: 1, opacity: 1, duration: 2, ease: "power2.out" } // Shrink to normal size
            );
        } else {
            // Desktop Animation: Full Sequence
            timeline.fromTo(
                ".logo-vector",
                { scale: 5, opacity: 0 },
                { scale: 2, opacity: 1, duration: 2, ease: "power2.out" }
            );

            timeline.to(".logo-vector", {
                x: "-170px",
                y: "-18px",
                scale: 1.4,
                duration: 1,
                ease: "power2.inOut",
            });

            timeline.fromTo(
                ".logo-text",
                { x: "50px", scale: 2.5, opacity: 0 },
                { x: "50px", scale: 2.5, opacity: 1, duration: 2, ease: "power2.out" },
                "-=0.5"
            );

            timeline.to([".logo-vector", ".logo-text"], {
                opacity: 0,
                duration: 1,
                delay: 1.5,
                ease: "power2.out",
            });
        }
    }, [isMobile]);

    return (
        <div className="relative w-screen h-screen flex items-center justify-center bg-black bg-cover bg-center overflow-hidden">
            {/* Vector Logo (Scales in smoothly on mobile, full animation on desktop) */}
            <img
                src={FullLogo}
                alt="Logo Vector"
                className={`logo-vector w-40 z-10 ${isMobile ? "absolute-center" : "relative"}`}
            />

            {/* Logo Text (Hidden on mobile) */}
            {!isMobile && (
                <img
                    src={TextLogo}
                    alt="Logo Text"
                    className="logo-text relative w-60 opacity-0"
                />
            )}
        </div>
    );
};

export default LogoAnimationPage;