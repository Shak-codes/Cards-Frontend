import React from 'react';
import Button from '../../components/Button/Button';
import styles from './styles.module.scss';
import { useUser } from '../../context/UserContext';
import AnimatedBackground from '../../assets/background/AnimatedBackground';

const Home: React.FC = () => {
  const { username } = useUser();
  return (
    <div className={styles.container}>
      <AnimatedBackground className={styles.bg}/>
      <div className={styles.header}>
        <div className={styles.title}>
            <p className={styles.title1}>WELCOME,</p>
            <p className={styles.title2}>{username}</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.stats}>
          
        </div>
        <div className={styles.nav}>
          <Button
            text='Sign up!'
            onClick={() => console.log('Works')}
          />
          <Button
            text='Sign up!'
            onClick={() => console.log('Works')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;