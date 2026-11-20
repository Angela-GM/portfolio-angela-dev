import { Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { NotFound } from "./pages/not-found";
import { Privacy } from "./pages/privacy";

// The router is provided by the caller: BrowserRouter in the browser
// (main.tsx) and StaticRouter when prerendering (entry-server.tsx).
function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacidad" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
