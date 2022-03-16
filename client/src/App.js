import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import CaseStudies from './components/pages/CaseStudies';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/case-studies' element={<CaseStudies/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
