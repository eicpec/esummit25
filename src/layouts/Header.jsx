import React, { useState } from "react";
import Logo from "../assets/esummit25logo.png";

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className={`fixed top-0 w-full bg-black text-white font-sans z-50 h-16 flex items-center transition-all bg-opacity-60 duration-300 ${isActive ? "bg-opacity-60" : ""}`}>
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
                    src={Logo}
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
