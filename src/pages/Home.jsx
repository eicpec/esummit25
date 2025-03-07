import React from "react";
import HeroParallax from "../components/ui/HeroParallax";
import Layout from "../layouts/Layout";
import Timeline from "../components/ui/Timeline"; // Ensure you have a Timeline component or library
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import VideoScroll from "../components/home/VideoScroll";
import { StickyScroll } from "../components/ui/sticky";
import StickyScrollRevealDemo from "../components/home/about";
import BG01 from "../assets/Landing Page/BG01.jpg"
import Speaker from "./Speaker";
import Sponsers from "./Sponsers"
// import BG02 from "../assets/Landing Page/BG02.HEIC"

const products = [
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    {
        // title: "Moonbeam",
        // link: "https://gomoonbeam.com",
        thumbnail: BG01,
    },
    
];

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
                    <StickyScrollRevealDemo />
                    <Speaker/>
                    <Sponsers/>
                </>
            } />
        </>
    );
}

export default Home;
