import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.js";
import Footer from "./components/Footer.js";
import Homepage from "./pages/homepage";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import Porefect from "./pages/porefect-alt";
import StitchMe from "./pages/stitch-me";
import Portfolio1 from "./pages/portfolio1";
import Portfolio2 from "./pages/portfolio2";
import DayPlanner from "./pages/day-planner";
import SanrioQuiz from "./pages/sanrio-quiz";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/porefect-alt" element={<Porefect />} />
        <Route path="/stitch-me" element={<StitchMe />} />
        <Route path="/portfolio1" element={<Portfolio1 />} />
        <Route path="/portfolio2" element={<Portfolio2 />} />
        <Route path="/day-planner" element={<DayPlanner />} />
        <Route path="/sanrio-quiz" element={<SanrioQuiz />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
