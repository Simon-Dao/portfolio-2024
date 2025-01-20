"use client";
import React, { useState, useRef, useEffect } from "react";
import GridHeader from "./gridHeader";
import gsap from "gsap";
import ImageUnavailableSVG from "@/public/image-unavailable.svg";
import Image from "next/image";
import GenericButton from "./genericButton";

function Experiences({ layoutState }: any) {
  interface ProjectProps {
    name: string;
    links: Array<string>;
    stack: string;
    src?: string;
    blurb: string;
    type: string;
  }

  const colorPalleteTypeMap = new Map<string, string>([
    ["", "#ffffff"], // White
    ["Website", "#FF6F61"], // Vibrant coral
    ["Full Stack Web App", "#8461DC"], // Rich purple
    ["Robotics", "#88B04B"], // Fresh green
    ["Multiplayer Game", "#FFA500"], // Orange
    ["Web App", "#00CED1"], // Dark turquoise
    ["Mobile App", "#1E90FF"], // Dodger blue
    ["Desktop App", "#FF1493"], // Deep pink
    ["API", "#7FFF00"], // Chartreuse
    ["Machine Learning", "#FFD700"], // Gold
  ]);

  const experiences: ProjectProps[] = [
    {
      name: "UWB ACM",
      stack: "React, HTML, CSS",
      links: ["https://uwbacm.org/index.html"],
      blurb: "I experienceed on updating all pages for my club website!",
      src: "/uwbacmsite.png",
      type: "Website",
    },
    {
      name: "UWB Office of Admissions",
      stack: "React, Firebase, Express, Node.js",
      links: ["https://github.com/Simon-Dao/full-stack-todo.git"],
      src: "/uwb.jpg",
      blurb:
        "A todo list application that utilizes an express backend to communicate to firebase.",
      type: "Full Stack Web App",
    },
    {
      name: "Computing for All",
      stack: "React, css",
      links: ["https://github.com/Simon-Dao/pathfinding-visualizer.git"],
      blurb:
        "A web app that visualizes pathfinding algorithms. Users can edit variables such as wall placement, starting location, end location, and go through the algorithm step by step",
      type: "Web App",
      src: "/cfa.jpg",
    },
    {
      name: "ID Tech",
      stack: "React, MongoDB, Express, Nodejs",
      links: ["https://github.com/Simon-Dao/Simple-Notetaking-App.git"],
      blurb: "A full stack web application heavily based off Microsoft Onenote",
      type: "Full Stack Web App",
      src: "/idtech.jpg",
    },
    {
      name: "Trickfire Robotics",
      stack: "html, css, javascript, c#, Unity, Photon Netexperience",
      links: [
        "https://github.com/Simon-Dao/Farm-Wars-Dev.git",
        "https://simon-dao.github.io/Farm-Wars-Build/",
        "https://docs.google.com/presentation/d/1PZE_H7ffgPpyPTAEib3EH44JQlLeMJCllhSTkeb5sv4/edit#slide=id.g2e1464ce710_0_5",
      ],
      blurb:
        "This game is a project for a game development class. I experienceed in a team of 4 and was in charge of implementing multiplayer. This game is heavily based off of the board game Catan but we added an extra twist by making everything real time instead of turn based",
      src: "/FullRoverPhoto.png",
      type: "Multiplayer Game",
    },
    {
      name: "Portfolio Website",
      stack: "Nextjs, React, Tailwind, Gsap, Three.js",
      links: ["https://simondao.me"],
      blurb:
        "A website to introduce myself. It Features animations, 3d models, and a sleek UI! This is a passion project I made over the summer of 2024 and took a few weeks to complete",
      src: "/portfoliowebsitescreenshot.png",
      type: "Web App",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectProps>(
    experiences[0]
  );
  const [layoutMode, setLayoutMode] = layoutState;
  const [modalVisible, setModalVisible] = useState<Boolean>(false);
  const modalOuter = useRef<HTMLDivElement>(null);
  const modalInner = useRef<HTMLDivElement>(null);

  const handleMouseEnterList = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: "50px",
      opacity: 0.4,
      scaleX: 1.01,
      duration: 0.4,
    });
  };

  const handleMouseLeaveList = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: "20px",
      opacity: 1,
      scale: 1,
      duration: 0.4,
    });
  };

  const handleMouseEnterGrid = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      opacity: 0.4,
      scale: 1.05,
      duration: 0.4,
    });
  };

  const handleMouseLeaveGrid = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
    });
  };

  const openModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    gsap.to(modalOuter.current, {
      opacity: 0.0,
      duration: 0.5,
      ease: "expo.inOut",
    });
    gsap.to(modalInner.current, {
      scale: 0,
      duration: 0.5,
      ease: "expo.inOut",
      onComplete: () => setModalVisible(false),
    });
  };

  useEffect(() => {
    if (modalVisible) {
      gsap.to(modalOuter.current, {
        opacity: 1,
        duration: 0.5,
        ease: "expo.inOut",
      });
      gsap.to(modalInner.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "expo.inOut",
      });
    }
  }, [modalVisible]);

  useEffect(() => {
    const listItems = document.querySelectorAll(".list-element");
    const gridItems = document.querySelectorAll(".grid-element");

    if (layoutMode === "list") {
      gsap.fromTo(
        listItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    } else {
      gsap.fromTo(
        gridItems,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 }
      );
    }
  }, [layoutMode]);

  const renderListItems = () => (
    <div className="flex flex-col divide-y select-none">
      <div className="grid grid-cols-3 pb-10">
        <div className="text-gray-300 pt-14">Name</div>
        <div className="text-gray-300 pt-14">Experience Type</div>
        <div className="text-gray-300 pt-14">Date</div>
      </div>
      {experiences.map((project, index) => (
        <div
          key={index}
          className={`list-element grid grid-cols-3 py-16 gap-5 cursor-pointer grid-row-${index} `}
          onClick={() => openModal(project)}
          onMouseEnter={handleMouseEnterList}
          onMouseLeave={handleMouseLeaveList}
        >
           <img
              className="rounded-lg p-5 w-5/12"
              src="/family_long_dress.jpg"
              alt="Description of image"
            ></img>
          <div className="text-lg sm:text-3xl flex items-center bold ">
            {project.name}
          </div>
          <div className="text-sm sm:text-2xl flex items-center">
            {project.stack || <div className="text-pt">Unavailable</div>}
          </div>
          <div className="text-sm sm:text-2xl flex items-center">
            {project.type}
          </div>
        </div>
      ))}
    </div>
  );

  const renderGridItems = () => (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {experiences.map((project, index) => (
          <div
            key={index}
            className="grid-element relative overflow-hidden rounded-lg shadow-lg cursor-pointer flex flex-col"
            style={{ backgroundColor: "#1f2024e9" }}
            onClick={() => openModal(project)}
            onMouseEnter={handleMouseEnterGrid}
            onMouseLeave={handleMouseLeaveGrid}
          >
            <div
              className="h-48 relative"
              style={{ backgroundColor: colorPalleteTypeMap.get(project.type) }}
            >
              <Image
                src={project.src ? project.src : ImageUnavailableSVG}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="h-30 p-10">
              <h1 className="text-2xl">{project.name}</h1>
              <h2 className="text-sdNoSize2">
                {project.stack || (
                  <h2 className="text-pt">Tech Stack Unavailable</h2>
                )}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {modalVisible && (
        <div
          onClick={closeModal}
          ref={modalOuter}
          className="fixed inset-0 flex items-center justify-center z-40 bg-gray-900 bg-opacity-75"
        >
          <div
            ref={modalInner}
            className="bg-qt h-3/4 w-3/4 p-6 rounded-lg shadow-lg flex flex-col px-5 sm:px-20"
            style={{ transform: "scale(0)" }}
          >
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-tt transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {layoutMode == "list" ? renderListItems() : renderGridItems()}
    </div>
  );
}

export default Experiences;
