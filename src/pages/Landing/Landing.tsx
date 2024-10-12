import React from 'react';
import './styles.css';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';

const Landing: React.FC = () => {
  return (
    <div className='container'>
      <BGPattern>
        <h1 className="header">Landing!</h1>
      </BGPattern>
    </div>
  );
};

export default Landing;
