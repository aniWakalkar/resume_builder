import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Details from "./components/Details";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/resume_builder" element={<Home />}/>
          <Route path="/resume_builder/details" element={<Details />} />
          <Route path="/resume_builder/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App