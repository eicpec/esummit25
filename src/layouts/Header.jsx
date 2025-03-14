import React, { useEffect, useState } from "react";
import Logo from "../assets/General/Logo_Text.png"; // text
import MiniLogo from "../assets/General/Logo_Vector_Image.png"; // vector
import FullLogo from "../assets/General/esummit25logo.png"; // full
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
    const [isActive, setIsActive] = useState(false);
    const [username, setUserName] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user?.displayName);
    }, []);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    const headerItems = [
        { href: "/events", name: "EVENTS" },
        { href: "/passes", name: "PASSES" },
        { href: "/timeline", name: "TIMELINE" },
        { href: "/dignitaries", name: "DIGNITARIES" },
        { href: "/team", name: "TEAM" },
        { href: "/gallery", name: "GALLERY" },
        { href: "/contact", name: "CONTACT" },
        { href: username ? "/profile" : "/register", name: username?.split(" ")[0]?.toLocaleUpperCase() || "REGISTER" },
    ];

    return (
        <div className={`fixed top-0 w-full bg-gradient-to-b from-[#1C3546]/70 to-[#1C3546]/0 backdrop-blur-sm text-white font-sans z-50 h-20 flex items-center transition-all duration-300 ${isActive ? "bg-opacity-100" : ""}`}>
            <nav className="pl-12 custom-header flex justify-center items-center w-full px-6">
                {/* Left Side Navigation */}
                <ul className="custom-items flex space-x-8">
                    {headerItems.slice(0, 4).map((item, i) => (
                        <li key={i}>
                            <a href={item.href} className="hover:text-[#67B956] hover:font-semibold">{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Logo */}
                <img
                    src={FullLogo}
                    alt="Logo"
                    className="w-48 mx-8 cursor-pointer transition-transform duration-300"
                    onClick={() => (window.location.href = "/")}
                />

                {/* Right Side Navigation */}
                <ul className="custom-items flex space-x-8">
                    {headerItems.slice(4, 8).map((item, i) => (
                        <li key={i}>
                            <a href={item.href} className="hover:text-[#67B956] hover:font-semibold">{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="hidden custom-menu-icon p-2 focus:outline-none" onClick={handleClick}>
                    <AiOutlineMenu />
                </button>
            </nav>
            {isActive && (
                <div className="fixed h-screen inset-0 bg-[#000000] opacity-80 flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transition-all duration-300 z-50">
                    {/* Close Button */}
                    <button className="absolute top-5 right-6 text-4xl" onClick={handleClick}>
                        <AiOutlineClose />
                    </button>

                    {/* Menu Items */}
                    {headerItems.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="hover:text-[#D7742F] transition-colors duration-200"
                            onClick={() => setIsActive(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Header;
