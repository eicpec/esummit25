import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import { TricolorEffect } from "../components/general/tricoloreffect";
// import Background from "../assets/General/bgesummit.png";

const Background = "https://www.ecell.in/esummit/media/bg-1-YEBHC4ZZ.webp";

const Layout = ({ mouseeffect = true, title = "E-Summit PEC - Catalyzing Viksit Bharat", children, background = true, header = true, footer = true }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Set Page Title */}
            <Helmet>
                <title>{title}</title>
            </Helmet>

            {/* Page Header */}
            {header && <Header />}

            {/* Main Content */}
            <main
                className="flex-grow min-h-screen bg-fixed bg-cover bg-center"
                style={background ? { backgroundImage: `url(${Background})` } : { backgroundColor: "black" }}
            >
                {children}
            </main>

            {/* Page Footer */}
            {footer && <Footer />}
            {mouseeffect ? <TricolorEffect /> : ""}
        </div>
    );
};

export default Layout;
