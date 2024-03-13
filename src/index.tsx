import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/firebase/firebaseconfig";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
