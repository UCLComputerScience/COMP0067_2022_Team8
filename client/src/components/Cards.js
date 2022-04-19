import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
  const mediumURl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@infoixnforgood"

  const [blog, setBlog] = useState({
      item: [],
      isLoading: true,
      error: null,
  })

  useEffect(() => {
      axios.get(mediumURl).then(info => {
          const blogs = info.data.items;

          setBlog({ item: blogs, isLoading: false })
      })
          .catch(err => setBlog({ item: [], error: err.message }))
  }, [axios])

  return (
    <div className='cards'>
      <h1>Case Studies</h1>
      <div className='blog__cards__container'>
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
              src='https://miro.medium.com/max/1048/1*nqQBGAxWHR-eCoK3751K1w.png'
              text='SIN France organises first UK-France Educational Hackathon on AI for the Common Good at Paris British Embassy'
        
              label='Medium blog'
              path='https://medium.com/@infoixnforgood/sin-france-organises-first-uk-france-educational-hackathon-on-ai-for-the-common-good-at-paris-3240cd710975'
            />
            <CardItem
              src='https://miro.medium.com/max/1400/0*cFaSDNpDLLGeDSbW.jpg'
              text='Tackling Challenges in Food poverty to build a #HungerFreeFuture'
        
              label='Medium blog'
              path='https://medium.com/@infoixnforgood/tackling-challenges-in-food-poverty-to-build-a-hungerfreefuture-f48e0c1184a6'
            />
            <CardItem
              src='https://i.stack.imgur.com/twIm6.png'
              text='See all case studies in our Medium blog page'
        
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
