import React from "react";
import { useAsync } from "react-use";
import { frameApiClient } from "../../services/frame-api-client";
import { ViewerCanvas } from "../viewer-canvas/ViewerCanvas";
import './FrameNavigator.css';
import { Slider } from "../../../ui/slider/Slider";

export const FrameNavigator = () => {
    const state = useAsync(async () => frameApiClient.get(0), []);

    return <div className="frame-navigator">
        {state.loading && <h1>Loading...</h1> ||
            (!state.loading && state.value !== undefined) && <ViewerCanvas frame={state.value} />}

        <div className="frame-navigator__overlay">
            <Slider />
        </div>
    </div>
}