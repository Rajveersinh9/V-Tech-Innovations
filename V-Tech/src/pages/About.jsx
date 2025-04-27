import React from 'react';
import { FaLightbulb, FaChartLine, FaHandshake, FaGlobe } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About V-Tech Innovations</h1>
          <p className="hero-subtitle">
            Pioneering the future of technology solutions with innovation, expertise, and excellence.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At V-Tech Innovations, we are committed to transforming businesses through cutting-edge technology solutions. 
            Our mission is to empower organizations with innovative software, cloud services, and IT consulting that drive 
            growth, efficiency, and competitive advantage in the digital age.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>
              We constantly push boundaries and explore new technologies to deliver 
              groundbreaking solutions that solve real business challenges.
            </p>
          </div>
          <div className="value-card">
            <FaChartLine className="value-icon" />
            <h3>Excellence</h3>
            <p>
              We maintain the highest standards in everything we do, from code quality 
              to customer service, ensuring exceptional results for our clients.
            </p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Partnership</h3>
            <p>
              We believe in building strong, collaborative relationships with our clients, 
              working together to achieve their business objectives.
            </p>
          </div>
          <div className="value-card">
            <FaGlobe className="value-icon" />
            <h3>Global Impact</h3>
            <p>
              We strive to make a positive impact on businesses worldwide, helping them 
              thrive in an increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <h2>Our Achievements</h2>
        <div className="achievements-content">
          <div className="achievement-item">
            <h3>1+ Years</h3>
            <p>of industry experience delivering innovative solutions</p>
          </div>
          <div className="achievement-item">
            <h3>20+</h3>
            <p>successful projects completed worldwide</p>
          </div>
          <div className="achievement-item">
            <h3>95%</h3>
            <p>client satisfaction rate</p>
          </div>
          <div className="achievement-item">
            <h3>2+</h3>
            <p>countries served with our technology solutions</p>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <h2>Our Approach</h2>
        <div className="approach-content">
          <p>
            We take a comprehensive approach to technology solutions, combining deep industry 
            expertise with cutting-edge innovation. Our process begins with understanding your 
            unique business needs and challenges, followed by developing tailored solutions 
            that drive real results.
          </p>
          <p>
            Our team of experts stays at the forefront of technological advancements, ensuring 
            that our clients benefit from the latest innovations in software development, 
            cloud computing, and IT consulting.
          </p>
        </div>
      </section>
    </div>
  );
} 