"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ImageUnavailableSVG from "@/public/image-unavailable.svg";
import Image from "next/image";

/**
 * DESIGN SYSTEM — "Build Log"
 * ---------------------------------------------------------------
 * Simon ships things through git tags, CI/CD pipelines, and deploy
 * logs — so the experience list borrows that vocabulary instead of
 * generic numbered cards. Each role reads like an entry in a
 * changelog: a monospace "tag" (org/date), a version-style index,
 * and a stack of chips for the tools actually used.
 *
 * Palette (warm charcoal base, single brass accent — used only for
 * the tag glyphs and the active/leadership marker, never as decor):
 *   base        #14161A
 *   surface     #1D2027
 *   surface-hi  #262A31
 *   border      #2A2E37
 *   text        #EDEAE2
 *   text-dim    #8B909B
 *   accent      #D2A34C  (brass — "shipped" marker)
 *
 * Type badges are muted, desaturated variants so the grid reads as
 * one coherent system rather than a rainbow of category chips.
 * ----------------------------------------------------------------
 */

function Experiences({ layoutState }: any) {
  interface Blurb {
    title?: string;
    imgLink: string;
    blurb: string;
    img: string;
  }

  interface ProjectProps {
    name: string;
    org: string;
    dates: string;
    current?: boolean;
    src?: string;
    stack: string[];
    tagline: string;
    blurbs: Blurb[];
    type: string;
  }

  const typeColorMap = new Map<string, string>([
    ["", "#8B909B"],
    ["Mobile App", "#6FA8DC"], // GetGreen
    ["Tooling", "#9AA6B2"], // TA / autograder
    ["Cloud Platform", "#7FBFA0"], // Smart City / Bamberg
    ["Web App", "#4FC3C0"], // UWB Hacks
    ["Leadership", "#D2A34C"], // ACM — brass, matches accent
    ["Data Platform", "#B39DDB"], // Computing for All
    ["Data Science", "#E3B37E"], // Admissions
    ["Robotics", "#81C995"], // Trickfire
    ["Full Stack Web App", "#8C9EFF"], // Collaboratory / ID Tech
  ]);

  const experiences: ProjectProps[] = [
    {
      name: "Software Engineering Intern",
      org: "GetGreen",
      dates: "April 2026 — Present",
      current: true,
      tagline: "Building an AI-powered visual regression testing framework.",
      stack: ["Swift", "Kotlin", "GitHub Actions", "CI/CD"],
      blurbs: [
        {
          title: "Catching regressions before users do",
          blurb: `I'm currently building an AI-powered visual testing framework that compares screenshots
                    using image-difference algorithms to catch unintended interface changes before they ship.
                    It now runs automatically in GitHub Actions on every push, so regressions surface in a pull
                    request instead of a bug report.`,
          img: "",
          imgLink: "",
        },
        {
          title: "Tools for the team, not just the pipeline",
          blurb: `Alongside the testing framework, I've been building Kotlin admin dashboards that give the
                    team a faster way to review flagged screenshots and manage release state — cutting about
                    15 minutes out of every deploy workflow.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "",
      type: "Mobile App",
    },
    {
      name: "Computer Science Teaching Assistant",
      org: "University of Washington",
      dates: "September 2025 — December 2025",
      tagline: "Built an LLM-assisted autograder for a 60-student core course.",
      stack: ["Java", "JUnit", "Bash", "LangChain"],
      blurbs: [
        {
          title: "Grading at scale, without losing judgment",
          blurb: `Grading a core CS course of 60 students on weekly deadlines meant the queue never really
                    emptied. So I built an autograding pipeline in Java, JUnit, and Bash that ran the unit
                    test suites automatically and used an LLM-based evaluation step to flag anomalies —
                    partial credit, edge cases, plagiarism-shaped submissions — for a human to actually look at,
                    instead of trying to replace that judgment.`,
          img: "",
          imgLink: "",
        },
        {
          blurb: `I also worked with course staff to design the programming assignments and rubrics
                    themselves, which gave me a much better sense of what makes an assignment teach the
                    concept instead of just testing syntax.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "",
      type: "Tooling",
    },
    {
      name: "Software Engineer Intern",
      org: "Smart City Research Lab, University of Bamberg",
      dates: "June 2025 — August 2025",
      tagline: "Centralized IoT data platform for a city of 100,000 residents.",
      stack: ["Kubernetes", "Docker", "Helm", "Ansible", "Java Spring Boot", "OAuth 2.0"],
      blurbs: [
        {
          title: "My Time in Germany",
          blurb: `I spent the summer of 2025 as a Software Engineer Intern at the Smart City Research Lab
                    in Bamberg, Germany, working on infrastructure that directly served a city of 100,000
                    residents and a research team of 50.`,
          img: "/smartcitypresentation.jpg",
          imgLink: "",
        },
        {
          title: "One platform, a dozen sensor formats",
          blurb: `Every sensor type across the city had been built by a different team, so the data lived
                    in different formats and locations with no common ground. I built secure Java Spring Boot
                    REST services with OAuth 2.0 to expose that data through OGC SensorThings API endpoints,
                    then architected ETL pipelines — deployed via Docker, Kubernetes, Helm, and Ansible — to
                    pull sensor telemetry and participant data into a centralized backend researchers could
                    actually query.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "/smartcity.jpg",
      type: "Cloud Platform",
    },
    {
      name: "Software Development Lead",
      org: "UWB Hacks",
      dates: "October 2024 — June 2025",
      tagline: "Attendance platform handling 600+ concurrent users, live.",
      stack: ["Next.js", "TypeScript", "React", "Postgres", "Redis", "AWS Lambda", "AWS S3"],
      blurbs: [
        {
          title: "Building the thing the event runs on",
          blurb: `I led a 5-person team building the attendance tracking platform for our largest hackathon —
                    software that had to hold up under 600+ concurrent users on the day of, with no second
                    chances. We built authentication, session management, payment processing, and real-time
                    updates in React, TypeScript, and PostgreSQL, then deployed and scaled it on AWS Lambda,
                    S3, and Redis.`,
          img: "/uwbhacks.jpg",
          imgLink: "",
        },
        {
          blurb: `Running Agile sprints across the full cycle, we shipped a week ahead of schedule — which
                    meant the final week was spent load-testing and fixing edge cases instead of scrambling
                    to finish features.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "/uwbhacks.jpg",
      type: "Web App",
    },
    {
      name: "President",
      org: "Association for Computing Machinery (ACM) — UW Bothell Chapter",
      dates: "January 2023 — June 2025",
      tagline: "Grew the club from 4 to 15 events a year and won two chapter awards.",
      stack: ["Event Ops", "Google Workspace Admin", "Sponsorship"],
      blurbs: [
        {
          title: "My ACM Journey",
          blurb: `ACM has been the most expansive part of my university experience. I joined as a freshman,
                    learned event management and leadership from senior officers, and by sophomore year was
                    leading my own events and helping staff our largest annual hackathon, which drew over
                    350 participants.`,
          img: "/uwbhacks.jpg",
          imgLink: "",
        },
        {
          title: "Scaling it up",
          blurb: `As President, I reorganized officers into agile sub-teams, which took us from 4 events a
                    year to 15. That work paid off — we won 2025 Academic Club of the Year and 2025 Event of
                    the Year. I also managed Google Workspace administration for 30+ officers, and we built
                    partnerships with companies like Avanade, Microsoft, Amazon, Blue Origin, and Salesforce
                    to sponsor and support the events themselves.`,
          img: "/uwbhacksaiarticle.png",
          imgLink:
            "https://www.uwb.edu/news/2024/05/24/success-a-product-of-growth-and-collaboration",
        },
      ],
      src: "/uwbhacks.jpg",
      type: "Leadership",
    },
    {
      name: "Software Engineering Intern",
      org: "Computing for All",
      dates: "September 2023 — June 2024",
      tagline: "Rebuilt the student database and helped land a $50,000 grant.",
      stack: ["Azure SQL", "Power BI", "JavaScript", "REST APIs"],
      blurbs: [
        {
          title: '"Computing for All"',
          blurb: `Computing for All provides digital skills training to underrepresented communities. I
                    joined to build technical skills, but stayed for the mission — after a few months I asked
                    for more responsibility and moved from volunteer to intern.`,
          img: "/cfatmobile.jpg",
          imgLink:
            "https://www.linkedin.com/posts/mandiravirmani_computingforall-digitalskillsforall-pre-activity-6970484332683558912-prYm/?utm_source=share&utm_medium=member_desktop",
        },
        {
          blurb: `I restructured and migrated the student and faculty database to Azure SQL, then built
                    Power BI dashboards to visualize student outcomes — work that contributed directly to a
                    $50,000 grant award. I also automated attendance tracking with JavaScript and REST APIs,
                    saving 9 instructors a combined 40 hours a month. Outside of the database work, I taught
                    basic computer skills to refugees from Somalia and Afghanistan, which is still one of the
                    most rewarding things I've done.`,
          img: "/cfarefugees.jpg",
          imgLink:
            "https://www.linkedin.com/posts/digitalskillsforall_computingforall-digitalskillsforall-seattlejobsinitiative-activity-6974154304249094145-ozR2?utm_source=share&utm_medium=member_desktop",
        },
      ],
      src: "/cfa.jpg",
      type: "Data Platform",
    },
    {
      name: "Software Engineering Intern",
      org: "UW Office of Admissions",
      dates: "March 2023 — October 2023",
      tagline: "Modernized admissions portals and modeled enrollment forecasts.",
      stack: ["Tableau", "HTML", "CSS", "Logistic Regression", "Decision Trees"],
      blurbs: [
        {
          title: "The Office of Admissions",
          blurb: `I joined to see the admissions process from the other side, and ended up improving the
                    UX of several web portals used by 8,000 admitted students. My favorite detail: adding
                    confetti to the acceptance page — a small touch, but it made getting in feel like getting in.`,
          img: "",
          imgLink: "",
        },
        {
          title: "Data Science Intern",
          blurb: `I also built logistic regression and decision tree models to predict student enrollment,
                    improving forecasting accuracy by 13%, and built interactive Tableau dashboards that
                    automated complex applicant-data queries for the admissions team. I can't share the
                    underlying reports, but I'm proud the work fed into real decisions.`,
          img: "",
          imgLink: "",
        },
      ],
      src: "/uwb.jpg",
      type: "Data Science",
    },
    {
      name: "Computer Vision Lead",
      org: "Trickfire Robotics",
      dates: "September 2022 — June 2024",
      tagline: "Computer vision for a competition drone.",
      stack: ["Computer Vision", "Object Detection", "Real-Time Systems"],
      blurbs: [
        {
          title: "My Time at Trickfire Robotics",
          blurb: `As computer vision lead, I built a computer vision system for a drone to improve
                    automation and flight accuracy — integrating object detection algorithms, optimizing
                    real-time data processing, and running field tests to make sure it held up outside a lab.
                    The technical skills mattered, but the teamwork and troubleshooting under real deadlines
                    is what stuck with me.`,
          img: "/FullRoverPhoto.png",
          imgLink: "",
        },
      ],
      src: "/FullRoverPhoto.png",
      type: "Robotics",
    },
    {
      name: "Volunteer",
      org: "Collaboratory Makerspace",
      dates: "April 2023 — June 2024",
      tagline: "3D printing, laser cutting, and everything in between.",
      stack: ["3D Printing", "Laser Cutting", "Fabrication"],
      blurbs: [
        {
          title: "My Favorite Space on Campus",
          blurb: `No exaggeration — the Collaboratory Makerspace is where I go to relax, build, and meet
                    people. I started volunteering freshman year and never really stopped.`,
          img: "/Group_Shot_Fin.png",
          imgLink: "",
        },
        {
          blurb: `I met some of my closest friends here and helped with everything from simple 3D prints
                    to automating manure handling on a farm. Along the way I picked up real fluency in 3D
                    printing, laser cutting, and half a dozen other machines — skills I still lean on in
                    my own projects.`,
          img: "/collabmovie.png",
          imgLink: "",
        },
      ],
      src: "/Group_Shot_Fin.png",
      type: "Full Stack Web App",
    },
    {
      name: "Programming Instructor",
      org: "iD Tech",
      dates: "June 2023 — August 2023",
      tagline: "Teaching ages 7–17 to code — and to stay curious.",
      stack: ["Coding Fundamentals", "Game Dev", "VR"],
      blurbs: [
        {
          blurb: `I taught students aged 7–17 the fundamentals of coding and game development in VR —
                    building lesson plans, giving hands-on guidance, and helping each student ship their own
                    project with real confidence in their skills.`,
          img: "/idtech.jpg",
          imgLink: "",
        },
        {
          blurb: `Teaching a younger crowd forces you to explain concepts from angles you'd never reach
                    for on your own, and that outside-the-box thinking has made me a better communicator on
                    my own projects since. The biggest lesson went the other way, though: never lose the
                    willingness to poke at something you don't understand yet.`,
          img: "/idtechbc.jpg",
          imgLink: "",
        },
      ],
      src: "/idtech.jpg",
      type: "Full Stack Web App",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectProps>(
    experiences[0],
  );
  const [layoutMode, setLayoutMode] = layoutState;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const modalOuter = useRef<HTMLDivElement>(null);
  const modalInner = useRef<HTMLDivElement>(null);

  const handleMouseEnterCard = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -4,
      borderColor: "#3A3F4A",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: "#2A2E37",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const openModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    gsap.to(modalOuter.current, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.inOut",
    });
    gsap.to(modalInner.current, {
      y: 16,
      opacity: 0,
      scale: 0.98,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => setModalVisible(false),
    });
  };

  useEffect(() => {
    if (modalVisible) {
      gsap.fromTo(
        modalOuter.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        modalInner.current,
        { y: 16, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      );
    }
  }, [modalVisible]);

  useEffect(() => {
    const items = document.querySelectorAll(".exp-card");
    gsap.fromTo(
      items,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: "power2.out" },
    );
  }, [layoutMode]);

  const StackChips = ({ stack }: { stack: string[] }) => (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <span
          key={tech}
          className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full text-[#B7BBC2] bg-[#262A31] border border-[#2E323A]"
        >
          {tech}
        </span>
      ))}
    </div>
  );

  const renderCard = (project: ProjectProps, index: number, listView: boolean) => {
    const color = typeColorMap.get(project.type) ?? "#8B909B";
    return (
      <div
        key={index}
        className={`exp-card group cursor-pointer border border-[#2A2E37] bg-[#1D2027] rounded-xl overflow-hidden flex ${
          listView ? "flex-row items-stretch" : "flex-col"
        }`}
        onClick={() => openModal(project)}
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseLeaveCard}
      >
        <div
          className={listView ? "w-32 shrink-0 relative" : "h-40 relative"}
          style={{ backgroundColor: `${color}22` }}
        >
          <Image
            src={project.src ? project.src : ImageUnavailableSVG}
            alt={project.name}
            fill
            style={{ objectFit: "cover" }}
            priority={index < 3}
          />
          {project.current && (
            <span className="absolute top-2 left-2 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-[#14161A] bg-[#D2A34C] px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14161A] animate-pulse" />
              current
            </span>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide" style={{ color }}>
            <span>{project.type || "role"}</span>
            <span className="text-[#4A4F58]">·</span>
            <span className="text-[#8B909B]">{project.dates}</span>
          </div>
          <h3 className="text-lg font-semibold text-[#EDEAE2] leading-snug">
            {project.name}
          </h3>
          <p className="text-sm text-[#8B909B]">{project.org}</p>
          <p className="text-sm text-[#B7BBC2] leading-relaxed">
            {project.tagline}
          </p>
          <div className="pt-1">
            <StackChips stack={project.stack} />
          </div>
        </div>
      </div>
    );
  };

  const renderGridItems = () => (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {experiences.map((project, index) => renderCard(project, index, false))}
      </div>
    </div>
  );

  const renderListItems = () => (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-4">
        {experiences.map((project, index) => renderCard(project, index, true))}
      </div>
    </div>
  );

  const BlurbBlock = ({
    blurb,
    i,
    isLast,
    accent,
  }: {
    blurb: Blurb;
    i: number;
    isLast: boolean;
    accent: string;
  }) => {
    const hasImage = blurb.img !== "";

    const imageEl = hasImage ? (
      blurb.imgLink === "" ? (
        <img
          className="rounded-lg w-full max-h-64 object-cover mt-4 border border-[#2A2E37]"
          src={blurb.img}
          alt="Experience detail"
        />
      ) : (
        <a
          className="block hover:opacity-75 transition-opacity duration-300 mt-4"
          href={blurb.imgLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-lg w-full max-h-64 object-cover border border-[#2A2E37]"
            src={blurb.img}
            alt="Experience detail"
          />
        </a>
      )
    ) : null;

    return (
      <div className="relative pl-12">
        {/* Index marker */}
        <div
          className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] border"
          style={{
            borderColor: `${accent}55`,
            color: accent,
            backgroundColor: "#1D2027",
          }}
        >
          {String(i + 1).padStart(2, "0")}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div
            className="absolute left-4 top-8 bottom-[-2rem] w-px"
            style={{ backgroundColor: "#2A2E37" }}
          />
        )}

        <div className={isLast ? "pb-1" : "pb-8"}>
          {blurb.title && (
            <h4 className="font-mono text-xs uppercase tracking-wide text-[#EDEAE2] mb-2 pt-1">
              {blurb.title}
            </h4>
          )}
          <p className="text-[#B7BBC2] leading-relaxed whitespace-pre-line">
            {blurb.blurb.trim()}
          </p>
          {imageEl}
        </div>
      </div>
    );
  };

  return (
    <div>
      {modalVisible && (
        <div
          ref={modalOuter}
          onClick={closeModal}
          className="cursor-pointer fixed inset-0 z-40 flex items-center justify-center bg-[#0A0B0D]/80 backdrop-blur-sm p-4"
          style={{ opacity: 0 }}
        >
          <div
            ref={modalInner}
            onClick={(e) => e.stopPropagation()}
            className="cursor-auto bg-[#1D2027] border border-[#2A2E37] max-h-[88vh] w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Cover banner */}
            <div className="relative h-40 shrink-0">
              <Image
                src={selectedProject.src ? selectedProject.src : ImageUnavailableSVG}
                alt={selectedProject.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,22,26,0.15) 0%, rgba(20,22,26,0.55) 55%, #1D2027 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: typeColorMap.get(selectedProject.type) ?? "#8B909B" }}
              />
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#14161A]/70 text-[#EDEAE2] hover:bg-[#14161A] backdrop-blur-sm transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div
                  className="font-mono text-[11px] uppercase tracking-wide mb-1"
                  style={{ color: typeColorMap.get(selectedProject.type) ?? "#8B909B" }}
                >
                  {selectedProject.type || "role"} · {selectedProject.dates}
                </div>
                <h2 className="text-2xl font-semibold text-[#F4F2EC] drop-shadow-sm">
                  {selectedProject.name}
                </h2>
                <p className="text-[#C7CAD1] text-sm mt-0.5">{selectedProject.org}</p>
              </div>
            </div>

            {/* Stack chips */}
            <div className="px-8 pt-5 pb-5 border-b border-[#2A2E37]">
              <StackChips stack={selectedProject.stack} />
            </div>

            {/* Body — timeline of blurbs */}
            <div className="px-8 py-8 overflow-y-auto">
              {selectedProject.blurbs.map((blurb, i) => (
                <BlurbBlock
                  key={i}
                  blurb={blurb}
                  i={i}
                  isLast={i === selectedProject.blurbs.length - 1}
                  accent={typeColorMap.get(selectedProject.type) ?? "#8B909B"}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Layout toggle */}
      <div className="container mx-auto flex justify-end gap-2 pt-6">
        {(["grid", "list"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setLayoutMode(mode)}
            className={`font-mono text-xs uppercase tracking-wide px-3 py-1.5 rounded-full border transition-colors ${
              layoutMode === mode
                ? "border-[#D2A34C] text-[#D2A34C]"
                : "border-[#2A2E37] text-[#8B909B] hover:text-[#EDEAE2]"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {layoutMode === "list" ? renderListItems() : renderGridItems()}
    </div>
  );
}

export default Experiences;