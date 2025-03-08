import React from "react";
import { Box } from "@mui/material";
import { Instagram, YouTube, X, Facebook, LinkedIn, Mail, Phone } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box className="w-full mx-auto bg-gray-900 text-white p-10 shadow-xl shadow-gray-800">
            {/* Social Media Section */}
            <div className="flex justify-between items-center pb-6 border-b border-gray-700">
                <p className="text-lg font-semibold">Stay Connected:</p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/eicpec" className="hover:text-pink-500 transition">
                        <Instagram size={24} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCg5HEJqrg5GC_MGWlgCBrVw" className="hover:text-red-500 transition">
                        <YouTube size={24} />
                    </a>
                    <a href="https://twitter.com/eic_pec?s=09" className="hover:text-blue-400 transition">
                        <X size={24} />
                    </a>
                    <a href="https://www.facebook.com/eicpec" className="hover:text-blue-600 transition">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/eicpec" className="hover:text-blue-500 transition">
                        <LinkedIn size={24} />
                    </a>
                </div>
            </div>
            
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
                {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <img src="https://www.eicpec.in/assets/logos/pec.png" height="80" width="80" alt="PEC" className="mb-4" />
                    <img src="https://www.eicpec.in/assets/logos/eic.png" height="80" width="80" alt="EIC" />
                </div>
                
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a className="hover:text-gray-300 transition" href="/">Home</a></li>
                        <li><a className="hover:text-gray-300 transition" href="/team">Team</a></li>
                        <li><a className="hover:text-gray-300 transition" href="/pass">Buy Pass</a></li>
                        <li><a className="hover:text-gray-300 transition" href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p>Entrepreneurship and Incubation Cell, Punjab Engineering College, Chandigarh 160012</p>
                    <div className="mt-4 flex items-center">
                        <Mail size={20} />
                        <p className="ml-2 text-green-400 underline">eicpec@pec.edu.in</p>
                    </div>
                    <div className="mt-4 flex items-center">
                        <Phone size={20} />
                        <p className="ml-2 text-green-400 underline">+91 XXXXX XXXXX</p>
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