import React from "react";
import LogoSmall from "../../assets/General/Logo_Vector_Image.png";
import Logo from "../../assets/General/esummit25logofull.png";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-animation backdrop-blur-md z-50">
            <div className="animate-pulse">
                <img
                    src={Logo}
                    alt="Loading"
                    height={100}
                    className="h-24 sm:h-32 md:h-40 transition-all duration-1000 ease-in-out"
                />
            </div>
        </div>
    );
};

export default PageLoader;
