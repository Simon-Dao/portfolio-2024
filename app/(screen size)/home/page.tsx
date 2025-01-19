"use client";
import React, { useEffect, useRef, useState } from "react";
import DavidScene from "@/components/davidHead";
import gsap from "gsap";
import Image from "next/image";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Magnetic from "@/components/magnetic";
import TransitionLink from "@/components/transitionLink";

function Home() {
  return (
    <>
      <NormalView />
      <MobileView />
    </>
  );
}

function MobileView() {
  const containerRef = useRef(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<string>("500px");

  const handleTitleResize = () => {
    const titleWidth = titleRef.current?.scrollWidth || 0;
    setCarouselWidth(titleWidth + "px");
  };

  useEffect(() => {
    const t1 = gsap.timeline({ repeat: -1 });
    const contentWidth = c1.current?.scrollWidth || 0;
    const titleWidth = titleRef.current?.scrollWidth || 0;

    setCarouselWidth(titleWidth + "px");

    t1.set(c1.current, {
      translateX: 0,
    })
      .to(c1.current, {
        translateX: -contentWidth,
        ease: "linear",
        duration: 10, // Adjust the duration to your liking
      })
      .set(c1.current, { translateX: contentWidth });

    const t2 = gsap.timeline({ repeat: -1 });
    t2.set(c2.current, {
      translateX: 0,
    })
      .to(c2.current, {
        translateX: -contentWidth,
        ease: "linear",
        duration: 10, // Adjust the duration to your liking
      })
      .set(c2.current, { translateX: contentWidth });
  }, []);

  return (
    <div className="sm:hidden grow flex flex-col justify-center items-center bg-black">
      <h1
        ref={titleRef}
        onResize={handleTitleResize}
        className="text-6xl m-0 select-none pt-16"
      >
        Simon Dao
      </h1>
      <div
        className="overflow-x-hidden flex h-20"
        style={{ width: carouselWidth }}
      >
        <div
          ref={c1}
          className="text-lg xs:text-sd m-0 select-none text-nowrap flex"
        >
          <span className="px-3 text-sm xs:text-xl ">Developer</span>
          <span className="px-3 text-sm xs:text-xl ">Designer</span>
          <span className="px-3 text-sm xs:text-xl ">Problem-Solver</span>
        </div>
        <div
          ref={c2}
          className="text-lg xs:text-sd m-0 select-none text-nowrap flex"
        >
          <span className="px-3 text-sm xs:text-xl ">Developer</span>
          <span className="px-3 text-sm xs:text-xl ">Designer</span>
          <span className="px-3 text-sm xs:text-xl ">Problem-Solver</span>
        </div>
      </div>

      <div className="grow w-3/5">
        {/* <DavidScene /> */}
        <Image
          src="/public/club_fair.jpg"
          alt="Description of image"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
    </div>
  );
}

function NormalView() {
  return (
    <div className="grow hidden sm:flex flex-row justify-center items-center bg-black">
      <div className="flex flex-col-reverse md:flex-row h-4/5 w-4/5">
        <div className="flex grow flex-col self-center w-1/2 items-center justify-center">
          <h1 className="text-title text-white m-0 select-none">Simon Dao</h1>

          <Magnetic>
            <div className="grow flex justify-center items-center font-bold">
              <div className="bg-tt rounded-md px-10 py-5">
                <TransitionLink
                  text={"text-lg"}
                  hoverAnimation={false}
                  href="/about"
                  label={"Learn More"}
                />
              </div>
            </div>
          </Magnetic>
        </div>
        <div className="grow flex items-center justify-center">
          <Image
            className="rounded-full"
            src="/simon.jpg"
            alt="Description of image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Home;
