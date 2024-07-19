import { useState, useRef, useEffect } from "react";

import "./App.css";

import { useIsVisible } from "./components/hooks/IsVisible";

import "animate.css/animate.compat.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const navref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isVisibleNav = useIsVisible(ref1);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  console.log(isVisibleNav);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
