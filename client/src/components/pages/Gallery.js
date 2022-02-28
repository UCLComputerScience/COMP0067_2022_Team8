import React from 'react';
import '../../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const [listOfVideos, setListOfVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/videos").then((response) => {
      setListOfVideos(response.data);
    });
  }, [])

  return (
    <>
      <h1 className='services'>Gallery</h1>
    
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {listOfVideos.map((value, key) => {
              return (
              <div className="video">
                <div className="title">{value.title}</div>
                <iframe className="url" width="396" height="300" src={value.url}></iframe>
                <div className="description">{value.description}</div>
              </div>);
            })}
          </ul>
        </div>
      </div>

    </>
  );
}
