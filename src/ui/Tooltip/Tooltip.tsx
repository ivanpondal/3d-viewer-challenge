import React from "react";
import { Cuboid } from "../../frame-viewer/services/frame-api-client";
import './Tooltip.css'

type TooltipProps = {
    cuboid: Cuboid;
    onDismiss: ()=> void
}

type LabelProps = {
    property: string;
    value: string;
}

const Label = ({ property, value }: LabelProps) => {
    return <p className="source-code-pro-font tooltip-text--no-margin"><b>{property}: </b>{value}</p>
}

export const Tooltip = ({ cuboid, onDismiss }: TooltipProps) => {
    return <div className="tooltip" onClick={onDismiss}>
        <Label property="uuid" value={cuboid.uuid} />
        <Label property="position [x, y, z]" value={`[${cuboid.position.x}, ${cuboid.position.y}, ${cuboid.position.z}]`} />
        <Label property="label" value={cuboid.label} />
        <Label property="stationary" value={cuboid.stationary ? "yes" : "no"} />
        <Label property="camera used" value={cuboid.cameraUsed.toString()} />
        <Label property="sensor id" value={cuboid.sensorId.toString()} />
        <Label property="sibling id" value={cuboid.siblingId} />
        <p className="source-code-pro-font tooltip-text--margin-top">(click anywhere to dismiss)</p>
    </div>
}
