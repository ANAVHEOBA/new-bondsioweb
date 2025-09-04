import React from 'react';
import './MobileAppDownloadSection.css';

const MobileAppDownloadSection: React.FC = () => {
  return (
    <section className="mobile-app-download-section">
      <div className="mobile-app-download-inner-container">
        <div className="mobile-app-download-content">
          <p className="mobile-app-subtitle">Start Connecting Today</p>
          <h2 className="mobile-app-title">
            Download Bondsio
            <br />
            Mobile Application
          </h2>
          <p className="mobile-app-description">
            Bondsio makes it easy to turn everyday life into shared moments. You can discover bonds, join activities, or create your own.
            Belonging is now just one tap away and Bondsio goes with you wherever you are.
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