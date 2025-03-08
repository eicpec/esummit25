import React from "react";
import HeroParallax from "../components/ui/HeroParallax";
import Layout from "../layouts/Layout";
import VideoScroll from "../components/home/VideoScroll";
import Speaker from "./Speaker";
import { speakers } from "../data/speakers"
import { sponsors } from "../data/sponsors"
import { products } from "../data/parallax"

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
                    <Speaker title={"Previous Speakers"} data={speakers} direction={1} />
                    <Speaker data={sponsors} direction={0} />
                </>
            } />
        </>
    );
}

export default Home;
