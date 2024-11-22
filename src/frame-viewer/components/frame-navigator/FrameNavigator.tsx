import React, { useState } from "react";
import { useAsync } from "react-use";
import { frameApiClient } from "../../services/frame-api-client";
import { ViewerCanvas } from "../viewer-canvas/ViewerCanvas";
import './FrameNavigator.css';
import { Slider } from "../../../ui/slider/Slider";

export const FrameNavigator = () => {
    const [selectedFrameId, setSelectedFrameId] = useState(0);

    const state = useAsync(async () => frameApiClient.get(selectedFrameId), [selectedFrameId]);

    return <div className="frame-navigator">
        {state.loading && <h1>Loading...</h1> ||
            (!state.loading && state.value !== undefined) && <ViewerCanvas frame={state.value} />}

        <div className="frame-navigator__overlay">
            <Slider currentValue={selectedFrameId} onChange={(newValue) => setSelectedFrameId(newValue)} />
        </div>
    </div>
}