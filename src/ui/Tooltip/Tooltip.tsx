import React from "react";
import { Cuboid } from "../../frame-viewer/services/frame-api-client";
import './Tooltip.css'

type TooltipProps = {
    cuboid: Cuboid
}

export const Tooltip = ({ cuboid }: TooltipProps) => {
    return <div className="tooltip">
        <p>
            <b>uuid: </b>{`${cuboid.uuid}\n`}
            <b>label: </b>{cuboid.label}{'\n'}
            <b>camera used: </b>{cuboid.cameraUsed}{'\n'}
            <b>stationary: </b> {cuboid.stationary ? "yes" : "no"}{'\n'}
            <b>sibling id: </b> {cuboid.siblingId}{'\n'}
            <b>sensor id: </b> {cuboid.sensorId}
            <b>x: </b> {cuboid.position.x}
            <b>y: </b> {cuboid.position.y}
            <b>z: </b> {cuboid.position.z}
        </p>
    </div>
}
