"use client";

import React from "react";
import Link from "next/link";
import DavidScene from "@/components/davidHead";
import TransitionLink from "@/components/transitionLink";
import Magnetic from "@/components/magnetic";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-black text-white">
      <article className="w-full max-w-[1200px] px-4">
        {/* HERO SECTION */}
        <section
          className="
            w-full 
            sm:min-h-[70vh]       
            flex flex-col md:flex-row 
            items-center sm:justify-between 
            sm:py-20 
            gap-10           
          "
        >
          {/* LEFT HERO */}
          <div className="flex flex-col gap-4 max-w-xl select-none items-center md:items-start ">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-tt">
              Simon Dao
            </h1>

            <p className="text-md sm:text-xl text-white/80">
              Computer Science student in Seattle.
            </p>

            <p className="text-md sm:text-lg text-white/70 max-w-lg text-center md:text-start">
              I build webapps, tools, robots, and AI projects using TypeScript,
              React, Python, SQL, and AWS.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-tt rounded-md px-2 sm:px-8 py-2 sm:py-4 font-bold text-white hover:bg-black border border-tt transition cursor-pointer">
                <TransitionLink
                  text="text-md sm:text-lg"
                  hoverAnimation={false}
                  href="/experiences"
                  label="Experience"
                />
              </div>

              <div className="bg-white/80 rounded-md px-2 sm:px-8 py-2 sm:py-4 font-bold text-black hover:bg-black hover:text-white/80 border border-white/80 transition cursor-pointer">
                <TransitionLink
                  text="text-md sm:text-lg"
                  hoverAnimation={false}
                  href="/about"
                  label="About"
                />
              </div>
            </div>
          </div>

          {/* RIGHT HERO — DAVID 3D */}
          <div className="md:block w-full md:w-1/2 max-h-[400px] pointer-events-none">
            <div className="w-full h-[15vh] md:h-[350px] md:h-[400px]">
              <DavidScene />
            </div>
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section className="w-full py-2 sm:py-10">
          <div
            className="
            grid 
            grid-cols-2 sm:grid-cols-4 
            gap-6 
            text-center
          "
          >
            <Metric label="600+ Users" sub="reached with my projects" />
            <Metric label="4+ Years" sub="of coding experience" />
            <Metric label="60+ Projects" sub="on GitHub" />
            <Metric
              label="7+ Experiences"
              sub="relevant to software engineering"
            />
          </div>
        </section>
      </article>

      {/* PROJECTS */}
      <section className="w-full max-w-[1200px] px-4 py-16">
        <h2 className="text-xl sm:text-3xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Magnetic>
            <ProjectCard
              title="UWB Hacks Platform"
              desc="Full-stack platform for 600+ attendees with real-time tracking, scheduling, and prize management."
              tech="TypeScript • Next.js • PostgreSQL • AWS"
              github="https://github.com/UWB-ACM/uwb-hacks-25.git"
              live="https://uwbhacks.com"
            />
          </Magnetic>

          <Magnetic>
            <ProjectCard
              title="TheLazyVoter"
              desc="Next.js dashboard for political data with AI-generated candidate summaries."
              tech="Next.js • TypeScript • OpenAI • Web Scraping"
              github="https://github.com/Simon-Dao/the-lazy-voter"
              live=""
            />
          </Magnetic>

          <Magnetic>
            <ProjectCard
              title="Neural Networks From Scratch"
              desc="Custom NumPy-based neural networks achieving 99% accuracy on MNIST."
              tech="Python • NumPy • ML"
              github="https://github.com/Simon-Dao/neural-network-from-scratch"
              live=""
            />
          </Magnetic>
        </div>
      </section>

      {/* SKILLS */}
      <section className="w-full max-w-[1200px] px-4 py-16">
        <h2 className="text-xl sm:text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
          <Skill title="Languages" items="TypeScript, Python, Java, SQL" />
          <Skill title="Frameworks" items="React, Node.js, Next.js" />
          <Skill title="Tools" items="Docker, Kubernetes, Git, AWS" />
          <Skill title="Concepts" items="Full-Stack, Distributed Systems, ML" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="w-full max-w-[900px] px-4 py-16 text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-3xl font-bold mb-6">About Me</h2>
        <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          I’m a Computer Science student based in Seattle who enjoys building
          software that feels fast and purposeful. I’ve worked across full-stack
          development, data engineering, and AI. Outside of coding, I’m involved
          in ACM leadership and robotics clubs.
        </p>

        <Magnetic>
          <div className="bg-tt w-40 rounded-md py-2 m-6 font-bold">
            <TransitionLink
              text={"text-lg"}
              hoverAnimation={false}
              href="/about"
              label={"Learn More"}
            />
          </div>
        </Magnetic>
      </section>
    </main>
  );
}

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function Metric({ label, sub }: { label: string; sub: string }) {
  return (
    <div>
      <p className="text-md sm:text-2xl font-bold">{label}</p>
      <p className="text-sm sm:text-sm text-white/60">{sub}</p>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tech,
  github,
  live,
}: {
  title: string;
  desc: string;
  tech: string;
  github: string;
  live?: string;
}) {
  return (
    <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 mb-3">{desc}</p>
      <p className="text-white/50 text-sm mb-4">{tech}</p>

      <div className="flex gap-4">
        {live && (
          <Link href={live} className="text-sm underline">
            Live
          </Link>
        )}
        <Link href={github} className="text-sm underline">
          GitHub
        </Link>
      </div>
    </div>
  );
}

function Skill({ title, items }: { title: string; items: string }) {
  return (
    <div>
      <p className="text-sm sm:text-lg font-semibold">{title}</p>
      <p className="text-sm sm:text-md text-white/60 mt-1">{items}</p>
    </div>
  );
}
