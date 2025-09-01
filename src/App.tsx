import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AppShowcaseSection from './components/sections/AppShowcaseSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AppDownloadSection from './components/sections/AppDownloadSection';
import AppDownloadSectionInverted from './components/sections/AppDownloadSectionInverted';
import TeamworkSection from './components/sections/TeamworkSection';
import MobileAppDownloadSection from './components/sections/MobileAppDownloadSection';
import './App.css'; // Assuming you'll keep some global styling

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AppShowcaseSection />
      <FeaturesSection />
      <AppDownloadSection />
      <AppDownloadSectionInverted />
      <TeamworkSection />
      <MobileAppDownloadSection />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
