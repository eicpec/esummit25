import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import Background from "../assets/bgesummit.png";

const Layout = ({ title = "E-Summit PEC - Catalyzing Viksit Bharat", children, background = true, header = true, footer = true }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Set Page Title */}
            <Helmet>
                <title>{"" + title}</title>
            </Helmet>

            {/* Page Header */}
            {header && <Header />}

            {/* Main Content */}
            <main
                className="flex-grow bg-contain bg-center"
                style={background ? { backgroundImage: `url(${Background})` } : { backgroundColor: "black" }}
            >
                {children}
            </main>

            {/* Page Footer */}
            {footer && <Footer />}
        </div>
    );
};

export default Layout;
