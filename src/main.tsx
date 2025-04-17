
import { createRoot } from 'react-dom/client'
import React from 'react' // Explicitly import React
import App from './App.tsx'
import './index.css'

// Wrap App in React.StrictMode to ensure proper context
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
