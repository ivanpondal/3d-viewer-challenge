import React, { useState } from "react";
import { useAsync } from "react-use";
import { frameApiClient } from "../../services/frame-api-client";
import { FrameCanvas } from "../frame-canvas/FrameCanvas";
import './FrameExplorer.css';
import { Slider } from "../../../ui/slider/Slider";

export const FrameExplorer = () => {
    const [selectedFrameId, setSelectedFrameId] = useState(0);

    const state = useAsync(async () => frameApiClient.get(selectedFrameId), [selectedFrameId]);

    return <div className="frame-explorer">
        <FrameCanvas frame={state.value ?? { frameId: selectedFrameId, points: [], cuboids: [] }} loading={state.loading} />

        <div className="frame-explorer__overlay">
            <Slider currentValue={selectedFrameId} onChange={(newValue) => setSelectedFrameId(newValue)} />
        </div>
    </div>
}