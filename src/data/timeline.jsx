import React from "react";

export const data = [
    {
        title: "2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <img
                            key={num}
                            src={`https://assets.aceternity.com/templates/startup-${num}.webp`}
                            alt={`startup template ${num}`}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Early 2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more examples of beautiful designs I built.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {["hero-sections", "features-section", "pro/bento-grids", "cards"].map((img) => (
                        <img
                            key={img}
                            src={`https://assets.aceternity.com/${img}.png`}
                            alt={`${img} template`}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Changelog",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Deployed 5 new components on Aceternity today
                </p>
                <ul className="mb-8 list-disc pl-4 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    {["Card grid component", "Startup template Aceternity", "Random file upload lol", "Himesh Reshammiya Music CD", "Salman Bhai Fan Club registrations open"].map((item, index) => (
                        <li key={index}>✅ {item}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-2 gap-4">
                    {["pro/hero-sections", "features-section", "pro/bento-grids", "cards"].map((img) => (
                        <img
                            key={img}
                            src={`https://assets.aceternity.com/${img}.png`}
                            alt={`${img} template`}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    ))}
                </div>
            </div>
        ),
    },
];