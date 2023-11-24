import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Career from "./pages/Career.tsx";
import Projects from "./pages/Projects.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="career" element={<Career />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </Router>
);
