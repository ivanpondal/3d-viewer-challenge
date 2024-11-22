import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';
import { ColoredPointCloud } from '../geometry/ColoredPointCloud';
import { Frame } from '../frames-api-client/frames-api-client';

type ViewerCanvasProps = {
    frame: Frame
}

export const ViewerCanvas = ({ frame }: ViewerCanvasProps) => (
    <Canvas className='viewerCanvas'>
        <ColoredPointCloud points={frame.points} coloringFn={point => [0, 1 / point.z, 0]} />
        <OrbitControls />
    </Canvas >
)