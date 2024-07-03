'use client';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { DirectionalLight } from 'three';
import { EffectComposer, Bloom, SSAO, ToneMapping } from '@react-three/postprocessing';

const RADIUS = 5;

const Model = () => {

  const davidRef = useRef<any>(null);
  const secondsPerRot = 4;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / secondsPerRot;
    if (davidRef.current) {
      davidRef.current.rotation.y += 0.005
    }
  });

  const { scene } = useGLTF('./david_head.glb')
  //position={[0, -130, 0]} rotation={[-45,0,0]}
  return <primitive ref={davidRef} object={scene} onClick={console.log} position={[0, -100, 0]} />
};

function DavidScene() {
  return (
    <Canvas camera={{ position: [0, 0, 200], fov: 80, rotation: [-45, 0, 0] }} className="w-full h-full ">
      <Suspense fallback={null}>
        <gridHelper args={[10, 10]} />
        <ambientLight intensity={0.5} />
        <GlobeShadow />
        <pointLight position={[0, 300, -10]} intensity={0.8} color={"#ac31ee"}/>
        <spotLight position={[15, 10, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <Model />
        <CameraController />
        <EffectComposer>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
          <ToneMapping
            adaptive={true}
            resolution={256}
            middleGrey={0.6}
            maxLuminance={16.0}
            averageLuminance={1.0}
            adaptationRate={1.0}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

function GlobeShadow() {
  const lightRef = useRef<DirectionalLight>(null);
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

function CameraController() {

  return <OrbitControls enablePan={false} enableZoom={false} />;
}

export default DavidScene;
