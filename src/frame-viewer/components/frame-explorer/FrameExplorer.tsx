import React, { useState } from "react";
import { useAsync } from "react-use";
import { Cuboid, frameApiClient } from "../../services/frame-api-client";
import { FrameCanvas } from "../frame-canvas/FrameCanvas";
import './FrameExplorer.css';
import { Slider } from "../../../ui/slider/Slider";
import { Tooltip } from "../../../ui/tooltip/Tooltip";

export const FrameExplorer = () => {
    const [selectedFrameId, setSelectedFrameId] = useState(0);
    const [selectedCuboid, setSelectedCuboid] = useState<Cuboid | null>(null)

    const state = useAsync(async () => frameApiClient.get(selectedFrameId), [selectedFrameId]);

    return <div className="frame-explorer">
        <FrameCanvas frame={state.value ?? { frameId: selectedFrameId, points: [], cuboids: [] }}
            onSelectedCuboidChange={(cuboid) => setSelectedCuboid(cuboid)} />

        <div className="frame-explorer__slider-overlay">
            {selectedCuboid && <Tooltip cuboid={selectedCuboid} />}
            {state.loading && <p>Loading frame {selectedFrameId}...</p>}

            <Slider currentValue={selectedFrameId} onChange={(newValue) => setSelectedFrameId(newValue)} />
        </div>
    </div>
}