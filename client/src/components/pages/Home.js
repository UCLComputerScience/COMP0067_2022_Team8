import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import RecentVideos from '../RecentVideos'
import HeroSection from '../HeroSection';
import Showblogs from '../showblogs';

function Home() {
  return (
    <>
      <HeroSection />
      <RecentVideos />
      <Showblogs />
    </>
  );
}

export default Home;
