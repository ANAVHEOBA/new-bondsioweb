import React from 'react';
import './TeamworkSection.css';

const TeamworkSection: React.FC = () => {
  return (
    <section className="teamwork-section">
      <p className="teamwork-subtitle">Bondsio Turns Moments Into Communities</p>
      <h2 className="teamwork-title">
        Connection Isn’t Accidental —<br />
        Bondsio Makes It Happen
      </h2>
      <p className="teamwork-description">
        Bondsio is designed to take you from scrolling alone to living in moments that matter—where every feature works to bring people closer, naturally.
      </p>
      <div className="teamwork-content-grid">
        <div className="teamwork-features-left">
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Social Posting With Purpose</h3>
            <p className="feature-card-description">
              Every post you share isn't just content. It's an open door. Bondsio makes posting the start of conversations, not the end of them.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Real-Time Engagement</h3>
            <p className="feature-card-description">
              Because life doesn't wait. Whether it's a last-minute hangout or a live update, Bondsio keeps bonds alive in the moment.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Interest-Based Bonds</h3>
            <p className="feature-card-description">
              Not just another “group.” Bonds are living channels built around what matters most to you, where belonging feels instant.
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
            <h3 className="feature-card-title">Community-Driven Activities</h3>
            <p className="feature-card-description">
              Spontaneous. Simple. Human. Anyone can spark an activity, and everyone can be part of it.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Stories That Grow</h3>
            <p className="feature-card-description">
              One hello becomes a chat. One chat becomes a meetup/activity. One meetup/activity becomes your “Bond”.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon-wrapper">
              <img src="/MagnifyingGlass (1).png" alt="Search" className="feature-card-icon" />
            </div>
            <h3 className="feature-card-title">Activities That Suit You</h3>
            <p className="feature-card-description">
              No endless searching, no fatigue. Just quick, smart suggestions that point you straight to activities and people that fit you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamworkSection;