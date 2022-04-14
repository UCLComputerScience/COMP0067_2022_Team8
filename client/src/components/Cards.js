import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
  const mediumURl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@infoixnforgood"

  const [profile, setProfile] = useState({
    name: 'IXNforGood',
    profileImage: '',
    profileURL: ''
  })

  const [blog, setBlog] = useState({
      item: [],
      isLoading: true,
      error: null,
  })

  useEffect(() => {
      axios.get(mediumURl).then(info => {
          const image = info.data.feed.image;
          const link = info.data.feed.link;
          const blogs = info.data.items;

          setProfile(p => ({ ...p, profileURL: link, profileImage: image }))
          setBlog({ item: blogs, isLoading: false })
      })
          .catch(err => setBlog({ error: err.message }))
  }, [axios])



  return (
    <div className='cards'>
      <h1>Case Studies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {blog.item.map(v => {
              return (
                <CardItem
                  src={v.thumbnail}
                  text={v.title}
                  label='Medium blog'
                  path={v.link}
                />
              );}
            )}
            <CardItem
              src='https://i.stack.imgur.com/twIm6.png'
              text='Click here to see more case studies in our Medium blog page'
        
              label='Other articles'
              path='https://medium.com/@infoixnforgood'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
