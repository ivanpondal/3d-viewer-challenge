import React from 'react';
import { ViewerCanvas } from '../frame-viewer/components/viewer-canvas/ViewerCanvas';
import { frameApiClient } from '../frame-viewer/services/frame-api-client';
import { useAsync } from 'react-use';

export const App: React.FC = () => {
    const state = useAsync(async () => frameApiClient.get(0), []);

    return <div>
        {state.loading && <h1>Loading...</h1> ||
            (!state.loading && state.value !== undefined) && <ViewerCanvas frame={state.value} />}
    </div>
}