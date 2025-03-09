import React from "react";
import Layout from "../layouts/Layout";
import Timeline from "../components/ui/Timeline";
import { data } from "../data/timeline"


function TimelineDemo() {
    return <Layout children={<Timeline data={data} />} />;
}

export default TimelineDemo;