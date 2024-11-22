import React, { useMemo } from "react";
import { Point } from "../frames-api-client/frames-api-client";

type ColoredPointCloudProps = {
    points: Point[]
}

export const ColoredPointCloud = ({ points }: ColoredPointCloudProps) => {
    const positions = useMemo(() =>
        new Float32Array(points
            .map(point => [point.x, point.y, point.z])
            .flatMap(point => point))
        , [points])

    const colors = useMemo(() =>
        new Float32Array(points
            .map(point => [point.x, point.y, point.z])
            .flatMap(point => point))
        , [points])

    return <points>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                array={positions}
                count={positions.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach="attributes-color"
                array={colors}
                count={colors.length / 3}
                itemSize={3}
            />
        </bufferGeometry>
        <pointsMaterial vertexColors size={2} />
    </points>
}