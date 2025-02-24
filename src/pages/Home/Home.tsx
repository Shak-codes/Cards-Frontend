import React from 'react';
import styles from './styles.module.scss';
import { useUser } from '../../context/UserContext';
import Nav from '../../components/Nav/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Home: React.FC = () => {
  const { username } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentPath = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        {/* <p className={styles.welcome}>Hey {username}!</p> */}
        <p className={styles.title}>{currentPath}</p>
      </div>
      <div className={styles.main}>   
        <Nav/>
        <div className={styles.mainContent}>
          {/* <p className={styles.inlaidText}>{currentPath}</p> */}
          <Button
              text='Play!'
              onClick={() => navigate('/lobby')}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;