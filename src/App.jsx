import React from 'react';
import Contact from './pages/Contact.jsx';
import Home from './pages/index.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>


      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
