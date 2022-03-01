import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoCards from '../VideoCards';

export default function Gallery() {
  const [listOfVideos, setListOfVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/videos").then((response) => {
      setListOfVideos(response.data);
    });
  }, [])

  return (
    <>
      <VideoCards />
    </> 
  );
}
