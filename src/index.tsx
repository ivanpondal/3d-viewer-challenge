import React from "react";
import { createRoot } from 'react-dom/client';

const App: React.FC = () => <h1>Hello, React with TypeScript and Parcel!</h1>;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);