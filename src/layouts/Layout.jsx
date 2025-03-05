import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "../assets/bgesummit.png";

const Layout = ({ title, children, background = true }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <Header />

            {/* Main Content */}
            <main
                className="flex-grow bg-contain bg-center mt-16"
                style={background ? { backgroundImage: `url(${Background})` } : { backgroundColor: "black" }}
            >
                {children}
            </main>


            {/* Page Footer */}
            <Footer />
        </div>
    );
};

export default Layout;