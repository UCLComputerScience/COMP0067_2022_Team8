import './styles/App.css';
import ResponsiveAppBar from './components/Navbar.js';
import { Route, Routes } from 'react-router';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Partners from './components/Partners'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Partners' element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
