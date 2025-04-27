import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Innovating Tomorrow's Technology Today</h1>
        <p>
          V-Tech Innovations leads the way in cutting-edge technological solutions,
          delivering excellence through innovation, expertise, and unwavering commitment
          to our clients' success.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-accent">Explore Services</a>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
      <img src={heroImage} alt="V-Tech Innovation Visualization" className="hero-image" />
    </section>
  );
};

export default Hero; 