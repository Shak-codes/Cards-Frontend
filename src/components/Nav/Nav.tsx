import React from 'react';
import './styles.scss';
import Icon from './Icon/Icon';

const Nav: React.FC = ({}) => {
  return (
    <div className='navbar'>
      <Icon variant='Home'/>
      <Icon variant='Leaderboards' />
      <Icon variant='History' />
      <Icon variant='Friends' />
      <Icon variant='Stats' />
      <Icon variant='Settings' />
      <Icon variant='Logout' />
    </div>
  );
};

export default Nav;