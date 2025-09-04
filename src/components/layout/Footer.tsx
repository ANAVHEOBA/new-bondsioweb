import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="/Logo.png" alt="Bondsio Logo" className="logo" />
          <div className="social-icons">
            <a href="#" aria-label="Twitter" className="social-icon">
              <img src="/twtter.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <img src="/nstagram.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <img src="/lnedn.png" alt="LinkedIn" />
            </a>
            <a href="#" aria-label="TikTok" className="social-icon">
              <img src="/ttoo.png" alt="TikTok" />
            </a>
          </div>
        </div>
        <div className="download-buttons">
          <a href="#" className="btn-download">Download App on AppStore</a>
          <a href="#" className="btn-download">Download App on Playstore</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025 Bondsio. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;