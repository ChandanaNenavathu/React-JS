import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'  
import Portfolio from './components/Portfolio'
import Help from './components/Help'


const App = () => {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
