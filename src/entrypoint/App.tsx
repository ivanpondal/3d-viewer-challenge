import React from 'react';
import { ViewerCanvas } from '../viewer/ViewerCanvas';
import { framesApiClient } from '../frames-api-client/frames-api-client';
import { useAsync } from 'react-use';

export const App: React.FC = () => {
    const state = useAsync(async () => framesApiClient.get(0), []);

    return (
        state.loading && <h1>Loading...</h1> ||
        (!state.loading && state.value !== undefined) && <ViewerCanvas frame={state.value} />
    )
}