import React from 'react';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <BGPattern className={`bg`} />
    </div>
  );
};

export default Home;