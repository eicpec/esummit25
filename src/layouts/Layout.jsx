import React from "react";
// import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Helmet>
                <title>{title ? `${title} | PEC's E-Summit 2025` : "PEC's E-Summit 2025"}</title>
            </Helmet> */}
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
