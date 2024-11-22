import React from "react"
import { Cuboid } from "../frames-api-client/frames-api-client"
import { BoxGeometry, Color } from "three"

type TranslucidCuboidProps = {
    cuboid: Cuboid
}

export const TranslucidCuboid = ({ cuboid }: TranslucidCuboidProps) => {
    const boxGeometry = new BoxGeometry(cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z)
    
    return <>
        <mesh
            position={[cuboid.position.x, cuboid.position.y, cuboid.position.z]}
            rotation={[0, 0, cuboid.yaw]}
        >
            <boxGeometry args={[cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z]} />

            <meshStandardMaterial color={0xff0000} transparent opacity={0.7} />
        </mesh>
        <mesh
            position={[cuboid.position.x, cuboid.position.y, cuboid.position.z]}
            rotation={[0, 0, cuboid.yaw]}
        >
            <boxGeometry args={[cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z]} />

            <meshStandardMaterial color={0x00000} wireframe />
        </mesh>
    </>
}