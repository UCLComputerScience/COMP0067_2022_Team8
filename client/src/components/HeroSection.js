import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from "react-router-dom";

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Empowering Charities with the Art of Possible.</h1>
      <p>Industry Exchange Network For Good</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
           <Link to='/About'>Read more</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
