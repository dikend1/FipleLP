import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found");
}
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
