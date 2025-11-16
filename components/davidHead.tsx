"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

const Model = () => {
  const davidRef = useRef<any>(null);

  useFrame(() => {
    if (davidRef.current) {
      davidRef.current.rotation.y += 0.005;
    }
  });

  const { scene } = useGLTF("./david_head.glb");
  return <primitive ref={davidRef} object={scene} position={[0, -100, 0]} />;
};

function DavidScene() {
  return (
    <div className="grow h-full items-center ">
      {/* ONLY canvas gets touch-pan-y + pointer-events-none */}
      <Canvas
        camera={{ position: [0, 0, 150], fov: 90 }}
        className="w-full h-full touch-pan-y"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <Model />

          <directionalLight position={[100, 0, 0]} intensity={1} />
          <directionalLight
            position={[-100, 0, 0]}
            intensity={0.02}
            color={[255, 0, 0]}
          />
          <directionalLight position={[0, 0, 100]} intensity={1} />
          <directionalLight
            position={[0, 0, -100]}
            intensity={0.02}
            color={[0, 0, 255]}
          />
          <directionalLight
            position={[0, 300, 0]}
            intensity={0.01}
            color={[0, 0, 255]}
          />

          <EffectComposer>
            <Bloom
              luminanceThreshold={0.1}
              luminanceSmoothing={0.8}
              height={300}
            />
            <ToneMapping
              adaptive
              resolution={256}
              middleGrey={0.6}
              maxLuminance={16.0}
              averageLuminance={1.0}
              adaptationRate={1.0}
            />
          </EffectComposer>

          {/* REMOVE OrbitControls to prevent touch blocking */}
          {/* <OrbitControls
             enableZoom={false}
             enablePan={false}
          /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default DavidScene;
