import React, { useMemo } from "react";
import { Point } from "../../services/frame-api-client";
import { Points } from "@react-three/drei";
import { BufferGeometry, Float32BufferAttribute, PointsMaterial } from "three";

type ColoredPointCloudProps = {
    points: Point[];
    coloringFn: (point: Point) => [number, number, number]
}

export const ColoredPointCloud = ({ points, coloringFn }: ColoredPointCloudProps) => {
    const positions = useMemo(() => new Float32Array(points
        .map(point => [point.x, point.y, point.z])
        .flatMap(point => point)), [points])

    const geometry = useMemo(() => {
        const geometry = new BufferGeometry();

        const colors = points
            .map(coloringFn)
            .flatMap(color => color)

        geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

        return geometry;
    }, [points, positions]);

    const material = useMemo(() => new PointsMaterial({ size: 0.4, vertexColors: true }), []);

    return <Points geometry={geometry} positions={positions} material={material} />
}