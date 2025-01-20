'use client';
import React, { useState, useRef, useEffect } from 'react';
import GridHeader from './gridHeader';
import gsap from 'gsap';
import ImageUnavailableSVG from '@/public/image-unavailable.svg';
import Image from 'next/image';

function Works({ layoutState }: any) {
  interface ProjectProps {
    name: string;
    links: Array<string>;
    stack: string;
    src?: string;
    blurb: string;
    type: string;
  }


  const colorPalleteTypeMap = new Map<string, string>([
    ["", '#FFFFFF'],                // White
    ["Internship Project", 'hsl(0, 67.71300448430492%, 56.27450980392157%)'],                // White
    ["Website", "#FF6F61"],         // Vibrant coral
    ["Full Stack Web App", "#8461DC"], // Rich purple
    ["Robotics", "#88B04B"],        // Fresh green
    ["Multiplayer Game", "#FFA500"], // Orange
    ["Web App", "#00CED1"],         // Dark turquoise
    ["Mobile App", "#1E90FF"],      // Dodger blue
    ["Desktop App", "#FF1493"],     // Deep pink
    ["API", "#7FFF00"],             // Chartreuse
    ["Machine Learning", "#FFD700"] // Gold
  ]);


  const works: ProjectProps[] = [
    
    {
      name: 'UWB Hacks 2025 Website',
      stack: 'Nextjs, React, PostGres, AWS, Redis',
      links: ['No Links Available'],
      blurb: 'I am currently in charge of 7+ developers working on a website, checkin system, and participant tracking system for an upcoming hackathon help in April 2025',
      src: '/uwbhacks.png',
      type: 'Full Stack Web App'
    },
    {
      name: 'Automated Attendance System',
      stack: 'Nextjs, React, PostGres, AWS, Redis',
      links: ['No Links'],
      blurb: 'Developed a pipeline to get data from Zoom meetins and Canvas LMS into a Microsoft Dynamics database',
      src: '',
      type: 'Internship Project'
    },
    {
      name: 'UWB ACM',
      stack: 'React, HTML, CSS',
      links: ['https://uwbacm.org/index.html'],
      blurb: 'I worked on updating all pages for my club website!',
      src: '/uwbacmsite.png',
      type: 'Website'
    },
    {
      name: 'PlanPal',
      stack: 'Nextjs, React, PostGres, AWS, Redis',
      links: ['https://github.com/Simon-Dao/plan-pal'],
      blurb: 'Developing a minimal application to manage event scheduling for teams. Similar in format to when2meet.com',
      src: '/planpal.png',
      type: 'Web App'
    },
    {
      name: 'Bluetooth Controlled Robot arm',
      stack: 'C++, ESP32, Arduino, 3d Printing',
      links: [],
      blurb: 'A robot arm that is controlled wirlessly.',
      src: '/armgif.gif',
      type: 'Robotics'
    },
    {
      name: 'Todo List',
      stack: 'React, Firebase, Express, Node.js',
      links: ['https://github.com/Simon-Dao/full-stack-todo.git'],
      src: '/tododemo.png',
      blurb: 'A todo list application that utilizes an express backend to communicate to firebase.',
      type: 'Full Stack Web App'
    },
    {
      name: 'Pathfinding Algorithm Visualizer',
      stack: 'React, css',
      links: ['https://github.com/Simon-Dao/pathfinding-visualizer.git'],
      blurb: 'A web app that visualizes pathfinding algorithms. Users can edit variables such as wall placement, starting location, end location, and go through the algorithm step by step',
      type: 'Web App',
      src: '/pathfinderdemo.gif'
    },
    {
      name: 'Notetaking App',
      stack: 'React, MongoDB, Express, Nodejs',
      links: ['https://github.com/Simon-Dao/Simple-Notetaking-App.git'],
      blurb: 'A full stack web application heavily based off Microsoft Onenote',
      type: 'Full Stack Web App',
      src: '/notebook.png'
    },
    {
      name: 'Farm Wars',
      stack: 'html, css, javascript, c#, Unity, Photon Network',
      links: ['https://github.com/Simon-Dao/Farm-Wars-Dev.git', 'https://simon-dao.github.io/Farm-Wars-Build/', 'https://docs.google.com/presentation/d/1PZE_H7ffgPpyPTAEib3EH44JQlLeMJCllhSTkeb5sv4/edit#slide=id.g2e1464ce710_0_5'],
      blurb: 'This game is a project for a game development class. I worked in a team of 4 and was in charge of implementing multiplayer. This game is heavily based off of the board game Catan but we added an extra twist by making everything real time instead of turn based',
      src: '/farmwarsdemo.png',
      type: 'Multiplayer Game'
    },
    {
      name: 'Portfolio Website',
      stack: 'Nextjs, React, Tailwind, Gsap, Three.js',
      links: ['https://simondao.me'],
      blurb: 'A website to introduce myself. It Features animations, 3d models, and a sleek UI! This is a passion project I made over the summer of 2024 and took a few weeks to complete',
      src: '/portfoliowebsitescreenshot.png',
      type: 'Web App'
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectProps>(works[0]);
  const [layoutMode, setLayoutMode] = layoutState;
  const [modalVisible, setModalVisible] = useState<Boolean>(false);
  const modalOuter = useRef<HTMLDivElement>(null);
  const modalInner = useRef<HTMLDivElement>(null);

  const handleMouseEnterList = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: '50px',
      opacity: 0.4,
      scaleX: 1.01,
      duration: 0.4,
    });
  };

  const handleMouseLeaveList = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: '20px',
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
      ease: 'expo.inOut',
    });
    gsap.to(modalInner.current, {
      scale: 0,
      duration: 0.5,
      ease: 'expo.inOut',
      onComplete: () => setModalVisible(false),
    });
  };

  useEffect(() => {
    if (modalVisible) {
      gsap.to(modalOuter.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
      });
      gsap.to(modalInner.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.inOut',
      });
    }
  }, [modalVisible]);

  useEffect(() => {
    const listItems = document.querySelectorAll('.list-element');
    const gridItems = document.querySelectorAll('.grid-element');

    if (layoutMode === 'list') {
      gsap.fromTo(listItems, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
    } else {
      gsap.fromTo(gridItems, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 });
    }
  }, [layoutMode]);

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
          <div className="text-lg sm:text-3xl flex items-center bold ">{project.name}</div>
          <div className="text-sm sm:text-2xl flex items-center">{project.stack || <div className='text-pt'>Unavailable</div>}</div>
          <div className="text-sm sm:text-2xl flex items-center">{project.type}</div>
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
            style={{ backgroundColor: '#1f2024e9' }}
            onClick={() => openModal(project)}
            onMouseEnter={handleMouseEnterGrid}
            onMouseLeave={handleMouseLeaveGrid}
          >
            <div className='h-48 relative' style={{ backgroundColor: colorPalleteTypeMap.get(project.type) }}>
              <Image
                src={project.src ? project.src : ImageUnavailableSVG}
                alt={project.name}
                layout="fill"
                objectFit='cover'
                priority={true}
              />
            </div>
            <div className='h-30 p-10'>
              <h1 className='text-2xl'>{project.name}</h1>
              {/* <h2 className='text-sdNoSize2'>{project.stack || <h2 className='text-pt'>Tech Stack Unavailable</h2>}</h2> */}
              <h3 className='text-sdNoSize2'>{project.type}</h3>
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
          <div ref={modalInner} className="bg-qt h-3/4 w-3/4 p-6 rounded-lg shadow-lg flex flex-col px-5 sm:px-20" style={{ transform: 'scale(0)' }}>
            <h1 className='text-lg sm:text-6xl text-tt pb-4' style={{ borderBottom: "solid white 2px" }}>{selectedProject.name}</h1>
            <h1 className='hidden sm:block text-pt text-xl my-5'>Images may take a few seconds to load</h1>
            <div className="overflow-y-auto flex flex-col sm:flex-row w-full grow">
              <section className="relative grow">
                <Image
                  src={selectedProject.src ? selectedProject.src : ImageUnavailableSVG}
                  className='rounded-lg'
                  alt={selectedProject.name}
                  layout="fill"
                  objectFit='contain'
                  priority={true}
                />
              </section>
              <section className='pl-0 sm:pl-16 w-full sm:w-1/2 sm:overflow-x-hidden'>
                <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 pb-2 text-md sm:text-3xl'>Tech Stack:</h2>
                <h2 className='pb-8 text-md sm:text-3xl text-sdNoSize2'> {selectedProject.stack}</h2>
                <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 text-lg sm:text-3xl pb-2 '>Description:</h2>
                <p className='pb-8 text-md sm:text-3xl text-sdNoSize2'>{selectedProject.blurb}</p>
                {selectedProject.links.length > 0 && <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 pb-5 text-lg sm:text-3xl'>Learn More:</h2>}
                <div className='pb-2 flex flex-wrap'>
                  {selectedProject.links.map((link, index) => (
                    <a key={index} href={link} className='bg-pt rounded-xl p-2 my-5 cursor-pointer'>
                      {link}
                    </a>
                  ))}
                </div>
              </section>
            </div>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {layoutMode == 'list' ? renderListItems() : renderGridItems()}
    </div>
  );
}

export default Works;
