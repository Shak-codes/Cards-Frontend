import React from 'react';
import './styles.scss';
import Icon from './Icon/Icon';
import { useNavigate } from 'react-router-dom';

const Nav: React.FC = ({}) => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <Icon variant='Home' onClick={() => navigate('/home')}/>
      <Icon variant='Leaderboards' onClick={() => navigate('/leaderboards')}/>
      <Icon variant='History' onClick={() => navigate('/history')}/>
      <Icon variant='Friends' onClick={() => navigate('/friends')}/>
      <Icon variant='Stats' onClick={() => navigate('/stats')}/>
      <Icon variant='Settings' onClick={() => navigate('/settings')}/>
      <Icon variant='Logout' />
    </div>
  );
};

export default Nav;