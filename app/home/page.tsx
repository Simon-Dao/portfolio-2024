'use client'
import Image from "next/image";
import GlobeScene from "@/components/globe";
import { motion } from 'framer-motion-3d';
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="px-16 grow flex items-center">
      <div style={{ width: '50%' }} className="flex flex-col justify-center items-center h-full">
        <div className="pb-20">
          <h1 className="text-title m-0 select-none">Simon Dao</h1>
          <h3 className="text-sd m-0 select-none">Developer, Designer, Problem-Solver</h3>
        </div>
      </div>
      <div className="grow h-full items-center cursor-pointer">
          <GlobeScene />
      </div>
    </main>
  );
}
