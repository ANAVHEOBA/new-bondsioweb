import React from 'react';
import './MobileAppDownloadSection.css';

const MobileAppDownloadSection: React.FC = () => {
  return (
    <section className="mobile-app-download-section">
      <div className="mobile-app-download-inner-container">
        <div className="mobile-app-download-content">
          <p className="mobile-app-subtitle">Mobile App</p>
          <h2 className="mobile-app-title">
            Download Bondsio
            <br />
            Mobile Application
          </h2>
          <p className="mobile-app-description">
            It implies that the individual possesses the necessary skills, knowledge, and
            resources to complete a given task successfully. A capable person is confident
            in their abilities and can handle challenges with ease. Its groundbreaking privacy
            features ensure that no one else can access your information
          </p>
          <div className="mobile-app-buttons-container">
            <button className="app-store-button">
              <img src="/ri_apple-fill.png" alt="Apple App Store" className="app-icon" />
              <span className="button-text">
                Download on the<br />
                <span className="store-name">App Store</span>
              </span>
            </button>
            <button className="google-play-button">
              <img src="/Vector.png" alt="Google Play Store" className="app-icon" />
              <span className="button-text">
                Get it On<br />
                <span className="store-name">Google Play</span>
              </span>
            </button>
          </div>
        </div>
        <div className="mobile-app-image-placeholder">
          <img src="/Frame 2134281320.png" alt="Bondsio Mobile App" className="mobile-app-image" />
        </div>
      </div>
    </section>
  );
};

export default MobileAppDownloadSection; 