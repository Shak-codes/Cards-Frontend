import React from 'react';
import './styles.css';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';

const Landing: React.FC = () => {
  return (
    <div className='container'>
      <BGPattern>
      </BGPattern>
      {/* <h1 className="header">CARDS</h1>
      <h1 className="desc">Your favorite games the way you like them, whenever, wherever, with whoever you like, and fitting everyone's schedule.</h1> */}
    </div>
  );
};

export default Landing;
