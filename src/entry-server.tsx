import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

// Same data the page shows, reused for structured data, sitemap and llms.txt.
export { projects } from "./data/projects";
export { skillCategories } from "./data/skills-categories";
export { experiences } from "./data/experiencies";
export { contactInfo } from "./data/contact-info";

/** Renders a route to HTML for the build-time prerender (scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
