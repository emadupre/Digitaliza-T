
import { createRoot } from 'react-dom/client'
import React from 'react' // Explicitly import React
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Wrap App in React.StrictMode to ensure proper context
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
