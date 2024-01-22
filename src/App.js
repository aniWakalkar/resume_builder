import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// Navigating using react router dom

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/resume_builder" element={<Home />} />
          <Route path="/resume_builder/details" element={<Details />} />
          <Route path="/resume_builder/aboutUs" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
