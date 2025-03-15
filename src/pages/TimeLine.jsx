import React from "react";
import Layout from "../layouts/Layout";
import DAY1 from "../assets/Schedule/1.png";
import DAY2 from "../assets/Schedule/2.png";
import Guess from "../assets/Dignitaries/guess.png"

function TimelineDemo() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row mt-20 items-center gap-5 justify-center">
                <div className="my-6 w-full md:w-1/2 h-screen bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${Guess})` }}></div>
                <div className="my-6 w-full md:w-1/2 h-screen bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${Guess})` }}></div>
            </div>
        </Layout>
    );
}

export default TimelineDemo;