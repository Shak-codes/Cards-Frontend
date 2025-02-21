import React from 'react';
import styles from './styles.module.scss';
import { useUser } from '../../context/UserContext';
import AnimatedBackground from '../../assets/background/AnimatedBackground';
import Nav from '../../components/Nav/Nav';

const History: React.FC = () => {
  const { username } = useUser();
  return (
    <div className={styles.container}>
      <Nav/>
      <div className={styles.mainContent}/>
      <AnimatedBackground className={styles.bg}/>
    </div>
  );
};

export default History;