import React from 'react';
import styles from './styles.module.scss';
import { useUser } from '../../context/UserContext';
import Nav from '../../components/Nav/Nav';

const History: React.FC = () => {
  const { username } = useUser();
  return (
    <>
      <Nav/>
      <div className={styles.mainContent}/>
    </>
  );
};

export default History;