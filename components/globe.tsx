'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const RADIUS = 5;

function GlobeScene() {
  return (
    <Canvas className="w-full h-full">
      {/* <gridHelper args={[10, 10]} /> */}
      <ambientLight intensity={0.3} />
      <GlobeShadow />
      <Globe />
      <CameraController />
    </Canvas>
  );
}

function GlobeShadow() {
  const lightRef = useRef(null);
  const secondsPerRot = 4;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / secondsPerRot;
    if (lightRef.current) {
      lightRef.current.position.x = RADIUS * Math.sin(time);
      lightRef.current.position.z = RADIUS * Math.cos(time);
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      position={[RADIUS, 1, RADIUS]}
      intensity={0.5}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-near={0.5}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  );
}

function Globe() {

  return (
    <motion.mesh>
      <sphereGeometry args={[2.2, 50, 50]} />
      <meshStandardMaterial color={"#A154F2"} />
    </motion.mesh>
  );
}

function CameraController() {

  return <OrbitControls enablePan={false} enableZoom={false} />;
}

export default GlobeScene;
