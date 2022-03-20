import React from 'react';
import './VideoCards.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import './Button.css';

function VideoCards() {
  const [listOfVideos, setListOfVideos] = useState([]);

  useEffect(() => {
    axios.get("https://ixn-for-good.herokuapp.com/videos").then((response) => {
      setListOfVideos(response.data);
    });
  }, []);

  return (
    <div className='cards background'>
      <h1 className='gallery-title'>Gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='grid-layout'>
            {listOfVideos.map((value, idx) => {
              return (
                <li className="video">
                    <iframe className="url" width="396" height="300" src={value.url}></iframe>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>See more here</Button>
    </div>
  );
}

export default VideoCards;
