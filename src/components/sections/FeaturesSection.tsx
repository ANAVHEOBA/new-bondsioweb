import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Header */}
      <p className="features-subtitle">An Online Place To Find Your Offline People</p>
      <h2 className="features-title">
        Bonds That Matter,<br />
        Moments That Last
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
        Forget the endless scrolling. Bondsio is built for real people, real moments, and real bonds. Wherever life takes you, we make it easier to discover your people and grow with them.
      </p>
      <button className="download-btn">Download App</button>

      {/* First Phone Showcase Grid */}
      <div className="phone-showcase-grid">
        <div className="phone-layout">
          <div className="phone-container">
            <div className="phone-content">
              <h3>Wherever life takes you,<br />Bondsio always has a place for you</h3>
              <p>
                Some days you're chasing new adventures, and other days you're just looking for quiet company. With Bondsio, you don't have to fit a mold—every step, every pace, every kind of presence is welcome. This is your space to belong, no matter what belonging looks like for you.
              </p>
            </div>
            <img src="/Device.png" alt="Phone" className="phone-img" />
          </div>
        </div>
      </div>

      {/* Second Diagonal Phone Showcase Grid */}
      <div className="phone-showcase-grid diagonal">
        <div className="phone-layout">
          <div className="phone-container">
            <img src="/Device (1).png" alt="Phone" className="phone-img" />
            <div className="phone-content">
              <h3>Shared Moments Become Real Connections</h3>
              <p>
                Friendship doesn't always start with big declarations. On Bondsio, small shared moments grow into something bigger—bonds of trust, care, and real belonging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Phone Showcase Grid - Back to original layout */}
      <div className="phone-showcase-grid third">
        <div className="phone-layout">
          <div className="phone-container">
            <div className="phone-content">
              <h3>Togetherness, Not Alone</h3>
              <p>
                It's one thing to be surrounded by people, and another to feel like you truly belong. Bondsio helps you discover communities/Bonds where connection flows naturally—because when we share activities, laughter, or even silence, we find a deeper kind of togetherness.
              </p>
            </div>
            <img src="/Device (2).png" alt="Phone" className="phone-img" />
          </div>
        </div>
      </div>

      {/* Fourth Diagonal Phone Showcase Grid */}
      <div className="phone-showcase-grid fourth">
        <div className="phone-layout">
          <div className="phone-container">
            <img src="/Device (3).png" alt="Phone" className="phone-img" />
            <div className="phone-content">
              <h3>Just The Way You Are</h3>
              <p>
                Bondsio is built for you—for people who value presence over performance. You don't need to keep up, stand out, or fit in—you just need to be you, just the way you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;