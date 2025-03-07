import React, { useState } from "react";
import Logo from "../assets/Logo_Text.png"; // text
import MiniLogo from "../assets/Logo_Vector_Image.png"; // vector
import FullLogo from "../assets/esummit25logo.png"; // full

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className={`fixed top-0 w-full bg-gradient-to-b from-gray-900/70 to-gray-900/0 backdrop-blur-sm text-white shadow-md font-sans z-50 h-20 flex items-center transition-all duration-300 ${isActive ? "bg-opacity-100" : ""}`}>
            <nav className="pl-12 custom-header flex justify-center items-center w-full px-6">
                {/* Left Side Navigation */}
                <ul className="custom-items flex space-x-8">
                    {headerItems.slice(0, 4).map((item, i) => (
                        <li key={i}>
                            <a href={item.href} className="hover:text-teal-400">{item.name}</a>
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
                            <a href={item.href} className="hover:text-teal-400">{item.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="hidden custom-menu-icon p-2 focus:outline-none" onClick={handleClick}>
                    ☰
                </button>
            </nav>
        </div>
    );
}

export const headerItems = [
    { href: "/events", name: "EVENTS" },
    { href: "/", name: "PASSES" },
    { href: "/timeline", name: "TIMELINE" },
    { href: "/", name: "SPEAKERS" },
    { href: "/team", name: "TEAM" },
    { href: "/", name: "SPONSORS" },
    { href: "/", name: "CONTACT" },
    { href: "/register", name: "REGISTER" },
];

export default Header;
