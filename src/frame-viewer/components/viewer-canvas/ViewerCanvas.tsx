import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';
import { ColoredPointCloud } from '../geometry/ColoredPointCloud';
import { Cuboid, Frame } from '../../services/frame-api-client';
import { TranslucidCuboid } from '../geometry/TranslucidCuboid';
import { Tooltip } from '../../../ui/tooltip/Tooltip';
import { Vector3 } from 'three';
import { Html } from "@react-three/drei";

type ViewerCanvasProps = {
    frame: Frame
}

export const ViewerCanvas = ({ frame }: ViewerCanvasProps) => {
    const [selectedCuboid, setSelectedCuboid] = useState<Cuboid | null>(null)

    return <Canvas className='viewerCanvas'>
        <color attach="background" args={[0x000000]} />
        <ambientLight />

        <ColoredPointCloud points={frame.points} coloringFn={point => [0, 1 / point.z, 0]} />

        {frame.cuboids.map(cuboid =>
            <TranslucidCuboid key={cuboid.uuid} cuboid={cuboid}
                onPointerEnter={() => setSelectedCuboid(cuboid)}
                onPointerLeave={() => setSelectedCuboid(null)}
            />)}

        {selectedCuboid &&
            <Html position={new Vector3(selectedCuboid.position.x, selectedCuboid.position.y, selectedCuboid.position.z)}>
                <Tooltip cuboid={selectedCuboid} />
            </Html>}

        <OrbitControls />
    </Canvas >
}