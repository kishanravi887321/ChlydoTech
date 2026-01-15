import React from 'react';
import { Canvas } from '@react-three/fiber';

// Simplified GL component without complex shaders for React conversion
export const GL = ({ hovering }) => {
  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [1.26, 2.66, -1.82],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Simplified - the full particle system would require all the shaders */}
      </Canvas>
    </div>
  );
};
