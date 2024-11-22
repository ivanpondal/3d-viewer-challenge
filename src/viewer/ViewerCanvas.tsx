import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';

export const ViewerCanvas = () => (
    <Canvas className='viewerCanvas'>
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
        <OrbitControls />
    </Canvas>
)