"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ArrowSVG from "@/public/Arrow1.svg";
import ImageGallery from "@/components/imageGallery";
import { animateHelloText } from "@/utils/animation";

function About() {
  const helloAnimationRef = useRef<any>(null);

  useEffect(() => {
    animateHelloText(helloAnimationRef);
  }, []);

  return (
    <div className="lg:px-24 pb-64 pt-32">
      {/* ...your app */}
      <div className="px-10 lg:px-24">
        <section className="flex flex-col items-center justify-center lg:flex-row">
          <Image
            className="rounded-full justify-self-end mr-10"
            src="/simon.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <div style={{ marginTop: "" }} className="select-none flex flex-col">
            <span className="text-4xl xl:text-6xl h-20 mt-10 flex">
              About Me
              <Image
                className="ml-20 mb-6 self-end"
                priority
                src={ArrowSVG}
                alt=""
              />
            </span>
          </div>
        </section>

        <section className="flex">
          <div className="w-screen">
            <hr className="my-10" />
          </div>
        </section>

        <article className="">
          <h1 ref={helloAnimationRef} className="text-7xl mb-6">
            Hello
          </h1>
          <h1 className="font-bold text-3xl mb-3 text-tt">About</h1>
          <p className="text-xl">
            {`
              Hello! My name is Simon Dao, and I am excited you are taking the opportunity to get to know just a little more 
              about me through this Portfolio. At the time of making this portfolio, it has been 847 days or appoximately 2.3 years 
              since my first day at the university.              
          `}
          </p>
          <p className="text-xl mt-5">
            {`
            During this short time, I have grown to be an innovator, mentor, and leader. Since my first day at the University of Washington,
            I set my mission to improve myself as much as I can. This journey has been fraught with hardship and struggles, but I pulled 
            through and came out a better person. From that fateful day, I have explored my interest in web development, game development,
            and machine learning, inspired by my coursework, and have applied it to many impactful projects. One highlight being the hackathon 
            website for UWB ACM's Website, which significantly improved participants' experience by streamlining the registration and project submission processes.

            My main goal is to make it easier for people to get into technology, especially those who might feel intimidated by the perceived complexity or
            those who think it might not be for them. By demystifying technology and making learning resources more accessible, I aim to open doors for more 
            individuals to discover their potential in the tech world.

            I want to tell you how I got here in the first place. Growing up in a low-income neighborhood in Seattle, the opportunities for learning advanced 
            technology were limited. My passion for tech was sparked by a community program that introduced me to basic coding. This experience was transformative, 
            and it fueled my desire to delve deeper into the tech field, ensuring others could have the same transformative experiences through education and community engagement.
              `}
          </p>
          <div className="flex w-full items-center">
            <div className="w-7/12 pl-5">
              <h1 className="font-bold text-3xl mb-3 mt-5 text-tt">
                A New Generation
              </h1>
              <p className="text-xl">
                {`
                I come from a family of Vietnamese immigrants whose journey to the United States was marked by 
                hope and resilience. Raised on stories of adversity and perseverance, my values and aspirations 
                were shaped early on. A notable story is my father's escape from poverty in Vietnam to the U.S.,
                 where he used his informal engineering education to build a successful business. His experiences 
                 inspired my passion for STEM education. This background instilled in me a deep appreciation for the 
                 opportunities I've had, especially in education and personal development. It also ingrained a strong
                  sense of responsibility to give back and uplift others facing similar challenges. This foundational
                   experience influences my approach to every project and interaction, as I strive to ensure inclusivity
                    and accessibility in the tech community and beyond, honoring my family's legacy and the broader
                     immigrant experience.
                
              `}
              </p>
            </div>

            <img
              className="rounded-lg p-5 w-5/12"
              src="/family_long_dress.jpg"
              alt="Description of image"
            ></img>
          </div>

          <p className="text-xl pt-5">
            {`

          `}
          </p>

          <div className="flex w-full items-center">
            <img
              className="rounded-lg w-5/12"
              src="/internshipevent.jpg"
              alt="Description of image"
            ></img>
            <div className="w-7/12 pl-5">
              <h1 className="font-bold text-3xl mb-3 text-tt">Upbringing</h1>
              <p className="text-xl">
                {`
                I grew up in South Seattle, in a historically redlined neighborhood where the educational opportunities were noticeably 
                inferior to those in wealthier areas. This obvious disparity motivated me to close the gap in education, specifically for 
                STEM fields. Driven by a deep commitment to educational equity, I aim to enhance access to technology and learning resources, 
                ensuring that students from underserved backgrounds can overcome systemic barriers and realize their full potential in STEM disciplines.
              `}
              </p>
            </div>
          </div>

          {/* Outside of School */}
          <div className="flex w-full items-center">
            <div className="w-7/12 pl-5">
              <h1 className="font-bold text-3xl mb-3 text-tt">My Undergrad</h1>
              <p className="text-xl">
                {`
                Building on this commitment, I have actively sought opportunities to directly impact educational access and equity through my various roles and projects. 
               As Vice President of the ACM Club at the University of Washington, I led initiatives to organize workshops and events that demystified complex topics in 
               technology and coding. These events were designed to be accessible and engaging for students regardless of their prior experience, significantly reducing
              the intimidation factor associated with STEM fields.

              Additionally, during my internship at the UW Office of Admissions, I redesigned web portals that are used by thousands of prospective students. My improvements made 
              these platforms more intuitive and user-friendly, ensuring that students from all backgrounds could easily access the information needed to navigate their educational
              pathways. Through these actions, I have been able to provide practical solutions that help level the playing field and offer every student the opportunity to explore 
              and excel in STEM disciplines.
                
              `}
              </p>
            </div>

            <img
              className="rounded-lg p-5 w-5/12"
              src="/club_fair.jpg"
              alt="Description of image"
            ></img>
          </div>
          <div className="flex w-full items-center">
            <img
              className="rounded-lg p-5 w-5/12"
              src="/mma1.png"
              alt="Description of image"
            ></img>
            <div className="w-7/12 ">
              <h1 className="font-bold text-3xl mb-3 text-tt">Hobbies</h1>
              <p className="text-xl mt-5p-5">
                {`
                In my free time, I enjoy trying new things, particularly in the realm of physical activity and martial arts. Lately, 
                I have been heavily involved with Kickboxing and Brazilian Jiu-Jitsu. Noticing the lack of martial arts involvement at the University of Washington Bothell (UWB),
                I took the initiative and took over an existing self-defense group. I've heavily marketed this group to UWB students, aiming to grow our membership and establish 
                a welcoming, empowering community. My goal is to formalize this group into an official club, fostering a safe and inclusive environment where students can learn 
                self-defense skills and build confidence.
                `}
              </p>
            </div>
          </div>

          {/* Outside of School */}
          <div className="flex w-full items-center">
            <div className="w-7/12 pl-5">
              <h1 className="font-bold text-3xl mb-3 text-tt">Beyond Graduation</h1>
              <p className="text-xl">
                {`
                  Beyond graduation, I dream of continue my journey in technology and education. I'll start by working in 
                  industry for many years to gain experience and knowledge. I'll then use this experience to 
                  teach the next generation of innovators. I am passionate about creating accessible
                  learning resources and fostering inclusive communities that empower students from all backgrounds to
                  explore and excel in STEM fields. My ultimate goal is to establish a nonprofit organization that provides
                  mentorship, resources, and opportunities to underserved students, ensuring that they have the support and
                  guidance needed to pursue their passions.
              `}
              </p>
            </div>

            <img
              className="rounded-lg p-5 w-5/12"
              src="/nature.jpg"
              alt="Description of image"
            ></img>
          </div>
          <hr className="my-10" />

          {/* Core Values */}
          <h1 className="text-3xl mt-10 mb-5 text-tt font-bold">
            My Core Values
          </h1>
          <div>
            <div className="flex w-full p-5">
              <div className="w-1/2  pr-3">
                <h1 className="text-2xl underline">Curiosity</h1>
                <p className="text-xl mt-5">
                  {`
                    As children, we are all naturally curious, always asking questions about things that we adults might consider mundane. 
                    Despite being grown up now, I still ask myself how things work. This curiosity drives me to understand the underlying 
                    mechanics of both simple and complex systems, whether it’s unraveling the code behind a website or dissecting the strategies behind 
                    effective team leadership.
                  `}
                </p>
              </div>
              <div className="w-1/2 pl-3">
                <h1 className="text-2xl underline">Persistence</h1>
                <p className="text-xl mt-5">
                  {`
                    Persistence has been a driving force in my life since childhood. I am not the smartest person in the room, but I make up for that with persistence. 
                    This value has fueled my determination to overcome barriers, and is a driving factor of my success today.
                  `}
                </p>
              </div>
            </div>
            <div className="flex w-full p-5">
              <div className="w-1/2  pr-3">
                <h1 className="text-2xl underline">Respect</h1>
                <p className="text-xl mt-5">
                  {`
                    Respect has been a cornerstone of my journey, deeply rooted in my upbringing in a diverse community where everyone's story was uniquely instructive.
                     As I've matured, my definition of respect has evolved beyond mere politeness to encompass a genuine appreciation for the perspectives and experiences 
                     of others. This principle has guided my interactions both in and out of the classroom, fostering environments where open dialogue and mutual understanding
                      flourish.
                  `}
                </p>
              </div>
              <div className="w-1/2  pl-3">
                <h1 className="text-2xl underline">Diversity</h1>
                <p className="text-xl mt-5">
                  {`
                    Diversity is not just a concept to me but a reality that enriches every step I undertake. At the University of Washington, 
                    I have actively sought to foster diversity in thought, culture, and background, particularly in my roles within tech and leadership 
                    communities. 
                  `}
                </p>
              </div>
            </div>
          </div>

          <hr className="my-10" />

          <h1 className="text-5xl mb-6 mt-28">More of Me!</h1>
          <ImageGallery />
        </article>
      </div>
    </div>
  );
}

export default About;
