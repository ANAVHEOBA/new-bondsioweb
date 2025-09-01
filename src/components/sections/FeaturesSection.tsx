import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <p className="features-subtitle">Find out more</p>
      <h2 className="features-title">
        Connecting you with everyone;
        <br />
        Anytime, anywhere.
      </h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/MagnifyingGlass.png" alt="Find activities icon" className="feature-icon" />
          <p className="feature-text">Find activities</p>
        </div>
        <div className="feature-item">
          <img src="/UsersThree.png" alt="Connect in real-time icon" className="feature-icon" />
          <p className="feature-text">Connect in real-time</p>
        </div>
        <div className="feature-item">
          <img src="/Panorama.png" alt="Share Memories icon" className="feature-icon" />
          <p className="feature-text">Share Memories</p>
        </div>
      </div>
      <p className="features-description">
        It implies that the individual possesses the necessary skills, knowledge, and
        resources to complete a given task successfully. A capable person is confident
        in their abilities and can handle challenges with ease. They are typically
        reliable, responsible, and competent.
      </p>
    </section>
  );
};

export default FeaturesSection; 