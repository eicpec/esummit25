import React from "react";
import HeroParallax from "../../components/ui/HeroParallax.jsx";
import Layout from "../../layouts/Layout.jsx";
import VideoScroll from "../../components/home/VideoScroll.jsx";
import WallofFame from "../../components/home/WallOfFame.jsx"
import PastSpeakers from "./PastSpeakers";
import Speakers from "../Speakers.jsx"
import { speakers } from "../../data/speakers.js"
import { sponsors } from "../../data/sponsors.js"
import { products } from "../../data/parallax.js"
import Sponsers from "../Sponsers.jsx"

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
                    <WallofFame/>
                    <PastSpeakers title={"Previous Speakers"} data={speakers} direction={1} />
                    <PastSpeakers data={sponsors} direction={0} />
                    {/* <Sponsers/> */}
                </>
            } />
        </>
    );
}

export default Home;
