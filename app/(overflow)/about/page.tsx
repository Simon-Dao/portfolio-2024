"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowSVG from "@/public/Arrow1.svg";
import ImageGallery from "@/components/imageGallery";
import { animateHelloText } from "@/utils/animation";

export default function About() {
  const helloAnimationParentRef = useRef<HTMLDivElement | null>(null);
  const [daysFromSchool, setDaysFromSchool] = useState<string>("0.000000");

  useEffect(() => {
    animateHelloText(helloAnimationParentRef);

    const interval = setInterval(() => {
      setDaysFromSchool(getNumberOfDaysFromSchool());
    }, 30);

    return () => clearInterval(interval);
  }, []);

  function getNumberOfDaysFromSchool() {
    const start = new Date("2022-09-25").getTime();
    const now = Date.now();
    const msPerDay = 1000 * 60 * 60 * 24;

    return ((now - start) / msPerDay).toFixed(6);
  }

  return (
    <div className="pt-32 pb-64 lg:px-24">
      <div className="px-10 lg:px-24">
        {/* HEADER */}
        <section className="flex flex-col items-center justify-center lg:flex-row">
          <Image
            className="rounded-full mr-0 lg:mr-10"
            src="/simon.jpg"
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
            <h1 className="text-4xl h-[60px] flex items-center">Hello</h1>
            <h1 className="text-4xl h-[60px] flex items-center">Hello</h1>
          </div>

          <h1 className="font-bold text-3xl mb-3 text-tt">About</h1>

          <p className="text-xl leading-relaxed mb-6">
            Hello! My name is Simon Dao, and I’m glad you’re here taking the
            time to get to know me a little better. As of writing this, it has
            been{" "}
            <span className="text-xl font-semibold text-tt">
              {daysFromSchool}
            </span>{" "}
            days since my first day at the University.
          </p>

          {/* PROGRAMMING JOURNEY */}
          <p className="text-xl leading-relaxed">
            My programming journey started when I was 14, when I realized I
            could turn the ideas in my head into things that actually worked. I
            began with small games and simple scripts—usually breaking more than
            I built—but every mistake taught me something new. That curiosity
            never faded. Over time, it turned into a real appreciation for how
            software can solve problems, help people, and bring ideas to life.
            What began as a hobby eventually became the foundation for my
            education, my career interests, and the work in this portfolio.
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
