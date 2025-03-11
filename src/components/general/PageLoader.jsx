import React from "react";
import LogoSmall from "../../assets/General/Logo_Vector_Image.png";
import Logo from "../../assets/General/esummit25logofull.png";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import Footer from "../../layouts/Footer";
import Register from "../../pages/Register";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-animation backdrop-blur-md z-50">
            <Link to={"/passes"} className="flex items-center gap-2 fixed -right-12 hover:-right-8 transition-all text-xl pb-10 rounded-t-lg text-white top-16 hover:bg-amber-500 hover:font-semibold bg-[#a1740c] px-3 py-2 -rotate-90">
                <IoTicketOutline />
                Passes
            </Link>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="animate-pulse">
                    <img
                        src={Logo}
                        alt="Loading"
                        height={100}
                        className="h-24 sm:h-32 md:h-40 transition-all duration-1000 ease-in-out"
                    />
                </div>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default PageLoader;
