import React from 'react';
import './styles.scss';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';
import Button from '../../components/Button/Button';

const Landing: React.FC = () => {
  return (
    <div className='container'>
      <BGPattern className='bg'>
      </BGPattern>
      <div className='header'>
        <div className='title'>
          <p className="title1">CARD</p>
          <p className="title2">GAMES</p>
        </div>
        <div className='tagline'>
          <h1 className="desc">Enjoy your favorite card games on your terms. Play with friends anytime, anywhere, at your own pace whenever it fits your schedule.</h1>
          <div className='auth'>
            <Button
              text='Log in!'
              onClick={() => alert('Button clicked!')}
            />
            <Button
              text='Sign up!'
              onClick={() => alert('Button clicked!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
