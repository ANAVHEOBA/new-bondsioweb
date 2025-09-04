import React from 'react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <p className="hero-subtitle">Belonging Starts Here</p>
      <h1 className="hero-title">
        Find Your People<br />
        Just The Way You Are
      </h1>
      <p className="hero-description">
        Life feels lighter when you have your people. Bondsio helps you meet, share, and grow together—because connection should never feel out of reach.
      </p>
      <Button onClick={() => alert('Download App Clicked!')}>Download App</Button>
    </section>
  );
};

export default HeroSection;