import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/App.css';
import logo from './assets/V-Tech Logo.png';

export default function App() {
  return (
    <Router>
      <header className="sticky-header">
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src={logo} alt="V-Tech Logo" className="logo" />
            </Link>
            <span className="company-name">V-Tech Innovations</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
} 