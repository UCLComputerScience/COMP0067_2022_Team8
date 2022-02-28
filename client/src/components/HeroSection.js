import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Enpowering Charities with the Art of Possible.</h1>
      <p>Industry Exchange Network For Good</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Read more in our brochure
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
