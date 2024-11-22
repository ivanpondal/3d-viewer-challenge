import React, { useState } from "react"
import { Cuboid } from "../frames-api-client/frames-api-client"
import { Vector3 } from "three"

type TranslucidCuboidProps = {
    cuboid: Cuboid,
    onPointerEnter?: () => void,
    onPointerLeave?: () => void
}

export const TranslucidCuboid = ({ cuboid, onPointerEnter, onPointerLeave }: TranslucidCuboidProps) => {
    const [hovered, setHovered] = useState(false);

    const position = new Vector3(cuboid.position.x, cuboid.position.y, cuboid.position.z)
    return <>
        <mesh
            position={position}
            rotation={[0, 0, cuboid.yaw]}
        >
            <boxGeometry args={[cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z]} />

            <meshStandardMaterial color={0xff0000} transparent opacity={hovered ? 0.8 : 0.6} />
        </mesh>
        <mesh
            position={position}
            rotation={[0, 0, cuboid.yaw]}
            onPointerEnter={() => {
                setHovered(true);
                onPointerEnter?.();
            }
            }
            onPointerLeave={() => {
                setHovered(false);
                onPointerLeave?.();
            }}
        >
            <boxGeometry args={[cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z]} />

            <meshStandardMaterial color={0x00000} wireframe />
        </mesh>
    </>
}