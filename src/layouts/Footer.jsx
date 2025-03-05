import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import React from "react";

function Footer() {
    return (
        <Box className="bg-black text-white w-full p-8">
            <div className="flex justify-between items-center">
                <p>Get connected with us on social networks:</p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/eicpec?utm_medium=copy_link">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCg5HEJqrg5GC_MGWlgCBrVw">
                        <YouTubeIcon />
                    </a>
                    <a href="https://twitter.com/eic_pec?s=09">
                        <XIcon />
                    </a>
                    <a href="https://www.facebook.com/eicpec/?paipv=0&eav=AfZKOMe1ryOscKQ7579NZoVXg7HzRmq3Nk-_iedc5T01oeB0u7IwPwOdpu4gDpEujhM&_rdr">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/company/eicpec">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <hr className="my-6 border-gray-700" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                    <img
                        src="https://www.eicpec.in/assets/logos/pec.png"
                        height="80"
                        width="80"
                        alt="PEC"
                    />
                    <img
                        src="https://www.eicpec.in/assets/logos/eic.png"
                        height="80"
                        width="80"
                        alt="EIC"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <a className="block mt-2 text-white no-underline" href="/">Home</a>
                    <a className="block mt-2 text-white no-underline" href="/team">Team</a>
                    <a className="block mt-2 text-white no-underline" href="/pass">Buy Pass</a>
                    <a className="block mt-2 text-white no-underline" href="/contact">Contact</a>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <p>Entrepreneurship and Incubation Cell, Punjab Engineering College, Chandigarh 160012</p>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <FolderSharedIcon fontSize="medium" />
                            <p className="ml-2">For Queries And Collaboration</p>
                        </div>
                        <p className="text-green-500 underline">eicpec@pec.edu.in</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <PermPhoneMsgIcon fontSize="medium" />
                            <p className="ml-2">For Queries Contact</p>
                        </div>
                        <p className="text-green-500 underline">eicpec@pec.edu.in</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>Made with ▼ by Tech Team</p>
                <p>© 2024 E-Summit PEC Chandigarh. All rights reserved.</p>
            </div>
        </Box>
    );
}

export default Footer;