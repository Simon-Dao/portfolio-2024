'use client';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';

const RADIUS = 5;

const Model = () => {

  const davidRef = useRef<any>(null);
  const secondsPerRot = 4;

  useFrame(({ clock }) => {
    if (davidRef.current) {
      davidRef.current.rotation.y += 0.005
    }
  });

  const { scene } = useGLTF('./david_head.glb')
  return <primitive ref={davidRef} object={scene} onClick={console.log} position={[0, -100, 0]} />
};


function DavidScene() {

  return (
    <div className="grow h-full items-center cursor-pointer pointer-events-none">
      <Canvas camera={{ position: [0, 0, 200], fov: 80, rotation: [-45, 0, 0] }} className="w-full h-full">
        <Suspense fallback={null}>
          <gridHelper args={[10, 10]} />
          <ambientLight intensity={0.4} />
          <Model />
          <directionalLight position={[100, 0, 0]} intensity={1} />
          <directionalLight position={[-100, 0, 0]} intensity={0.02} color={[255, 0, 0]} />
          <directionalLight position={[0, 0, 100]} intensity={1} />
          <directionalLight position={[0, 0, -100]} intensity={0.02} color={[0, 0, 255]} />
          <directionalLight position={[0, 300, 0]} intensity={0.01} color={[0, 0, 255]} />
          <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.8} height={300} />
            <ToneMapping
              adaptive={true}
              resolution={256}
              middleGrey={0.6}
              maxLuminance={16.0}
              averageLuminance={1.0}
              adaptationRate={1.0}
            />
          </EffectComposer>
          <CameraController/>
        </Suspense>
      </Canvas>
    </div>
  );
}

function CameraController() {

  return <OrbitControls enabled={false} enablePan={false} enableZoom={false} />;
}

export default DavidScene;
