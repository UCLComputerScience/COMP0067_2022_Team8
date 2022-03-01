import React from 'react';
import './VideoCards.css';
import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import './Button.css';

function VideoCards() {
  const [listOfVideos, setListOfVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/videos").then((response) => {
      setListOfVideos(response.data);
    });
  }, [])

  return (
    <div className='cards background'>
      <h1 className='gallery-title'>Gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {listOfVideos.map((value, key) => {
            return (
              <div className="cards__item video">
                <div className="title">{value.title}</div>
                <iframe className="url" width="396" height="300" src={value.url}></iframe>
                <div className="description">{value.description}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>See more here</Button>
    </div>
  );
}

export default VideoCards;
