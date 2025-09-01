import React from 'react';
import './AppDownloadSectionInverted.css';

const AppDownloadSectionInverted: React.FC = () => {
  return (
    <section className="app-download-section-inverted">
      <div className="app-download-inner-container-inverted">
        <div className="app-download-image-placeholder">
          <img src="/Frame 2134281288.png" alt="Phone Conversations" className="phone-conversation-image" />
        </div>
        <div className="app-download-content">
          <h2 className="app-download-title">
            Active, but unsure where and what to do?
          </h2>
          <p className="app-download-description">
            a personal intelligence system that helps you write, express yourself, and get
            things done effortlessly. Its groundbreaking privacy features ensure that no one
            else can access your information
          </p>
          <div className="app-buttons-container">
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
      </div>
    </section>
  );
};

export default AppDownloadSectionInverted; 