import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

// Ensure that the element with ID 'root' exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Ensure there is a div with id='root' in your HTML.");
}

// Create the root and render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
