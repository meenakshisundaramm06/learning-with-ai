import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import type { ViewMode } from "./types";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("The root element was not found.");

const viewAttribute = document.documentElement.dataset.view;
const mode: ViewMode = viewAttribute === "notes" ? "notes" : "presentation";

createRoot(rootElement).render(
  <StrictMode>
    <App mode={mode} />
  </StrictMode>,
);
