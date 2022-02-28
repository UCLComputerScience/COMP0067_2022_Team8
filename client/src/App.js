import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import CaseStudies from './components/pages/CaseStudies';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/case-studies' component={CaseStudies} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
