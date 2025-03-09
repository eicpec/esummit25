import React from "react";
import HeroParallax from "../components/ui/HeroParallax";
import Layout from "../layouts/Layout";
import VideoScroll from "../components/home/VideoScroll";
import WallofFame from "../components/home/WallOfFame.jsx"
import PastSpeakers from "./PastSpeakers";
import Speakers from "./Speakers"
import { speakers } from "../data/speakers"
import { sponsors } from "../data/sponsors"
import { products } from "../data/parallax"
import Sponsers from "./Sponsers"

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
