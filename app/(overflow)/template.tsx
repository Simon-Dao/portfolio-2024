"use client";
import { useEffect } from "react";
import { animatePageIn } from "../../utils/animation";

function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-pt z-10 fixed top-0 left-0 w-screen hidden sm:block"
      />
      {children}
    </div>
  );
}

export default Template;
