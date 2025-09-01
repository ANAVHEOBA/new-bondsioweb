import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <img src="/Logo.png" alt="Bondsio Logo" className="app-logo" />
    </header>
  );
};

export default Header; 