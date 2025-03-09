import React from "react";
import HeroParallax from "../components/ui/HeroParallax";
import Layout from "../layouts/Layout";
import VideoScroll from "../components/home/VideoScroll";
import PastSpeakers from "./PastSpeakers";
import Speakers from "./Speakers"
import { speakers } from "../data/speakers"
import { sponsors } from "../data/sponsors"
import { products } from "../data/parallax"
import Sponsers from "./Sponsers"

function HeroParallaxDemo() {
    return (
        <Layout background={false} footer={false} children={<HeroParallax products={products} />} />
    );
}

function Home() {

    return (
        <>
            <Layout header={false} children={
                <>
                    <HeroParallaxDemo />
                    <VideoScroll />
                    <PastSpeakers title={"Previous Speakers"} data={speakers} direction={1} />
                    <PastSpeakers data={sponsors} direction={0} />
                    <Sponsers/>
                    <Speakers/>
                </>
            } />
        </>
    );
}

export default Home;
