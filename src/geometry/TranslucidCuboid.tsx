import React, { useState } from "react"
import { Cuboid } from "../frames-api-client/frames-api-client"
import { BoxGeometry, Vector3 } from "three"
import { Html } from "@react-three/drei"

type TranslucidCuboidProps = {
    cuboid: Cuboid
}

const TranslucidCuboidTooltip = ({ cuboid }: TranslucidCuboidProps) => {
    const position = new Vector3(cuboid.position.x, cuboid.position.y, cuboid.position.z)

    return <Html position={position}>
        <div>
            <p>
                <b>uuid: </b>{cuboid.uuid}{'\n'}
                <b>label: </b>{cuboid.label}{'\n'}
                <b>camera used: </b>{cuboid.cameraUsed}{'\n'}
                <b>stationary: </b> {cuboid.stationary ? "yes" : "no"}{'\n'}
                <b>sibling id: </b> {cuboid.siblingId}{'\n'}
                <b>sensor id: </b> {cuboid.sensorId}
            </p>
        </div>
    </Html>
}

export const TranslucidCuboid = ({ cuboid }: TranslucidCuboidProps) => {
    const boxGeometry = new BoxGeometry(cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z)
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
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            <boxGeometry args={[cuboid.dimensions.x, cuboid.dimensions.y, cuboid.dimensions.z]} />

            <meshStandardMaterial color={0x00000} wireframe />
        </mesh>
        {hovered && <TranslucidCuboidTooltip cuboid={cuboid} />}
    </>
}