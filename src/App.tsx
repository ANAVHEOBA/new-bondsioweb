import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AppShowcaseSection from './components/sections/AppShowcaseSection';
import TeamworkSection from './components/sections/TeamworkSection';
import FeaturesSection from './components/sections/FeaturesSection';
//import AppDownloadSection from './components/sections/AppDownloadSection';
//import AppDownloadSectionInverted from './components/sections/AppDownloadSectionInverted';
import VideoSection from './components/sections/VideoSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FaqSection from './components/sections/FaqSection';
import MobileAppDownloadSection from './components/sections/MobileAppDownloadSection';
import Footer from './components/layout/Footer';

import './App.css'; // Assuming you'll keep some global styling

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AppShowcaseSection />
      <TeamworkSection />
      <FeaturesSection />
      <VideoSection />
      <TestimonialsSection />
      <FaqSection />
      <MobileAppDownloadSection />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
