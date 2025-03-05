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
        <Box className="bg-black text-white w-full h-full p-8 bottom-0">
            <div className="flex justify-between">
                <p>Get connected with us on social networks:</p>
                <div className="flex w-1/3 justify-between">
                    <a href="https://www.instagram.com/eicpec?utm_medium=copy_link">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCg5HEJqrg5GC_MGWlgCBrVw">
                        <YouTubeIcon className="ml-4" />
                    </a>
                    <a href="https://twitter.com/eic_pec?s=09">
                        <XIcon className="ml-4" />
                    </a>
                    <a href="https://www.facebook.com/eicpec/?paipv=0&eav=AfZKOMe1ryOscKQ7579NZoVXg7HzRmq3Nk-_iedc5T01oeB0u7IwPwOdpu4gDpEujhM&_rdr">
                        <FacebookIcon className="ml-4" />
                    </a>
                    <a href="https://www.linkedin.com/company/eicpec">
                        <LinkedInIcon className="ml-4" />
                    </a>
                </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-12">
                    <img
                        src="https://www.eicpec.in/assets/logos/pec.png"
                        className="mb-3 mr-5"
                        height="80"
                        width="80"
                        alt="E-summit 2024 | PEC"
                    />
                    <img
                        src="https://www.eicpec.in/assets/logos/eic.png"
                        className="mb-5"
                        height="80"
                        width="80"
                        alt="E-summit 2024 | PEC"
                    />
                    <p>
                        Entrepreneurship and Incubation Cell at PEC operates under the Ministry of Education's Innovation Cell
                        Programs since 2015. EIC provides mentoring in entrepreneurship, achieving its goal of nurturing
                        businesses.
                    </p>
                </div>
                <div className="flex-1 flex flex-col text-center md:flex-row md:text-left gap-4 p-12">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <a className="block mt-2 text-white no-underline" href="/">Home</a>
                        <a className="block mt-2 text-white no-underline" href="/team">Team</a>
                        <a className="block mt-2 text-white no-underline" href="/pass">Buy Pass</a>
                        <a className="block mt-2 text-white no-underline" href="/contact">Contact</a>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold">Contact</h2>
                        <p>
                            Entrepreneurship and Incubation Cell, Punjab Engineering College, Chandigarh 160012
                        </p>
                        <br />
                        <div className="flex items-center">
                            <FolderSharedIcon fontSize="medium" />
                            <p className="ml-2">For Queries And Collaboration</p>
                        </div>
                        <p className="text-green-500 underline">eicpec@pec.edu.in</p>
                        <br />
                        <div className="flex items-center">
                            <PermPhoneMsgIcon fontSize="medium" />
                            <p className="ml-2">For Queries Contact</p>
                        </div>
                        <p className="text-green-500 underline">eicpec@pec.edu.in</p>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Footer;
