import React from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './styles.module.scss';

const Settings: React.FC = () => {
  return (
    <>
      <Nav/>
      <div className={styles.mainContent}/>
    </>
  );
};

export default Settings;