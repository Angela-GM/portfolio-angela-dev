import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { NotFound } from "./pages/not-found";
import { Privacity } from "./pages/privacity";
import { Terms } from "./pages/terms";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacity" element={<Privacity />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
