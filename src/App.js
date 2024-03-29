import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Skills from "./components/skills/index";
import Projects from "./components/projects/index";

function App() {
  return (
    <Router>
      <div>
        {" "}
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
