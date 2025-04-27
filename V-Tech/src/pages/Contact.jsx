import React from 'react';
import './Contact.css';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Whether you have a question about our services, 
            need a quote, or want to discuss a potential project, we're here to help.
          </p>
        </div>
      </section>

      <div className="contact-container">
        <div className="form-embed">
          <iframe
            title="Contact Form"
            src="https://forms.gle/zgA5aBSQ81vsoFVN7"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ borderRadius: '12px', background: '#fff' }}
            allowFullScreen
          >Loading…</iframe>
        </div>

        <div className="social-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 