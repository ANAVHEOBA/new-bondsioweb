import React from 'react';
import './TeamworkSection.css';

const TeamworkSection: React.FC = () => {
  return (
    <section className="teamwork-section">
      <p className="teamwork-subtitle">Find out more</p>
      <h2 className="teamwork-title">
        It Takes a Village, but begins with you
      </h2>
      <p className="teamwork-description">
        It implies that the individual possesses the necessary skills, knowledge, and resources to complete a given task successfully. A capable person is confident.
      </p>
      <div className="teamwork-content-grid">
        <div className="teamwork-features-left">
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Build Connections</h3>
            <p className="feature-card-description">
              Developing strong relationships can lead to collaboration, support, and shared opportunities.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Share Your Journey</h3>
            <p className="feature-card-description">
              By communicating your experiences, you empower others to learn and grow alongside you.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Create Lasting Impact</h3>
            <p className="feature-card-description">
              Striving for an ever-lasting meaningful contributions that can inspire change and foster a sense of community amongst everyone.
            </p>
          </div>
        </div>
        <div className="teamwork-central-image-container">
          <img src="/Frame 2134281320.png" alt="Bondsio App Interface" className="teamwork-central-image" />
        </div>
        <div className="teamwork-features-right">
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Find Your People</h3>
            <p className="feature-card-description">
              It implies that the individual possesses the necessary skills, knowledge, and resources to complete a given task successfully.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Embrace Diversity</h3>
            <p className="feature-card-description">
              Welcoming different perspectives enriches discussions and drives innovative solutions.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Cultivate Resilience</h3>
            <p className="feature-card-description">
              Building the ability to adapt and recover from setbacks is crucial for sustained growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamworkSection;