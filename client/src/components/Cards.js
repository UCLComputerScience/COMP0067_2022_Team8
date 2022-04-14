import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Case Studies</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://miro.medium.com/max/1400/0*DJOLofBzsk1pMHx-'
              text='Tackling Challenges in Food poverty to build a #HungerFreeFuture'
              label='#HungerFreeFuture'
              path='https://medium.com/@infoixnforgood/tackling-challenges-in-food-poverty-to-build-a-hungerfreefuture-f48e0c1184a6'
            />
            <CardItem
              src='https://miro.medium.com/max/1048/1*nqQBGAxWHR-eCoK3751K1w.png'
              text='SIN France organises first UK-France Educational Hackathon on AI for the Common Good at Paris British Embassy'
              label='Medium'
              path='https://medium.com/@infoixnforgood/sin-france-organises-first-uk-france-educational-hackathon-on-ai-for-the-common-good-at-paris-3240cd710975'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
