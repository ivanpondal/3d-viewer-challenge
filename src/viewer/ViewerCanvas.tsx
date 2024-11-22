import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import './ViewerCanvas.css';
import { ColoredPointCloud } from '../geometry/ColoredPointCloud';
import { Cuboid, Frame } from '../frames-api-client/frames-api-client';
import { TranslucidCuboid } from '../geometry/TranslucidCuboid';
import { Tooltip } from '../ui/Tooltip/Tooltip';

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
            />)
        }
        {selectedCuboid && <Tooltip cuboid={selectedCuboid} />}
        <OrbitControls />
    </Canvas >
}