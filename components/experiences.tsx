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
      blurbs: [
        {
          title: "My ACM Journey",
          blurb: `
            My journey with the Association for Computing Machinery (ACM) at UWB has been the most expansive and impactful aspect of my university experience. 
            Driven by a discovery mindset, I joined ACM—the largest computer science club on campus—to immerse myself fully in the field. Starting as a freshman,
             I learned important lessons from senior officers on event management and effective leadership. By late freshman through sophomore year, I began 
             leading my own events, each growing in size and scope. These gatherings not only taught practical skills but also featured industry speakers, 
             all designed to maximize student benefit. My involvement peaked in my sophomore year as I played a key role in planning and staffing our largest annual 
             Hackathon, which hosted over 350 participants and set new benchmarks for success.
      `,
          img: "/acmgroup.jpg",
          imgLink: "",
        },
        {
          title: "2025 and beyond",
          blurb: `
            This year, I plan on increasing the reach and scale of the club, aiming for more officers, more events, and more impact. My team and I are currently 
            planning to host the largest hackathon we’ve ever had on campus, and we’re actively in talks with companies like Avanade, Microsoft, Amazon, Blue 
            Origin, and Salesforce for sponsorships and partnerships. To make the event more appealing to non-STEM majors, we’re incentivizing participants to 
            develop strong business solutions, not just good code. In addition, we’re partnering with more than 10 clubs this year to ensure a diverse and collaborative environment, bringing together students 
            from various disciplines to work on real-world problems. With a growing officer team and a clear vision, we’re excited for what’s 
            to come and committed to making this year one of the club’s most successful yet.
      `,
          img: "/uwbhacksaiarticle.png",
          imgLink:
            "https://www.uwb.edu/news/2024/05/24/success-a-product-of-growth-and-collaboration",
        },
      ],
      src: "/uwbacmsite.png",
      type: "Website",
    },
    {
      name: "Computing for All - Data Science Intern",
      dates: "Sep 2023 - Jun 2024",
      blurbs: [
        {
          title: "\"Computing for All\"",
          blurb:
          `Computing for all is a non-profit organization that aims to provide digital skills training to underrepresented communities.
           I originally joined the organization to gain technical skills but after a few months, I fell in love with 
           CFA's mission. I asked if I could take on more responsibilities and was given the opportunity to intern for the organization.
           
           
           
          `,
          img: "/cfatmobile.jpg",
          imgLink:
            "https://www.linkedin.com/posts/mandiravirmani_computingforall-digitalskillsforall-pre-activity-6970484332683558912-prYm/?utm_source=share&utm_medium=member_desktop",
        },
        {
          blurb:
`From there, I was able to work on a variety of projects, including overhauling CFA's student database to provide more accurate information
           for sponsors and automating the attendance tracking process for CFA's online classes. I also had the opportunity to work with refugees 
           from Syria and Afghanistan and teach them basic computer skills. This was a very rewarding experience.`,
          img: "/cfarefugees.jpg",
          imgLink:
            "https://www.linkedin.com/posts/digitalskillsforall_computingforall-digitalskillsforall-seattlejobsinitiative-activity-6974154304249094145-ozR2?utm_source=share&utm_medium=member_desktop",
        },
      ],
      src: "/cfa.jpg",
      type: "Web App",
    },
    {
      name: "ID Tech - Programming Instructor",
      dates: "Jun 2023 - Aug 2023",
      blurbs: [
        {
          blurb:
            `
            As a camp instructor at ID Tech, I had the opportunity to teach students aged 7-17 the fundamentals of coding and game devopment with 
            virtual reality. 
            This role involved creating engaging lesson plans, providing hands-on guidance, and fostering a collaborative learning environment.
             I also helped students develop their own projects, ensuring they gained 
             practical experience and confidence in their skills. It was a fulfilling opportunity to contribute to the next generation of computer 
             scientists and inspire young minds to explore the world of technology.
            `,
          img: "/idtech.jpg",
          imgLink: "",
        },
        {
          blurb: `
          I also learned a ton from this experience. Teaching a younger crowd of kids forces me to look at concepts from different perspectives
          in order to find a way to explain it to them. This outside of the box thinking has helped me in my own projects and has made me a better
          communicator. But the most important thing I learned from the kids was to never give up my natural curiosity and to always be willing to learn new things.
          It's good to poke and prod at things you don't understand, because you never know what you might find.
          `,
          img: "/idtechbc.jpg",
          imgLink: "",
        },
      ],
      src: "/idtech.jpg",
      type: "Full Stack Web App",
    },
    {
      name: "Collaboratory Makerspace - Volunteer",
      dates: "Apr 2023 - Jun 2024",
      blurbs: [
        {
          title: "My Favorite Space on Campus",
          blurb:
          `
            The title is no exaggeration. The Collaboratory Makerspace is a place where I can go to relax, work on projects, 
            and meet new people. It's a place where I can be creative and learn new things. I started volunteering at the Collaboratory 
            Makerspace in my freshman year and have been a regular ever since.         
          `,
          img: "/Group_Shot_Fin.png",
          imgLink: "",
        },
        {
          blurb:
          `
            Through this experience, I've met my closest friends and assisted many people with their projects, 
            ranging from simple 3D prints to automating the task of handling cow manure on a farm. I've also gained extensive knowledge in 
            3D printing, laser cutting, and various other machines, applying these skills to my own projects.
          `,
          img: "/collabmovie.png",
          imgLink: "",
        },
      ],
      src: "/Group_Shot_Fin.png",
      type: "Full Stack Web App",
    },
    {
      name: "UWB Office of Admissions - Data Science Intern",
      dates: "Mar 2022 - Oct 2023",
      blurbs: [
        {
          title: "The Office of Admissions",
          blurb: 
          `
            I joined the UWB Office of Admissions because I thought it was a great opportunity to see the inner workings from 
            the other side.

            Here I was able to make a significant impact by applying my frontend skills to improve the UX of several web portals used
            by students and staff. My favorite project was adding confetti to the acceptance page, it was a small touch but it mode the
            experience of getting accepted that much more special.
          `,
          img: "",
          imgLink: "",
        },
        {
          title: "Data Science Intern",
          blurb: 
          `
            The inner workings of the admissions process was fascinating to me, I compiled many reports on incoming student data and
            was able to see the trends that the data revealed. I feel proud that my work helped the admissions team make more informed
            decisions and I'm grateful for the opportunity to work with such a great team. Unfortunately, I can't share any of 
            the reports or images.
          `,
          img: "",
          imgLink: "",
        },
      ],
      src: "/uwb.jpg",
      type: "Full Stack Web App",
    },
    {
      name: "Trickfire Robotics - Computer Vision Lead",
      dates: "Sep 2022 - Jun 2024",
      blurbs: [
        {
          title: "My Time at Trickfire Robotics",
          blurb: `
           Joining Trickfire Robotics was transformative. As a computer vision lead, 
           I worked on developing a computer vision system for a drone, 
            enhancing automation and flight accuracy. This involved integrating 
            computer vision algorithms for object detection, optimizing real-time data 
            processing, and conducting field tests to ensure reliability. 
            I gained new technical skills and learned the value of teamwork, 
            and problem-solving. The knowledge and friendships 
            I gained have been valuable to me.
          `,
          img: "/FullRoverPhoto.png",
          imgLink: "",
        },
      ],
      src: "/FullRoverPhoto.png",
      type: "Robotics",
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
              ></Image>
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

            {/* Modal Content */}
            <div className="mt-5 overflow-y-scroll">
              {/* Iterating through blurbs */}
              {selectedProject.blurbs.map((blurb, i) => (
                <div key={i}>
                  {/* If there is no image */}
                  {blurb.img === "" ? (
                    <div className="flex w-full items-center mt-10">
                      <div className="w-full pl-5">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>
                    </div>
                  ) : i % 2 == 0 ? (

                    // If there is an image
                    <div className="flex w-full items-center mt-10">
                      <div className="w-7/12 pl-5">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>

                      {/* Handle Image Links */}
                      {blurb.imgLink === "" ? (
                        <img
                          className="rounded-lg p-5 w-5/12"
                          src={blurb.img}
                          alt="Description of image"
                        ></img>
                      ) : (
                        <a
                          className="w-5/12 hover:opacity-70 transition-opacity duration-300"
                          href={blurb.imgLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="w-full rounded-lg p-5"
                            src={blurb.img}
                            alt="Description of image"
                          ></img>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="flex w-full items-center mt-10">
                      <div className="w-7/12 pl-5">
                        <h1 className="font-bold text-3xl mb-3 text-tt">
                          {blurb.title && blurb.title}
                        </h1>
                        <h1>{blurb.blurb}</h1>
                      </div>

                      {/* Handle Image Links */}
                      {blurb.imgLink === "" ? (
                        <img
                          className="rounded-lg p-5 w-5/12"
                          src={blurb.img}
                          alt="Description of image"
                        ></img>
                      ) : (
                        <a
                          className="w-5/12 hover:opacity-70 transition-opacity duration-300"
                          href={blurb.imgLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="w-full rounded-lg p-5"
                            src={blurb.img}
                            alt="Description of image"
                          ></img>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Content */}
          </div>
        </div>
      )}

      {renderGridItems()}
    </div>
  );
}

export default Experiences;
