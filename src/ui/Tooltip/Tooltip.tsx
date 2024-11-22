import React from "react";
import { Cuboid } from "../../frames-api-client/frames-api-client";
import { Vector3 } from "three";
import { Html } from "@react-three/drei";

type TooltipProps = {
    cuboid: Cuboid
}

export const Tooltip = ({ cuboid }: TooltipProps) => {
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
