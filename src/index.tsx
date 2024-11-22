import React from "react";
import { createRoot } from 'react-dom/client';
import { FrameExplorer } from "./frame-viewer/components/frame-explorer/FrameExplorer";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<FrameExplorer />);