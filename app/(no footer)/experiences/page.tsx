"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowSVG from "@/public/Arrow1.svg";
import ListSVG from "@/public/list.svg";
import GridSVG from "@/public/grid.svg";
import TransitionLink from "@/components/transitionLink";
import { animateHelloText } from "@/utils/animation";
import SvgButton from "@/components/svgButton";
import GenericButton from "@/components/genericButton";
import Experiences from "@/components/experiences";
function Projects() {
  const helloAnimationRef = useRef<any>(null);
  const [layoutMode, setLayoutMode] = useState("grid");
  useEffect(() => {
    animateHelloText(helloAnimationRef);
  }, []);

  return (
    <div className="px-0 lg:px-10 pb-64 pt-52">
      <div className="px-3 sm:px-24">
        <section className="flex justify-center">
          <div
            style={{ marginTop: "" }}
            className=" text-title m-0 select-none flex flex-col items-start"
          >
            <span className="text-6xl sm:text-8xl">My Experiences</span>
          </div>
      
        </section>

        <section className="w-full flex mt-14 pb-5">
          <div className="flex flex-col sm:flex-row w-full">
            
          </div>
          <div className="grow"></div>
         
        </section>
        <Experiences layoutState={[layoutMode, setLayoutMode]} />
      </div>
    </div>
  );
}

export default Projects;
