import React from 'react';
import './styles.css';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';

const Landing: React.FC = () => {
  return (
    <div className='container'>
      <BGPattern className='bg'>
      </BGPattern>
      <div className='header'>
        <div className='title'>
          <h1 className="title1">CARD</h1>
          <h1 className="title2">GAMES</h1>
        </div>
        <div className='tagline'>
          <h1 className="desc">Enjoy your favorite card games on your terms. Play with friends anytime, anywhere, at your own pace whenever it fits your schedule.</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
