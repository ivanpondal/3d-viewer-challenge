import React, { useState } from "react";
import { useAsync, useKey } from "react-use";
import { Cuboid, frameApiClient } from "./services/frame-api-client";
import { FrameCanvas } from "./components/frame-canvas/FrameCanvas";
import './FrameExplorer.css';
import { Slider } from "../ui/slider/Slider";
import { Tooltip } from "../ui/tooltip/Tooltip";
import { Toast } from "../ui/toast/Toast";

export const FrameExplorer = () => {
    const [selectedFrameId, setSelectedFrameId] = useState(0);
    const [selectedCuboid, setSelectedCuboid] = useState<Cuboid | null>(null)

    useKey('j', () => setSelectedFrameId((prevState) => prevState > 0 ? prevState - 1 : prevState));
    useKey('k', () => setSelectedFrameId((prevState) => prevState < 49 ? prevState + 1 : prevState));

    const state = useAsync(async () => frameApiClient.get(selectedFrameId), [selectedFrameId]);

    return <div className="frame-explorer">
        <FrameCanvas frame={state.value ?? { frameId: selectedFrameId, points: [], cuboids: [] }}
            onSelectedCuboidChange={(cuboid) => setSelectedCuboid(cuboid)} />

        <div className="frame-explorer__tooltip-overlay">
            {selectedCuboid && <Tooltip cuboid={selectedCuboid} onDismiss={() => setSelectedCuboid(null)} />}
            {state.loading && <Toast text={`Loading frame ${selectedFrameId}...`} />}
        </div>

        <div className="frame-explorer__slider-overlay">
            <Slider currentValue={selectedFrameId} onChange={(newValue) => setSelectedFrameId(newValue)} />
        </div>
    </div>
}