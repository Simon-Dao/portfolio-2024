"use client";
import React, { useState, useRef, useEffect } from "react";
import GridHeader from "./gridHeader";
import gsap from "gsap";
import ImageUnavailableSVG from "@/public/image-unavailable.svg";
import Image from "next/image";

function Works({ layoutState }: any) {
  interface ProjectProps {
    name: string;
    links: Array<string>;
    stack: string;
    src?: string;
    // Optional: add multiple images per project to power the carousel.
    // If omitted, the carousel falls back to a single-image slide using `src`.
    images?: Array<string>;
    blurb: string;
    type: string;
  }

  const colorPalleteTypeMap = new Map<string, string>([
    ["", "#FFFFFF"], // White
    ["Internship Project", "hsl(0, 67.71300448430492%, 56.27450980392157%)"], // White
    ["Website", "#FF6F61"], // Vibrant coral
    ["Full Stack Web App", "#8461DC"], // Rich purple
    ["Robotics", "#88B04B"], // Fresh green
    ["Multiplayer Game", "#FFA500"], // Orange
    ["Web App", "#00CED1"], // Dark turquoise
    ["Mobile App", "#1E90FF"], // Dodger blue
    ["Desktop App", "#FF1493"], // Deep pink
    ["API", "#7FFF00"], // Chartreuse
    ["AI/ML", "#FFD700"], // Gold
    ["Machine Learning", "#FFD700"], // Gold
  ]);

  const works: ProjectProps[] = [
    {
      name: "The Lazy Voter",
      stack: "TypeScript, Next.js, React, OpenAI API, Databricks, AWS",
      links: [
        "https://github.com/Simon-Dao/the-lazy-voter-frontend.git",
        "https://github.com/Simon-Dao/the-lazy-voter-backend.git",
        "thelazyvoter.org",
      ],
      blurb:
        "A full-stack civic engagement platform that aggregates and analyzes U.S. political data from millions of records. Built distributed ETL pipelines, ML-powered entity resolution, and an AI assistant that uses RAG to answer questions about candidates, legislation, and public policy through an interactive dashboard.",
      src: "/thelazyvoter.png",
      images: ["/thelazyvoter.png", "/thelazyvoter2.png", "/thelazyvoter3.png"],
      type: "Web App",
    },

    {
      name: "UWB Hacks 2025 Website",
      stack: "Next.js, React, PostgreSQL, AWS, Redis",
      links: ["uwbhacks.com"],
      blurb:
        "Led a team of developers to build the official website and event management platform for UWB Hacks. Developed attendee check-in, authentication, payment processing, and participant tracking systems that supported over 600 concurrent users during the live hackathon.",
      src: "/uwbhacks.png",
      images: ["/uwbhacks.png", "/uwbhacks2.png"],
      type: "Full Stack Web App",
    },

    {
      name: "Reinforcement Learning Agent",
      stack: "PyTorch, Python",
      links: [
        "https://colab.research.google.com/drive/19u1aFJNF6BOB2nlGUZNne_LMRmAovDSV?usp=sharing",
        "https://drive.google.com/file/d/12XIhXGA1KPCkAQWOSabOw-C99FT4TGSZ/view?usp=sharing",
      ],
      blurb:
        "Implemented and trained a Deep Q-Network (DQN) agent in PyTorch to solve the Lunar Lander environment. Explored reinforcement learning concepts including experience replay, target networks, and reward optimization while analyzing agent performance through training metrics and visualizations.",
      src: "/lunarlander.gif",
      type: "Machine Learning",
    },

    {
      name: "Neural Network Library from Scratch",
      stack: "Python, NumPy",
      links: ["https://github.com/Simon-Dao/neural-network-from-scratch.git"],
      blurb:
        "Developed a neural network framework entirely from scratch using only NumPy, implementing forward propagation, backpropagation, gradient descent, and convolutional layers. Trained convolutional models on the MNIST dataset, achieving over 99% classification accuracy.",
      src: "/neuralnetworks.png",
      type: "Machine Learning",
    },

    {
      name: "Portfolio Website",
      stack: "Next.js, React, Tailwind CSS, GSAP, Three.js",
      links: ["https://simondao.me"],
      blurb:
        "Designed and developed a highly interactive portfolio featuring smooth GSAP animations, custom Three.js scenes, and responsive UI components. Built to showcase software engineering projects while emphasizing performance, modern design, and engaging user experience.",
      src: "/portfoliowebsitescreenshot.png",
      type: "Web App",
    },

    {
      name: "UWB ACM",
      stack: "React, HTML, CSS",
      links: ["https://uwbacm.org/index.html"],
      blurb:
        "Redesigned and modernized the University of Washington Bothell ACM website by rebuilding multiple pages with a cleaner interface, improved responsiveness, and easier maintainability for future student officers.",
      src: "/uwbacmsite.png",
      type: "Website",
    },

    {
      name: "Pathfinding Algorithm Visualizer",
      stack: "React, CSS",
      links: ["https://github.com/Simon-Dao/pathfinding-visualizer.git"],
      blurb:
        "Built an interactive visualization tool for classic graph search algorithms including Dijkstra's and A*. Users can create obstacles, customize start and end nodes, and step through each algorithm to better understand pathfinding behavior and runtime tradeoffs.",
      type: "Web App",
      src: "/pathfinderdemo.gif",
    },

    {
      name: "Farm Wars",
      stack: "HTML, CSS, JavaScript, C#, Unity, Photon Networking",
      links: [
        "https://github.com/Simon-Dao/Farm-Wars-Dev.git",
        "https://simon-dao.github.io/Farm-Wars-Build/",
        "https://docs.google.com/presentation/d/1PZE_H7ffgPpyPTAEib3EH44JQlLeMJCllhSTkeb5sv4/edit#slide=id.g2e1464ce710_0_5",
      ],
      blurb:
        "A real-time multiplayer strategy game inspired by Settlers of Catan, built by a team of four. Developed the networking architecture using Photon, synchronizing gameplay, player state, and game events to support seamless online multiplayer.",
      src: "/farmwarsdemo.png",
      type: "Multiplayer Game",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectProps>(
    works[0],
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
      duration: 0.4,
      ease: "expo.inOut",
    });
    gsap.to(modalInner.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.4,
      ease: "expo.inOut",
      onComplete: () => setModalVisible(false),
    });
  };

  useEffect(() => {
    if (modalVisible) {
      gsap.fromTo(
        modalOuter.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "expo.inOut" },
      );
      gsap.fromTo(
        modalInner.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "expo.out" },
      );

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [modalVisible]);

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

  // ---------- Image Carousel ----------
  function ImageCarousel({
    images,
    alt,
    accent,
  }: {
    images: string[];
    alt: string;
    accent: string;
  }) {
    const [index, setIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setIndex(0);
    }, [images]);

    useEffect(() => {
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          xPercent: -100 * index,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, [index]);

    const goTo = (i: number) => {
      const total = images.length;
      setIndex(((i % total) + total) % total);
    };

    return (
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/20 group">
        <div ref={trackRef} className="flex h-full w-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative h-full w-full flex-shrink-0 overflow-hidden bg-black/30"
            >
              {/* Blurred backdrop fills the space with no empty letterboxing */}
              <Image
                src={img || ImageUnavailableSVG}
                alt=""
                aria-hidden="true"
                layout="fill"
                objectFit="cover"
                className="scale-110 blur-2xl opacity-50"
                priority={i === 0}
              />
              {/* Sharp foreground image, always shown in full, never cropped */}
              <Image
                src={img || ImageUnavailableSVG}
                alt={`${alt} screenshot ${i + 1}`}
                layout="fill"
                objectFit="contain"
                className="relative z-10 drop-shadow-2xl"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            {/* Prev / Next arrows */}
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(index - 1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(index + 1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
              {index + 1} / {images.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "20px" : "6px",
                    backgroundColor:
                      i === index ? accent : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  const renderListItems = () => (
    <div className="flex flex-col divide-y select-none">
      <GridHeader />
      {works.map((project, index) => (
        <div
          key={index}
          className={`list-element grid grid-cols-3 py-16 gap-5 cursor-pointer grid-row-${index} `}
          onClick={() => openModal(project)}
          onMouseEnter={handleMouseEnterList}
          onMouseLeave={handleMouseLeaveList}
        >
          <div className="text-lg sm:text-3xl flex items-center bold ">
            {project.name}
          </div>
          <div className="text-sm sm:text-2xl flex items-center">
            {project.stack || <div className="text-tt">Unavailable</div>}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((project, index) => (
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
                src={project.src ? project.src : ImageUnavailableSVG}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="h-30 p-10">
              <h1 className="text-2xl">{project.name}</h1>
              {/* <h2 className='text-sdNoSize2'>{project.stack || <h2 className='text-tt'>Tech Stack Unavailable</h2>}</h2> */}
              <h3 className="text-sdNoSize2">{project.type}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const accentColor =
    colorPalleteTypeMap.get(selectedProject.type) || "#FFFFFF";
  const carouselImages =
    selectedProject.images && selectedProject.images.length > 0
      ? selectedProject.images
      : selectedProject.src
        ? [selectedProject.src]
        : [];

  return (
    <div>
      {modalVisible && (
        <div
          onClick={closeModal}
          ref={modalOuter}
          className="fixed inset-0 flex items-center justify-center z-40 bg-black/80 backdrop-blur-md p-4 sm:p-8"
          style={{ opacity: 0 }}
        >
          <div
            ref={modalInner}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[88vh] rounded-2xl shadow-2xl text-white overflow-hidden flex flex-col"
            style={{
              transform: "scale(0.92)",
              opacity: 0,
              background:
                "linear-gradient(155deg, #202128 0%, #1a1b20 55%, #16171b 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Accent glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: accentColor }}
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row h-full min-h-0">
              {/* Image / Carousel Section */}
              <div className="sm:w-[62%] w-full h-72 sm:h-full p-5 sm:p-6 shrink-0">
                {carouselImages.length > 0 ? (
                  <ImageCarousel
                    images={carouselImages}
                    alt={selectedProject.name}
                    accent={accentColor}
                  />
                ) : (
                  <div className="w-full h-full rounded-xl flex items-center justify-center bg-white/5 text-white/40 text-sm">
                    No preview available
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="sm:w-[38%] w-full flex flex-col overflow-y-auto px-6 sm:px-2 sm:pr-8 pb-8 sm:pb-10">
                <span
                  className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 mt-1"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}1A`,
                    border: `1px solid ${accentColor}40`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {selectedProject.type}
                </span>

                <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                  {selectedProject.name}
                </h1>

                <div className="mb-6">
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack ? (
                      selectedProject.stack.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm bg-white/[0.06] border border-white/10 text-white/80"
                        >
                          {tech.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-white/40 text-sm">Unavailable</span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    Description
                  </h2>
                  <p className="text-white/75 leading-relaxed text-base">
                    {selectedProject.blurb}
                  </p>
                </div>

                {selectedProject.links.length > 0 &&
                  selectedProject.links[0] !== "No Links" && (
                    <div className="mt-auto pt-2">
                      <h2 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                        Links
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.links.map((link, index) => (
                          <a
                            key={index}
                            href={
                              link.includes("http") ? link : `https://${link}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium bg-white text-black hover:opacity-80 transition-opacity duration-200"
                          >
                            {link.includes("http")
                              ? new URL(link).hostname.replace("www.", "")
                              : link}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7 17L17 7M17 7H9M17 7V15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutMode == "list" ? renderListItems() : renderGridItems()}
    </div>
  );
}

export default Works;
