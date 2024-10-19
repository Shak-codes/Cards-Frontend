import React from 'react';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';
import Button from '../../components/Button/Button';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <BGPattern className={styles.bg} />
      <div className={styles.header}>
        <div className={styles.title}>
            <p className={styles.title1}>WELCOME,</p>
            <p className={styles.title2}>SHAK</p>
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