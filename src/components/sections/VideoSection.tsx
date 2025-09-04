// src/components/sections/VideoSection.tsx

import React from 'react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
  return (
    <section className="video-section">
      <div className="content-wrapper">
        <h2 className="subtitle">Find out more</h2>
        <h1 className="title">It Takes a Village, but begins with you</h1>
        <p className="description">
          It implies that the individual possesses the necessary skills, knowledge, and resources to complete a given task successfully. A capable person is confident.
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