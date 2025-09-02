import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      {/* Header */}
      <p className="features-subtitle">Find out more</p>
      <h2 className="features-title">
        Connecting you with everyone;
        <br />
        Anytime, anywhere.
      </h2>

      {/* Feature Icons */}
      <div className="features-grid">
        <div className="feature-item">
          <img src="/MagnifyingGlass.png" alt="Find activities" className="feature-icon" />
          <p className="feature-text">Find activities</p>
        </div>
        <div className="feature-item">
          <img src="/UsersThree.png" alt="Connect in real-time" className="feature-icon" />
          <p className="feature-text">Connect in real-time</p>
        </div>
        <div className="feature-item">
          <img src="/Panorama.png" alt="Share Memories" className="feature-icon" />
          <p className="feature-text">Share Memories</p>
        </div>
      </div>

      {/* Description & Button */}
      <p className="features-description">
        It implies that the individual possesses the necessary skills, knowledge, and resources to complete a given task successfully.
        A capable person is confident in their abilities and can handle challenges with ease. They are typically reliable, responsible, and competent.
      </p>
      <button className="download-btn">Download App</button>

      {/* Phone Showcase Grid */}
      <div className="phone-showcase-grid">
        {/* First Phone - Top Right */}
        <div className="phone-layout top-right">
          <div className="phone-container">
            <div className="phone-content">
              <h3>Active, but unsure where and what to do?</h3>
              <p>a personal intelligence system that helps you write, express yourself, and get things done effortlessly. Its groundbreaking privacy features ensure that no one else can access your information.</p>
            </div>
            <img src="/Device.png" alt="Phone 1" className="phone-img" />
          </div>
        </div>

        {/* Second Phone - Middle Left */}
        <div className="phone-layout middle-left">
          <div className="phone-container">
            <img src="/Device (1).png" alt="Phone 2" className="phone-img" />
            <div className="phone-content">
              <h3>Active, but unsure where and what to do?</h3>
              <p>a personal intelligence system that helps you write, express yourself, and get things done effortlessly. Its groundbreaking privacy features ensure that no one else can access your information.</p>
            </div>
          </div>
        </div>

        {/* Third Phone - Middle Right */}
        <div className="phone-layout middle-right">
          <div className="phone-container">
            <div className="phone-content">
              <h3>Active, but unsure where and what to do?</h3>
              <p>a personal intelligence system that helps you write, express yourself, and get things done effortlessly. Its groundbreaking privacy features ensure that no one else can access your information.</p>
            </div>
            <img src="/Device (2).png" alt="Phone 3" className="phone-img" />
          </div>
        </div>

        {/* Fourth Phone - Bottom Left */}
        <div className="phone-layout bottom-left">
          <div className="phone-container">
            <img src="/Device (3).png" alt="Phone 4" className="phone-img" />
            <div className="phone-content">
              <h3>Active, but unsure where and what to do?</h3>
              <p>a personal intelligence system that helps you write, express yourself, and get things done effortlessly. Its groundbreaking privacy features ensure that no one else can access your information.</p>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="arrow-container">
          <img src="/Vector19.png" alt="Arrow" className="arrow arrow-1" />
          <img src="/Vector20.png" alt="Arrow" className="arrow arrow-2" />
          <img src="/Vector19.png" alt="Arrow" className="arrow arrow-3" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;