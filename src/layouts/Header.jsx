// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/esummit25logo.png"

// function Header() {
//     const navigate = useNavigate();
//     const [isActive, setIsActive] = useState(false);

//     const handleClick = () => {
//         setIsActive((prev) => !prev);
//     };

//     return (
//         <div className={`fixed top-0 w-full bg-black text-white font-sans z-50 h-16 flex items-center  transition-all bg-opacity-60 duration-300 ${isActive ? "bg-opacity-60" : ""}`}>
//             <nav className="pl-12 custom-header flex justify-center items-center w-full px-6">
//                 {/* Left Side Navigation */}
//                 <ul className="custom-items flex space-x-8">
//                     {headerItems.slice(0, 4).map((item, i) => (
//                         <li key={i}>
//                             <Link to={item.href} className="hover:text-teal-400">{item.name}</Link>
//                         </li>
//                     ))}
//                 </ul>

//                 <img
//                     src={Logo}
//                     alt="Logo"
//                     className="w-48 mx-8 cursor-pointer transition-transform duration-300"
//                     onClick={() => navigate("/")}
//                 />

//                 {/* Logo */}
//                 {/* <div
//                     className={`w-12 h-12 mx-6 rounded-full cursor-pointer transition-transform duration-300`}
//                     // className={`w-28 mx-10 cursor-pointer transition-transform duration-300`}
//                     style={{
//                         backgroundImage: `url(${Logo})`,
//                         // backgroundImage: `url('https://www.eicpec.in/assets/logos/logo-text.png')`,
//                         backgroundSize: "140%",
//                         backgroundPosition: "center",
//                         transform: `translateY(-${transx}%)`,
//                     }}
//                     onClick={() => navigate("/")}
//                 /> */}


//                 {/* Right Side Navigation */}
//                 <ul className="custom-items flex space-x-8">
//                     {headerItems.slice(4, 8).map((item, i) => (
//                         <li key={i}>
//                             <Link to={item.href} className="hover:text-teal-400">{item.name}</Link>
//                         </li>
//                     ))}
//                     <li>
//                         {/* <button className="hover:text-teal-400" onClick={() => navigate("/profile")}>
//                             Profile
//                         </button> */}
//                     </li>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button className="hidden custom-menu-icon p-2 focus:outline-none" onClick={handleClick}>
//                     ☰
//                 </button>
//             </nav>
//         </div>
//     );
// }

// export const headerItems = [
//     { href: "/", name: "HOME", ext: true },
//     { href: "/", name: "EVENTS" },
//     { href: "/", name: "PASSES" },
//     { href: "/", name: "SPONSORS" },
//     { href: "/", name: "SPEAKERS" },
//     { href: "/", name: "TIMELINE" },
//     { href: "/", name: "CONTACT" },
//     { href: "/", name: "REGISTER" },
// ];

// export default Header;
