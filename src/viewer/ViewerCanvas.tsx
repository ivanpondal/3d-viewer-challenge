import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';
import { ColoredPointCloud } from '../geometry/ColoredPointCloud';
import { Frame } from '../frames-api-client/frames-api-client';
import { TranslucidCuboid } from '../geometry/TranslucidCuboid';

type ViewerCanvasProps = {
    frame: Frame
}

export const ViewerCanvas = ({ frame }: ViewerCanvasProps) => (
    <Canvas className='viewerCanvas'>
        <ambientLight />
        <ColoredPointCloud points={frame.points} coloringFn={point => [0, 1 / point.z, 0]} />
        {frame.cuboids.map(cuboid => <TranslucidCuboid key={cuboid.uuid} cuboid={cuboid} />)}
        <OrbitControls />
    </Canvas >
)