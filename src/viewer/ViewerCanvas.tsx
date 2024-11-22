import React from 'react';
import { Canvas } from '@react-three/fiber';

export const ViewerCanvas = () => (
    <div id="canvas-container">
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    </div>
)