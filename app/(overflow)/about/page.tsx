"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ArrowSVG from "@/public/Arrow1.svg";
import ImageGallery from "@/components/imageGallery";
import { animateHelloText } from "@/utils/animation";

function About() {
    const helloAnimationParentRef = useRef<any>(null);
    const [daysFromSchool, setDaysFromSchool] = React.useState<string | null>(
        null
    );

    useEffect(() => {
        animateHelloText(helloAnimationParentRef);

        const interval = setInterval(() => {
            setDaysFromSchool(getNumberOfDaysFromSchool());
        }, 30);
        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    function getNumberOfDaysFromSchool() {
        const date1 = new Date("2022-09-25");
        const date2 = Date.now();

        const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day

        const diffInTime = Math.abs(date2 - date1.getTime());
        const diffInDays = (diffInTime / oneDay).toFixed(6);

        return diffInDays;
    }

    return (
        <div className="lg:px-24 pb-64 pt-32">
            {/* ...your app */}
            <div className="px-10 lg:px-24">
                <section className="flex flex-col items-center justify-center lg:flex-row">
                    <Image
                        className="rounded-full justify-self-end mr-10"
                        src="/simon.jpg"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                    <div
                        style={{ marginTop: "" }}
                        className="select-none flex flex-col"
                    >
                        <span className="text-4xl xl:text-6xl h-20 mt-10 flex">
                            About Me
                            <Image
                                className="ml-20 mb-6 self-end"
                                priority
                                src={ArrowSVG}
                                alt=""
                            />
                        </span>
                    </div>
                </section>

                <section className="flex">
                    <div className="w-screen">
                        <hr className="my-10" />
                    </div>
                </section>

                <article className="">
                    <div
                        ref={helloAnimationParentRef}
                        className="h-[60px] overflow-hidden"
                    >
                        <h1 className="text-4xl flex items-center h-[60px] ">Hello</h1>
                        <h1 className="text-4xl flex items-center h-[60px] ">Hello</h1>
                    </div>
                    <h1 className="font-bold text-3xl mb-3 text-tt">About</h1>
                    <p className="text-xl">
                        {`
              Hello! My name is Simon Dao, and I am excited you are taking the opportunity to get to know just a little more 
              about me through this Portfolio. At the time of making this portfolio, it has been 
                        `}
                        <span className="text-xl text-tt">
                            {getNumberOfDaysFromSchool()}
                        </span>

                        <span className="text-xl">
                            {` days since my first day at the university.`}
                        </span>
                    </p>

                    <hr className="my-10" />

                    <h1 className="text-5xl mb-6 mt-28">More of Me!</h1>
                    <ImageGallery />
                </article>
            </div>
        </div>
    );
}

export default About;
