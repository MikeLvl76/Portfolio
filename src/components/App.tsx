import About from "./About";
import Career from "./Career";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />}/>
      </Routes>
    </>
  );
}
