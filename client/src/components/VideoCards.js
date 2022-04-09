import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import './VideoCards.css';

function VideoCards() {
  const [listOfVideos, setListOfVideos] = useState([]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(listOfVideos.length / PER_PAGE);
  const _DATA = usePagination(listOfVideos, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

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
            {_DATA.currentData().map(v => {
              return (
                <li key={v.id} className="video">
                  <iframe className="url" width="396" height="300" src={v.url}></iframe>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}

export default VideoCards;