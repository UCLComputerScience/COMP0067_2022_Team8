import React, { useEffect, useState } from 'react';
import './RecentVideos.css';
import axios from 'axios';
import { Button } from './Button';
import './Button.css';
import { Link } from 'react-router-dom';


function RecentVideos() {
    const [listOfRecentVideos, setListOfRecentVideos] = useState([]);

    useEffect(() => {
        axios.get("https://ixn-for-good.herokuapp.com/videos/mostrecent").then((response) => {
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
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    <Link to='/gallery'>See More</Link>
                </Button>
            </div>
        </div>
    )
}

export default RecentVideos;