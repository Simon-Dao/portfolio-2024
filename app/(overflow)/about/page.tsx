"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowSVG from "@/public/Arrow1.svg";
import ImageGallery from "@/components/imageGallery";
import { animateHelloText } from "@/utils/animation";

export default function About() {
    const helloAnimationParentRef = useRef<HTMLDivElement | null>(null);
    const [yearsFromBirth, setYearsFromBirth] = useState<string>("0.000000");

    useEffect(() => {
        animateHelloText(helloAnimationParentRef);

        const interval = setInterval(() => {
            setYearsFromBirth(getNumberOfYearsFromDate("2004-08-22"));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    function getNumberOfYearsFromDate(dateString: string) {
        const start = new Date(dateString).getTime();
        const now = Date.now();
        const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // include leap years

        return ((now - start) / msPerYear).toFixed(8);
    }

    return (
        <div className="pt-32 pb-64 lg:px-24">
            <div className="px-10 lg:px-24">
                {/* HEADER */}
                <section className="flex flex-col items-center justify-center lg:flex-row">
                    <Image
                        className="rounded-full mr-0 lg:mr-10"
                        src="/headshotabout.jpg"
                        width={300}
                        height={300}
                        alt="Picture of Simon"
                    />

                    <div className="select-none flex flex-col mt-10">
                        <span className="text-4xl xl:text-6xl flex items-end">
                            About Me
                            <Image
                                className="ml-6 mb-2 xl:ml-12 xl:mb-4"
                                priority
                                src={ArrowSVG}
                                alt="Arrow"
                            />
                        </span>
                    </div>
                </section>

                {/* DIVIDER */}
                <hr className="my-10" />

                {/* INTRO ANIMATION */}
                <article>
                    <div
                        ref={helloAnimationParentRef}
                        className="h-[60px] overflow-hidden mb-6"
                    >
                        <h1 className="text-4xl h-[60px] flex items-center">
                            Hello
                        </h1>
                        <h1 className="text-4xl h-[60px] flex items-center">
                            Hello
                        </h1>
                    </div>

                    <h1 className="font-bold text-3xl mb-3 text-tt">About</h1>

                    <p className="text-xl leading-relaxed mb-6">
                        My name is Simon Dao. I{"'"}m a{" "}
                        <span className="text-xl font-semibold text-tt">
                            {yearsFromBirth}
                        </span>{" "}
                        year old computer science student at the {" "}
                        <span className="text-tt">University of Washington</span>.
                    </p>

                    {/* PROGRAMMING JOURNEY */}
                    <p className="text-xl leading-relaxed">
                        I started programming at 14, teaching myself Java so I
                        could contribute to my high school’s robotics team and
                        build custom Minecraft mods. That curiosity grew into
                        building full-stack apps and shipping
                        engineering projects that impact hundreds of people.
                        That progression continues to guide my work and the
                        projects in this portfolio.
                    </p>

                    <p className="text-xl leading-relaxed">
                        Outside of coding, I’m involved in leadership roles for
                        my school’s ACM chapter and robotics clubs, where I help
                        organize hackathons and mentor younger students. I also
                        enjoy hiking, rockclimbing, drawing, MMA, and keeping up with tech news.
                    </p>

                    <hr className="my-16" />

                    {/* GALLERY SECTION */}
                    <h1 className="text-5xl mb-6 mt-20">More of Me!</h1>
                    <ImageGallery />
                </article>
            </div>
        </div>
    );
}
