import React from 'react';
import styles from './styles.module.scss';
import { useUser } from '../../context/UserContext';
import AnimatedBackground from '../../assets/background/AnimatedBackground';
import Nav from '../../components/Nav/Nav';

const Home: React.FC = () => {
  const { username } = useUser();
  return (
    <>
      <Nav/>
      <div className={styles.mainContent}/>
    </>
  );
};

export default Home;