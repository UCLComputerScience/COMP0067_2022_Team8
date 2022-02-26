import '../styles/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Gallery() {

  const [listOfVideos, setListOfVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/videos").then((response) => {
      setListOfVideos(response.data);
    });
  }, [])

  return (
    <div className="App">
      {listOfVideos.map((value, key) => {
        return (
        <div className="video">
          <div className="title">{value.title}</div>
          <iframe className="url" width="396" height="300" src={value.url}></iframe>
          <div className="description">{value.description}</div>
        </div>);
      })}
    </div>
  );
}

export default Gallery;