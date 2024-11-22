import React from "react";

export const ColoredPointCloud = () => {
    const positions = new Float32Array([0, 0, 0]);
    const colors = new Float32Array([0, 0, 0]);

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