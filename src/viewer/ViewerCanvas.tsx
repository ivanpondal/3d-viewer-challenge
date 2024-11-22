import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';
import { ColoredPointCloud } from '../geometry/ColoredPointCloud';

export const ViewerCanvas = () => (
    <Canvas className='viewerCanvas'>
        <ColoredPointCloud />
        <OrbitControls />
    </Canvas >
)