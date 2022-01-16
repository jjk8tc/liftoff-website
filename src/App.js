import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Quote from './components/pages/Quote';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
