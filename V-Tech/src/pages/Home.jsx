import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaCode, FaCloud, FaRobot, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Business with Cutting-Edge Technology</h1>
          <p className="hero-subtitle">Empowering businesses with innovative software solutions, cloud services, and expert IT consulting.</p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-btn">Explore Services</Link>
            <Link to="/contact" className="secondary-btn">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2>Why Choose V-Tech?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>Expert Team</h3>
              <p>Our team of experienced professionals delivers exceptional results with cutting-edge technologies.</p>
            </div>
            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>Proven Results</h3>
              <p>We've helped numerous businesses achieve their digital transformation goals successfully.</p>
            </div>
            <div className="feature-card">
              <FaGlobe className="feature-icon" />
              <h3>Global Reach</h3>
              <p>Providing solutions to clients worldwide with local expertise and global standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaCode className="service-icon" />
              <h3>App Development</h3>
              <p>Custom web and mobile applications built with modern technologies and best practices.</p>
              <Link to="/services#app-development" className="service-link">Learn More</Link>
            </div>
            <div className="service-card">
              <FaCloud className="service-icon" />
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and services to power your business growth.</p>
              <Link to="/services#cloud-solutions" className="service-link">Learn More</Link>
            </div>
            <div className="service-card">
              <FaRobot className="service-icon" />
              <h3>IT Consulting</h3>
              <p>Strategic technology consulting to optimize your business operations.</p>
              <Link to="/services#it-consulting" className="service-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your goals with our technology solutions.</p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>
    </div>
  );
} 