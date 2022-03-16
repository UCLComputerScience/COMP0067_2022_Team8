import React, { useEffect, useState } from 'react';
import './RecentVideos.css';
import axios from 'axios';


function RecentVideos() {
    const [listOfRecentVideos, setListOfRecentVideos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/videos/mostrecent").then((response) => {
            setListOfRecentVideos(response.data);
        });
    }, []);

    return (
        <div className='cards recent-vid-background'>
            <h1>Recent Videos</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='grid-layout'>
                        {listOfRecentVideos.map((value, idx) => {
                            return (
                                <li className="video">
                                    <iframe className="url" width="396" height="300" src={value.url}></iframe>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentVideos;