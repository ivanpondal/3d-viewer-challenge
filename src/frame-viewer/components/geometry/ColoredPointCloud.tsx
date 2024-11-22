import React, { useMemo } from "react";
import { Point } from "../../services/frame-api-client";

type ColoredPointCloudProps = {
    points: Point[];
    coloringFn: (point: Point) => [number, number, number]
}

export const ColoredPointCloud = ({ points, coloringFn }: ColoredPointCloudProps) => {
    const positions = useMemo(() =>
        new Float32Array(points
            .map(point => [point.x, point.y, point.z])
            .flatMap(point => point))
        , [points])

    const colors = useMemo(() =>
        new Float32Array(points
            .map(coloringFn)
            .flatMap(color => color))
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
        <pointsMaterial vertexColors size={0.15} />
    </points>
}