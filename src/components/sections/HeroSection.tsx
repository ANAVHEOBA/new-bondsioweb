import React from 'react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <p className="hero-subtitle">
        Build your community now!
      </p>
      <h1 className="hero-title">
        Create Bonds That Matter,
        <br />
        Moments That Last
      </h1>
      <p className="hero-description">
        Life's best moments come from the connections we build. At Bondsio,
        every bond starts with a simple moment.
      </p>
      <Button onClick={() => alert('Download App Clicked!')}>Download App</Button>
    </section>
  );
};

export default HeroSection; 