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
    dates: string;
    src?: string;
    blurbs: Blurb[];
    type: string;
  }

  interface Blurb {
    title?: string;
    blurb: string;
    img: string;
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
      name: "UWB ACM - Vice President",
      dates: "Fall 2022 - Present",
      links: ["https://uwbacm.org/index.html"],
      blurbs: [
        {
          title: "My ACM Journey",
          blurb: `
            My journey with the Association for Computing Machinery (ACM) at UWB has been the most expansive and impactful aspect of my university experience. 
            Driven by a discovery mindset, I joined ACM—the premier computer science club on campus—to immerse myself fully in the field. Starting as a freshman,
             I absorbed invaluable lessons from senior officers on event management and effective communication. By late freshman through sophomore year, I began 
             spearheading my own events, each growing in size and scope. These gatherings not only taught practical skills but also featured industry speakers, 
             all designed to maximize student benefit. My involvement peaked in my sophomore year as I played a key role in planning and staffing our largest annual 
             Hackathon, which hosted over 350 participants and set new benchmarks for success.
      `,
          img: "/acmgroup.jpg",
        },
        {
          title: "2025 and beyond",
          blurb: `
            This year, I plan on increasing the reach and scale of the club, aiming for more officers, more events, and more impact. My team and I are currently 
            planning to host the largest hackathon we’ve ever had on campus, and we’re actively in talks with companies like Avanade, Microsoft, Amazon, Blue 
            Origin, and Salesforce for sponsorships and partnerships. To make the event more appealing to non-STEM majors, we’re incentivizing participants to 
            develop strong business solutions, not just good code, and have introduced a non-code track focusing on product management, user experience design, 
            and business strategy. In addition, we’re partnering with 20 clubs this year to ensure a diverse and collaborative environment, bringing together students 
            from various disciplines to work on real-world problems. By diversifying our event offerings and securing key partnerships, we aim to provide a valuable 
            experience that allows all participants to learn, grow, and showcase their skills. With a growing officer team and a clear vision, we’re excited for what’s 
            to come and committed to making this year one of the club’s most successful yet.
      `,
          img: "/uwbhacksaiarticle.png",
        },
      ],
      src: "/uwbacmsite.png",
      type: "Website",
    },
    {
      name: "UWB Office of Admissions - Data Science Intern",
      dates: "Mar 2022 - Oct 2023",
      links: ["https://github.com/Simon-Dao/uwb-admissions-system.git"], // Changed to fit the context
      blurbs: [
        {
          title: "My CFA Journey",
          blurb: `Computing For All(CFA) is a non profit focused on educating people from non traditional backgrounds in web  I joined  during my senior year of highschool. `,
          img: "",
        }
      ],
      src: "/uwb.jpg",
      type: "Full Stack Web App",
    },
    {
      name: "Computing for All",
      dates: "Sep 2023 - Jun 2024",
      links: ["https://github.com/Simon-Dao/pathfinding-visualizer.git"],
      blurbs: [
        {
          blurb: "Designed a web app that visualizes pathfinding algorithms, allowing users to interactively explore algorithmic paths and understand core computing concepts.",
          img: "/cfatmobile.jpg",
        },
        {
          blurb: "Designed a web app that visualizes pathfinding algorithms, allowing users to interactively explore algorithmic paths and understand core computing concepts.",
          img: "/cfarefugees.jpg",
        }
      ],
      src: "/cfa.jpg",
      type: "Web App",
    },
    {
      name: "ID Tech",
      dates: "Jan 2025 - Present",
      links: ["https://github.com/Simon-Dao/vr-game-development.git"], // Changed to fit the context
      blurbs: [
        {
          blurb: "Developed a virtual reality game teaching platform aimed at educating children in programming and game design, using interactive VR environments.",
          img: "/idtech.jpg",
        }
      ],
      src: "/idtech.jpg",
      type: "Full Stack Web App",
    },
    {
      name: "Trickfire Robotics",
      dates: "Sep 2022 - Jun 2024",
      links: [
        "https://github.com/Simon-Dao/robot-vision-system.git" // Changed to fit the context
      ],
      blurbs: [
        {
          blurb: "Led a team to develop a computer vision system for a drone, enhancing automation and flight accuracy in dynamic environments.",
          img: "/FullRoverPhoto.png",
        }
      ],
      src: "/FullRoverPhoto.png",
      type: "Robotics",
    },
    {
      name: "Collaboratory Makerspace",
      dates: "Apr 2023 - Feb 2024",
      links: ["https://github.com/Simon-Dao/makerspace-management-system.git"], // Changed to fit the context
      blurbs: [
        {
          blurb: "Developed a management system to streamline operations and improve resource allocation in a community makerspace, enhancing user experience and operational efficiency.",
          img: "/Group_Shot_Fin.png",
        }
      ],
      src: "/Group_Shot_Fin.png",
      type: "Full Stack Web App",
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
            {project.dates || <div className="text-pt">Unavailable</div>}
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
                {project.dates || (
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
            className="bg-qt h-3/4 w-3/4 py-6 rounded-lg shadow-lg flex flex-col px-2 sm:px-20"
            style={{ transform: "scale(0)" }}
          >
            <button
              onClick={closeModal}
              className="mt-4 px-2 py-2 w-20 self-end bg-gray-500 text-white rounded hover:bg-tt transition"
            >
              Close{" "}
            </button>
            <div className="mt-5 overflow-y-scroll">
              {selectedProject.blurbs.map((blurb, i) => (
                <div key={i}>

                  {
                  blurb.img === "" ?
                  <div className="flex w-full items-center mt-10">
                      <div className="w-7/12 pl-5">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>
                    </div>
                  :
                  i % 2 == 0 ? (
                    <div className="flex w-full items-center mt-10">
                      <div className="w-7/12 pl-5">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>

                      <img
                        className="rounded-lg p-5 w-5/12"
                        src={blurb.img}
                        alt="Description of image"
                      ></img>
                    </div>
                  ) : (
                    <div className="flex w-full items-center">
                      <img
                        className="rounded-lg p-5 w-5/12"
                        src={blurb.img}
                        alt="Description of image"
                      ></img>
                      <div className="w-7/12 ">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Content */}
          </div>
        </div>
      )}

      {layoutMode == "list" ? renderListItems() : renderGridItems()}
    </div>
  );
}

export default Experiences;
