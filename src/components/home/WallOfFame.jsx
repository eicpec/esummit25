import { useRef } from "react";
import Column from "./Column";
import {
    useScroll,
    motion,
    useMotionValueEvent,
    useTransform,
} from "framer-motion";
import styles from "@/styles/landing/wall.module.scss";

const WallofFame = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end ", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [1000, 0]);
    // useMotionValueEvent(y1, "change", (latest) => {
    //     console.log(latest);
    // });
    return (
        <motion.div
            ref={container}
            style={{
                backgroundColor: "#141414",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    backgroundColor: "#141414",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}
                className={styles.deskWall}
            >
                <Column images={["/assets/wallOfFame/1.jpg"]} y={y1} />
                <Column
                    images={[
                        "/assets/wallOfFame/2.jpg",
                        "/assets/wallOfFame/3.jpg",
                        "/assets/wallOfFame/4.jpg",
                    ]}
                    y={y2}
                />
                <Column images={["/assets/wallOfFame/5.jpg"]} y={y1} />
                <Column
                    images={[
                        "/assets/wallOfFame/6.jpg",
                        "/assets/wallOfFame/7.jpg",
                        // "<YoutubeEmbed />",
                        "/assets/wallOfFame/8.jpg",
                    ]}
                    y={y2}
                />
            </div>
            <div
                style={{
                    backgroundColor: "#141414",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}
                className={styles.tabWall}
                hidden
            >
                <Column
                    images={[
                        "/assets/wallOfFame/1.jpg",
                        "/assets/wallOfFame/2.jpg",
                    ]}
                    y={y1}
                />
                <Column
                    images={[
                        "/assets/wallOfFame/3.jpg",
                        "/assets/wallOfFame/4.jpg",
                        "/assets/wallOfFame/5.jpg",
                        "/assets/wallOfFame/6.jpg",
                    ]}
                    y={y2}
                />
                <Column
                    images={[
                        // "<YoutubeEmbed />",
                        "/assets/wallOfFame/7.jpg",
                        "/assets/wallOfFame/8.jpg",
                    ]}
                    y={y1}
                />
            </div>
            <div
                style={{
                    backgroundColor: "#141414",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}
                className={styles.mobWall}
                hidden
            >
                <Column
                    images={[
                        "/assets/wallOfFame/1.jpg",
                        "/assets/wallOfFame/2.jpg",
                        "/assets/wallOfFame/3.jpg",
                    ]}
                    y={y1}
                />
                <Column
                    images={[
                        "/assets/wallOfFame/4.jpg",
                        "/assets/wallOfFame/5.jpg",
                        "/assets/wallOfFame/6.jpg",
                        // "<YoutubeEmbed />",
                        "/assets/wallOfFame/7.jpg",
                        "/assets/wallOfFame/8.jpg",
                    ]}
                    y={y2}
                />
            </div>
        </motion.div>
    );
};

export default WallofFame;