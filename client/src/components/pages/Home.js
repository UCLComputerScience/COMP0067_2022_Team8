import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import RecentVideos from '../RecentVideos'
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <RecentVideos />
      <Cards />
    </>
  );
}

export default Home;
