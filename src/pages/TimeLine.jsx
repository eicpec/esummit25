import React from "react";
import Layout from "../layouts/Layout";
import DAY1 from "../assets/Schedule/1.png"
import DAY2 from "../assets/Schedule/2.png"

function TimelineDemo() {
    return <Layout children={
        <>
            <div className="flex mt-20 items-center gap-5 justify-center">
                <img className=" my-6 h-screen w-fit" src={DAY1} />
                <img className=" my-6 h-screen w-fit" src={DAY2} />
            </div>
        </>
    } />;
}

export default TimelineDemo;