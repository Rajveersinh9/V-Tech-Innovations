import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Custom Software Development",
      description: "Transform your business with tailor-made software solutions designed to meet your specific needs and drive growth. Our expert team specializes in creating robust, scalable, and efficient software applications that align perfectly with your business objectives.",
      features: [
        "Web application development with modern frameworks (React, Angular, Vue.js)",
        "Enterprise software solutions with microservices architecture",
        "API development and integration with third-party services",
        "Database design and optimization for high performance",
        "Quality assurance and automated testing implementation",
        "Legacy system modernization and migration"
      ],
      benefits: [
        "Scalable and maintainable codebase following best practices",
        "Customized solutions tailored to your business needs",
        "Seamless integration with existing systems and workflows",
        "Ongoing support and maintenance with regular updates",
        "Improved operational efficiency and productivity",
        "Competitive advantage through innovative technology"
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Create powerful mobile experiences that engage users and drive business results across iOS and Android platforms. Our mobile solutions combine cutting-edge technology with intuitive design to deliver exceptional user experiences.",
      features: [
        "Native iOS and Android development with Swift and Kotlin",
        "Cross-platform mobile solutions using React Native and Flutter",
        "UI/UX design and optimization for maximum engagement",
        "App store optimization and marketing strategy",
        "Push notification implementation and analytics",
        "Offline functionality and data synchronization"
      ],
      benefits: [
        "Enhanced user engagement through intuitive interfaces",
        "Secure data handling and storage with encryption",
        "Offline functionality for uninterrupted access",
        "Regular updates and maintenance for optimal performance",
        "Increased customer satisfaction and loyalty",
        "Higher conversion rates and business growth"
      ]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing to scale your business operations and enhance efficiency. Our cloud solutions provide secure, reliable, and cost-effective infrastructure for your digital transformation journey.",
      features: [
        "Cloud infrastructure setup and migration services",
        "Serverless architecture implementation for cost efficiency",
        "Cloud security and compliance management",
        "DevOps automation and CI/CD pipeline setup",
        "Cost optimization strategies and resource management",
        "Multi-cloud and hybrid cloud solutions"
      ],
      benefits: [
        "Scalable infrastructure on demand for business growth",
        "Enhanced security measures and data protection",
        "Reduced operational costs and improved ROI",
        "24/7 monitoring and support for maximum uptime",
        "Flexible and agile development environment",
        "Disaster recovery and business continuity"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and proactive threat management. Our cybersecurity services ensure your business remains secure in an increasingly complex digital landscape.",
      features: [
        "Security assessment and penetration testing",
        "Threat detection and prevention systems",
        "Data encryption and protection solutions",
        "Compliance management (GDPR, HIPAA, etc.)",
        "Incident response planning and execution",
        "Security awareness training programs"
      ],
      benefits: [
        "Comprehensive security coverage across all systems",
        "Real-time threat monitoring and alerts",
        "Regular security updates and patch management",
        "Employee security training and awareness",
        "Reduced risk of data breaches and cyber attacks",
        "Compliance with industry regulations and standards"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of technology solutions designed to help your business thrive in the digital age.</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="overview-content">
          <h2>Why Choose Our Services?</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <FaArrowRight />
              </div>
              <h3>Expert Team</h3>
              <p>Our team of experienced professionals delivers top-notch solutions tailored to your needs.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <FaArrowRight />
              </div>
              <h3>Cutting-Edge Technology</h3>
              <p>We use the latest technologies and best practices to ensure optimal results.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <FaArrowRight />
              </div>
              <h3>Proven Results</h3>
              <p>Our solutions have helped numerous businesses achieve their digital transformation goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <div className="placeholder-image" style={{ backgroundColor: index % 2 === 0 ? '#e0f2fe' : '#f0f9ff' }}>
                  {service.icon}
                </div>
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  <div className="features-section">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {service.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="benefits-section">
                    <h4>Benefits</h4>
                    <div className="benefits-list">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="benefit-item">
                          <span className="benefit-text">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss how our services can help you achieve your goals.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Services; 