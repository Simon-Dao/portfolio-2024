"use client";
import React, { useState, useRef, useEffect } from "react";
import GridHeader from "./gridHeader";
import gsap from "gsap";
import ImageUnavailableSVG from "@/public/image-unavailable.svg";
import Image from "next/image";
import ListHeader from "./listHeader";

/* -------------------------------------------------------
   EXPERIENCE COMPONENT
------------------------------------------------------- */

function Exp({ layoutState }: any) {
  interface ExperienceProps {
    name: string;
    dates: string;
    src?: string;
    blurbs: Blurb[];
    type: string;
  }

  interface Blurb {
    title?: string;
    imgLink: string;
    blurb: string;
    img: string;
  }

  /* -------------------------------------------------------
     COLOR MAP FOR TYPES
  ------------------------------------------------------- */
  const colorPalleteTypeMap = new Map<string, string>([
    ["", "#ffffff"],
    ["Internship", "#FF6F61"],
    ["Part-Time", "#8461DC"],
    ["Full-Time", "#88B04B"],
    ["Campus Activity", "#FFA500"],
    ["Web App", "#00CED1"],
    ["Mobile App", "#1E90FF"],
    ["Desktop App", "#FF1493"],
    ["API", "#7FFF00"],
    ["Machine Learning", "#FFD700"],
  ]);

  /* -------------------------------------------------------
     EXPERIENCE DATA
  ------------------------------------------------------- */
  const experiences: ExperienceProps[] = [
    {
      name: "Software Engineer Intern - Smart City Research Lab (University of Bamberg)",
      dates: "June 2025 - August 2025",
      blurbs: [
        {
          title: "My Time in Germany",
          blurb: `During the summer of 2025, I had the incredible opportunity to work as a Software Engineer Intern at the Smart City Research Lab in Bamberg, Germany.
          I worked on real-world problems and contributed to infrastructure that supports the local community.`,
          img: "/smartcitypresentation.jpg",
          imgLink: "",
        },
        {
          title: "My Project",
          blurb: `My main project was developing a centralized storage system to collect and standardize sensor data from different teams across the city. 
          I built pipelines, ran SensorThings API endpoints, and stored everything in a unified architecture.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "/smartcity.jpg",
      type: "Internship",
    },

    {
      name: "UWB ACM - Vice President",
      dates: "Fall 2022 - Spring 2025",
      blurbs: [
        {
          title: "My ACM Journey",
          blurb: `My journey with ACM has been the most impactful part of my university experience. I learned event planning, leadership, community-building, 
          and spearheaded campus-wide events including hackathons with 350+ students.`,
          img: "/uwbhacks.jpg",
          imgLink: "",
        },
        {
          title: "2025 and Beyond",
          blurb: `Our goal this year is to host the largest hackathon yet and expand ACM’s reach across disciplines on campus.`,
          img: "/uwbhacksaiarticle.png",
          imgLink:
            "https://www.uwb.edu/news/2024/05/24/success-a-product-of-growth-and-collaboration",
        },
      ],
      src: "/uwbhacks.jpg",
      type: "Campus Activity",
    },

    {
      name: "Computing for All - Data Science Intern",
      dates: "Sep 2023 - Jun 2024",
      blurbs: [
        {
          title: '"Computing for All"',
          blurb: `Computing for All is a nonprofit providing digital skills training to underserved groups. I joined to gain technical experience, 
          but I stayed because I aligned deeply with the mission.`,
          img: "/cfatmobile.jpg",
          imgLink:
            "https://www.linkedin.com/posts/mandiravirmani_computingforall-digitalskillsforall-pre-activity-6970484332683558912-prYm/",
        },
        {
          blurb: `I helped overhaul CFA’s student database, automated attendance systems, and taught computer skills to refugees.`,
          img: "/cfarefugees.jpg",
          imgLink:
            "https://www.linkedin.com/posts/digitalskillsforall_computingforall-digitalskillsforall-seattlejobsinitiative-activity-6974154304249094145-ozR2/",
        },
      ],
      src: "/cfa.jpg",
      type: "Internship",
    },

    {
      name: "ID Tech - Programming Instructor",
      dates: "Jun 2023 - Aug 2023",
      blurbs: [
        {
          blurb: `I taught students ages 7–17 the fundamentals of coding, VR game development, and creative problem solving.`,
          img: "/idtech.jpg",
          imgLink: "",
        },
        {
          blurb: `Teaching younger students forced me to rethink concepts and explain them clearly — improving my own understanding.`,
          img: "/idtechbc.jpg",
          imgLink: "",
        },
      ],
      src: "/idtech.jpg",
      type: "Full-Time",
    },

    {
      name: "Collaboratory Makerspace - Volunteer",
      dates: "Apr 2023 - Jun 2024",
      blurbs: [
        {
          title: "My Favorite Space on Campus",
          blurb: `The Collaboratory is where I learned 3D printing, laser cutting, and met some of my closest friends.`,
          img: "/Group_Shot_Fin.png",
          imgLink: "",
        },
        {
          blurb: `I’ve helped dozens of students with projects — from 3D prints to farm automation prototypes.`,
          img: "/collabmovie.png",
          imgLink: "",
        },
      ],
      src: "/Group_Shot_Fin.png",
      type: "Campus Activity",
    },

    {
      name: "UWB Office of Admissions - Data Science Intern",
      dates: "Mar 2022 - Oct 2023",
      blurbs: [
        {
          title: "The Office of Admissions",
          blurb: `I improved the UX of internal student portals and added features including a confetti animation on acceptance pages.`,
          img: "",
          imgLink: "",
        },
        {
          title: "Data Science Intern",
          blurb: `I worked heavily with student datasets and reports, which influenced department-level decision making.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "/uwb.jpg",
      type: "Internship",
    },

    {
      name: "Trickfire Robotics - Computer Vision Lead",
      dates: "Sep 2022 - Jun 2024",
      blurbs: [
        {
          title: "My Time at Trickfire Robotics",
          blurb: `I built computer vision systems for drones, integrating object detection and real-time automation.`,
          img: "/FullRoverPhoto.png",
          imgLink: "",
        },
      ],
      src: "/FullRoverPhoto.png",
      type: "Campus Activity",
    },
  ];

  /* -------------------------------------------------------
     STATE
  ------------------------------------------------------- */
  const [selectedExperience, setSelectedExperience] = useState<ExperienceProps>(
    experiences[0],
  );

  const [layoutMode] = layoutState;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalOuter = useRef<HTMLDivElement>(null);
  const modalInner = useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------
     HOVER ANIMATIONS
  ------------------------------------------------------- */
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

  /* -------------------------------------------------------
     MODAL LOGIC
  ------------------------------------------------------- */
  const openModal = (project: ExperienceProps) => {
    setSelectedExperience(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    gsap.to(modalOuter.current, {
      opacity: 0,
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

  /* -------------------------------------------------------
     ANIMATE LIST / GRID
  ------------------------------------------------------- */
  useEffect(() => {
    const listItems = document.querySelectorAll(".list-element");
    const gridItems = document.querySelectorAll(".grid-element");

    if (layoutMode === "list") {
      gsap.fromTo(
        listItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      );
    } else {
      gsap.fromTo(
        gridItems,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 },
      );
    }
  }, [layoutMode]);

  /* -------------------------------------------------------
     RENDER LIST ITEMS
  ------------------------------------------------------- */
  const renderListItems = () => (
    <div className="flex flex-col divide-y select-none">
      <ListHeader />

      {experiences.map((project, index) => (
        <div
          key={index}
          className="list-element grid grid-cols-2 py-12 gap-6 cursor-pointer transition-colors"
          onClick={() => openModal(project)}
          onMouseEnter={handleMouseEnterList}
          onMouseLeave={handleMouseLeaveList}
        >
          <div className="text-lg sm:text-3xl font-semibold">
            {project.name}
          </div>

          <div className="text-sm sm:text-xl flex flex-col justify-center">
            <span className="capitalize text-orange-300">{project.type}</span>
            <span className="opacity-60 text-xs sm:text-sm mt-1">
              {project.dates}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  /* -------------------------------------------------------
     RENDER GRID ITEMS
  ------------------------------------------------------- */
  const renderGridItems = () => (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              style={{
                backgroundColor: colorPalleteTypeMap.get(project.type),
              }}
            >
              <Image
                src={project.src || ImageUnavailableSVG}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="h-30 p-10">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <h2 className="text-sdNoSize2">{project.dates}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* -------------------------------------------------------
     MODAL UI
  ------------------------------------------------------- */
  const renderModal = () =>
    modalVisible && (
      <div
        onClick={closeModal}
        ref={modalOuter}
        className="fixed inset-0 flex items-center justify-center z-40 bg-black/70 backdrop-blur-sm opacity-0"
      >
        <div
          ref={modalInner}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gradient-to-br from-[#1f2024] to-[#2c2d33] 
                   h-[90vh] w-[90vw] max-w-6xl rounded-2xl shadow-2xl 
                   text-white p-10 flex flex-col"
          style={{ transform: "scale(0)" }}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-4xl hover:text-gray-400 transition"
          >
            &times;
          </button>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 border-b border-gray-700 pb-4 shrink-0">
            {selectedExperience.name}
          </h1>

          {/* BLURBS SCROLL AREA */}
          <div className="flex-1 overflow-y-auto pr-3 custom-scroll space-y-12">
            {selectedExperience.blurbs.map((blurb, i) => (
              <div key={i} className="flex flex-col gap-4">
                {blurb.title && (
                  <h2 className="text-3xl sm:text-4xl font-semibold text-tt leading-tight">
                    {blurb.title}
                  </h2>
                )}

                {blurb.img ? (
                  <div
                    className={`flex flex-col ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    } items-start gap-8`}
                  >
                    <div className="sm:w-[45%] w-full">
                      {blurb.imgLink ? (
                        <a
                          href={blurb.imgLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:opacity-80 transition"
                        >
                          <img
                            src={blurb.img}
                            className="rounded-xl w-full h-auto object-cover"
                          />
                        </a>
                      ) : (
                        <img
                          src={blurb.img}
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      )}
                    </div>

                    <p className="opacity-90 leading-relaxed sm:w-[55%] w-full">
                      {blurb.blurb}
                    </p>
                  </div>
                ) : (
                  <p className="opacity-90 leading-relaxed pl-1">
                    {blurb.blurb}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  /* -------------------------------------------------------
     FINAL RENDER
  ------------------------------------------------------- */

  return (
    <div>
      {renderModal()}
      {layoutMode === "list" ? renderListItems() : renderGridItems()}
    </div>
  );
}
export default Exp;
