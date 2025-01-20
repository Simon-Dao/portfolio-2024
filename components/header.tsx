"use client";
import React, { useRef, useState } from "react";
import TransitionLink from "./transitionLink";
import Magnetic from "./magnetic";
import DotAnim from "./dotAnim";
import gsap from "gsap";

function header() {
  return (
    <>
      <NormalView />
      <MobileView />
    </>
  );
}

function NormalView() {
  return (
    <nav className="hidden sm:flex pt-14 sm:px-16 text-white">
      <div className="lg:grow flex justify-start">
        <Magnetic>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                href="/home"
                label="Home"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </Magnetic>
      </div>
      <div className="grow flex justify-end">
        <Magnetic>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                href="/about"
                label="About"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                href="/experiences"
                label="Experiences"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                href="/projects"
                label="Projects"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </Magnetic>
        <Magnetic>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                href="/contact"
                label="Contact"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </Magnetic>
      </div>
    </nav>
  );
}

function MobileView() {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const openNav = () => {
    gsap.fromTo(
      navRef.current,
      {
        translateX: "100vw",
        display: "block",
      },
      {
        translateX: "0px",
        duration: 0.3,
      }
    );
  };

  const closeNav = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      {
        translateX: "0px",
        display: "block",
      },
      {
        translateX: "100vw",
        duration: 0.3,
      }
    ).to(navRef.current, {
      display: "none",
    });
  };

  const toggleNav = () => {
    setOpen(!open);

    if (open) {
      openNav();
    } else {
      closeNav();
    }
  };

  return (
    <div className="sm:hidden bg-transparent text-white">
      <button
        onClick={toggleNav}
        className="rounded-full z-40 bg-tt w-10 h-10 fixed top-2 right-2"
      >
        =
      </button>
      {open && (
        <nav
          ref={navRef}
          className={
            "flex flex-col z-30 fixed h-screen w-full bg-pt justify-center items-center"
          }
        >
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                onClick={closeNav}
                text="text-3xl"
                href="/home"
                label="Home"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                onClick={closeNav}
                text="text-3xl"
                href="/about"
                label="About"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                onClick={closeNav}
                text="text-3xl"
                href="/resume"
                label="Resume"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                onClick={closeNav}
                text="text-3xl"
                href="/projects"
                label="Projects"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
          <div className="sm:ml-20 p-2">
            <DotAnim>
              <TransitionLink
                onClick={closeNav}
                text="text-3xl"
                href="/contact"
                label="Contact"
                hoverAnimation={true}
              />
            </DotAnim>
          </div>
        </nav>
      )}
    </div>
  );
}

export default header;
