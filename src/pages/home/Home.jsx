import React from "react";
import HeroParallax from "../../components/ui/HeroParallax.jsx";
import Layout from "../../layouts/Layout.jsx";
import VideoScroll from "../../components/home/VideoScroll.jsx";
import WallofFame from "../../components/home/WallOfFame.jsx"
import PastSpeakers from "./PastSpeakers";
import { pvsData } from "../../data/pvsData.js"
import { sponsors } from "../../data/sponsors.js"
import { products } from "../../data/parallax.js"
import PastSponsors from "../../components/home/SponsorLogos.jsx";

function HeroParallaxDemo() {
    return (
        <Layout footer={false} children={<HeroParallax products={products} />} />
    );
}

function Home() {

    return (
        <>
            <Layout header={false} children={
                <>
                    <HeroParallaxDemo />
                    <VideoScroll />
                    <WallofFame />
                    <h1 className="mx-4 md:text-7xl text-5xl text-center text-white font-semibold">Previous Speakers</h1>
                    <PastSpeakers data={pvsData.speakers} direction={1} />
                    <h1 className="mx-4 md:text-7xl text-5xl text-center text-white font-semibold">Previous Investors</h1>
                    <PastSpeakers data={pvsData.investors} direction={0} />
                    <h1 className="mx-4 md:text-7xl text-5xl text-center text-white font-semibold">Previous Investors</h1>
                    <PastSponsors data={sponsors} direction={1} />
                    
                    {/* <Sponsers/> */}
                </>
            } />
        </>
    );
}

export default Home;
