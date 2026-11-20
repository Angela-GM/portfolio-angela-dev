import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are prerendered at build time (scripts/prerender.mjs) so crawlers
// that don't run JavaScript see the content; the browser hydrates that HTML.
// In `vite dev` the root is empty and the app renders normally.
// (Checks for an element: in dev the root only holds the <!--app-html--> comment.)
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
