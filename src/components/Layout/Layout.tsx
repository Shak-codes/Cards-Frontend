import React from "react";
import { Outlet } from "react-router-dom";
import AnimatedBackground from "../../assets/background/AnimatedBackground";
import styles from './styles.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* SVG animation stays mounted */}
      <AnimatedBackground className={styles.bg}/>
      
      {/* Outlet renders different pages without unmounting the SVG */}
      <Outlet />
    </div>
  );
};

export default Layout;
