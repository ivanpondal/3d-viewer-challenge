import React from "react";
import { createRoot } from 'react-dom/client';
import { FrameNavigator } from "./frame-viewer/components/frame-navigator/FrameNavigator";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<FrameNavigator />);