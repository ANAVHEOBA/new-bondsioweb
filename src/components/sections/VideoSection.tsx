import React from 'react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  return (
    <section className="video-section">
      <div className="content-wrapper">
        <h2 className="subtitle">How Bondsio Works</h2>
        <h1 className="title">Your Journey To Belonging Starts Here</h1>
        <p className="description">
          Finding belonging doesn't have to be complicated. Bondsio makes it natural: Find your people, join in the fun, and watch how one moment turns into many.
        </p>
      </div>

      {/* Video Background Box */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/VID-20250902-WA0081.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;