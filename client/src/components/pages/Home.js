import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import RecentVideos from '../RecentVideos'

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
