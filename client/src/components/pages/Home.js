import React from 'react';
import '../../App.css';
import MedBlog from '../MedBlogs';
import RecentVideos from '../RecentVideos'
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <RecentVideos />
      <MedBlog />
    </>
  );
}

export default Home;
