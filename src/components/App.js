import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { Index } from "./career/Index";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Index />} />
      </Routes>
    </>
  );
}
