import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Career from "./pages/Career.tsx";
import Projects from "./pages/Projects.tsx";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./themes/custom.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Career />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
