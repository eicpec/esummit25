import React from "react";
import { Box } from "@mui/material";
import { Instagram, YouTube, X, Facebook, LinkedIn, Mail, Phone } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box className="w-full mx-auto bg-black text-white p-10 shadow-xl shadow-gray-800">
            {/* Social Media Section */}
            <div className="flex justify-between items-center pb-6 border-b border-gray-700">
                <p className="text-lg font-semibold">Stay Connected:</p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/eicpec" className="hover:text-pink-500 transition duration-300">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCg5HEJqrg5GC_MGWlgCBrVw" className="hover:text-red-500 transition duration-300">
                        <YouTube size={24} />
                    </a>
                    <a href="https://twitter.com/eic_pec?s=09" className="hover:text-blue-400 transition duration-300">
                        <X size={24} />
                    </a>
                    <a href="https://www.facebook.com/eicpec" className="hover:text-blue-600 transition duration-300">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/eicpec" className="hover:text-blue-500 transition duration-300">
                        <LinkedIn size={24} />
                    </a>
                </div>
            </div>

            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
                {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <img onClick={() => window.location.href = "https://pec.ac.in"} src="https://www.eicpec.in/assets/logos/pec.png" height="80" width="80" alt="PEC" className="mb-4 cursor-pointer" />
                    <img src="https://www.eicpec.in/assets/logos/eic.png" height="80" width="80" alt="EIC" />
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
    <li>
        <a className="relative transition duration-300 transform hover:scale-105 hover:text-gray-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                      after:bg-gray-300 hover:after:w-full after:transition-all after:duration-300" 
           href="/">Home</a>
    </li>
    <li>
        <a className="relative transition duration-300 transform hover:scale-105 hover:text-gray-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                      after:bg-gray-300 hover:after:w-full after:transition-all after:duration-300" 
           href="/team">Team</a>
    </li>
    <li>
        <a className="relative transition duration-300 transform hover:scale-105 hover:text-gray-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                      after:bg-gray-300 hover:after:w-full after:transition-all after:duration-300" 
           href="/passes">Buy Pass</a>
    </li>
    <li>
        <a className="relative transition duration-300 transform hover:scale-105 hover:text-gray-300 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                      after:bg-gray-300 hover:after:w-full after:transition-all after:duration-300" 
           href="/contact">Contact</a>
    </li>
</ul>

                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p>Entrepreneurship and Incubation Cell, Punjab Engineering College, Chandigarh 160012</p>
                    <div className="mt-4 flex items-center">
                        <Mail size={20} />
                        <a href="mailto:eicesummit@gmail.com" className="ml-2 text-green-400 underline hover:text-green-300 transition duration-300">eicesummit@gmail.com</a>
                    </div>
                    <div className="mt-4 flex items-center">
                        <Phone size={20} />
                        <a href="tel:+918427709189" className="ml-2 text-green-400 underline hover:text-green-300 transition duration-300">+91 84277 09189</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-8 text-gray-400">
                <p>Made with ❤️ by Tech Team</p>
                <p>© 2025 E-Summit PEC Chandigarh. All rights reserved.</p>
            </div>
        </Box>
    );
};

export default Footer;
