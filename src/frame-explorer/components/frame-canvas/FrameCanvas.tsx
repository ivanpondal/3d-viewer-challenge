import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FlyControls } from "@react-three/drei";
import './FrameCanvas.css';
import { ColoredPointCloud } from 'frame-explorer/components/geometry/ColoredPointCloud';
import { Cuboid, Frame } from 'frame-explorer/services/frame-api-client';
import { TranslucidCuboid } from 'frame-explorer/components/geometry/TranslucidCuboid';

type FrameCanvasProps = {
    frame: Frame;
    onSelectedCuboidChange: (cuboid: Cuboid | null) => void
}

export const FrameCanvas = ({ frame, onSelectedCuboidChange }: FrameCanvasProps) =>
    <Canvas className='viewerCanvas' camera={{ position: [0, 0, 20], rotation: [0, 0, 0] }} onClick={() => onSelectedCuboidChange(null)}>
        <ambientLight />
        <color attach="background" args={[0x000000]} />

        <ColoredPointCloud points={frame.points} coloringFn={point => [0, 1 / point.z, 0]} />

        {frame.cuboids.map(cuboid =>
            <TranslucidCuboid key={cuboid.uuid} cuboid={cuboid}
                onPointerEnter={() => onSelectedCuboidChange(cuboid)}
            />)}

        <FlyControls movementSpeed={60} dragToLook rollSpeed={2} />
    </Canvas >