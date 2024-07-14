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
  }

  const works: ProjectProps[] = [
    {
      name: 'Bluetooth Controlled Robot arm',
      stack: 'C++, ESP32, Arduino, 3d Printing',
      links: [],
      blurb: 'A robot arm that is controlled wirlessly.',
      src: '/armgif.gif'
    },
    {
      name: 'Fullstack TODO App',
      stack: 'React, Firebase, Express, Node.js',
      links: ['https://github.com/Simon-Dao/full-stack-todo.git'],
      src: '/tododemo.png',
      blurb: 'A todo list application that utilizes an express backend to communicate to firebase.',
    },
    {
      name: 'Pathfinding Algorithms Website',
      stack: '',
      links: [],
      blurb: ''
    },
    {
      name: 'Notetaking App',
      stack: 'React, MongoDB, Express, Nodejs',
      links: [],
      blurb: ''
    },
    {
      name: 'Portfolio Website',
      stack: 'Nextjs, React, Tailwind, Gsap, Three.js',
      links: ['https://simondao.me'],
        blurb: 'A website to introduce myself to the world featuring animations, 3d models, and a sleek UI! This is a passion project I made over the summer of 2024 and took a few weeks to complete',
      src: '/portfoliowebsitescreenshot.png'
    },
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectProps>(works[0]);
  const [layoutMode, setLayoutMode] = layoutState;
  const [modalVisible, setModalVisible] = useState<Boolean>(false);
  const modalOuter = useRef<HTMLDivElement>(null);
  const modalInner = useRef<HTMLDivElement>(null);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: '50px',
      opacity: 0.4,
      scaleX: 1.01,
      duration: 0.4,
    });
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      gap: '20px',
      opacity: 1,
      scale: 1,
      duration: 0.4,
    });
  };

  const modalOpen = (project: ProjectProps) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  useEffect(() => {
    if (modalVisible) {
      gsap.to(modalOuter.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      });
      gsap.to(modalInner.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      });
    }
  }, [modalVisible]);

  const modalClose = () => {
    gsap.to(modalOuter.current, {
      opacity: 0.0,
      duration: 0.5,
      ease: 'expo.in',
    });
    gsap.to(modalInner.current, {
      scale: 0,
      duration: 0.5,
      ease: 'expo.in',
      onComplete: () => setModalVisible(false),
    });
  };

  return (
    <div>
      {modalVisible && (
        <div
          onClick={modalClose}
          ref={modalOuter}
          className="fixed inset-0 flex items-center justify-center z-40 bg-gray-900 bg-opacity-75"
        >
          <div ref={modalInner} className="bg-qt h-3/4 w-3/4 p-6 rounded-lg shadow-lg flex flex-col px-20" style={{ transform: 'scale(0)' }}>
            <h1 className='text-6xl text-tt pb-4 mb-20' style={{ borderBottom: "solid white 2px" }}>{selectedProject.name}</h1>
            <div className="overflow-y-auto flex w-full grow">
              <section className="relative grow">
                <Image
                  src={selectedProject.src ? selectedProject.src : ImageUnavailableSVG}
                  className='rounded-lg'
                  alt={selectedProject.name}
                  layout="fill"
                  objectFit='contain'
                />
              </section>
              <section className='pl-16 w-1/2'>
                <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 pb-2 text-3xl'>Tech Stack:</h2>
                <h2 className='pb-8 text-3xl text-sd'> {selectedProject.stack}</h2>
                <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 text-3xl pb-2 '>Description:</h2>
                <p className='pb-8 text-3xl  text-sd'>{selectedProject.blurb}</p>
                {selectedProject.links.length > 0 && <h2 style={{ borderTop: "solid white 2px" }} className='pt-8 pb-5 text-3xl'>Learn More:</h2>}
                <div className='pb-8'>
                  {selectedProject.links.map((link, index) => (
                    <a href={link} className='bg-pt rounded-xl p-2 my-5 cursor-pointer'>
                      {link}
                    </a>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      )}

      {layoutMode == 'list' ? (
        <div className="flex flex-col divide-y select-none">
          <GridHeader />
          {works.map((project, index) => (
            <div
              key={index}
              className={'grid grid-cols-3 py-16 gap-5 cursor-pointer ' + "grid-row-" + index}
              onClick={() => modalOpen(project)}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="text-3xl flex items-center bold">{project.name}</div>
              <div className="text-2xl flex items-center">{project.name}</div>
              <div className="text-2xl flex items-center">{project.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>diddy</div>
      )}
    </div>
  );
}

export default Works;
