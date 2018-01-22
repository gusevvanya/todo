import React from 'react';
import { Link } from 'react-router-dom'

import AvatarWithName from 'src/components/AvatarWithName';

import logoutImg from 'src/images/logout.png';

import styles from './style.css';

const Header = () => (
  <div className={styles.header}>
    <div className={`${styles.wrap} wrap`}>
      <div className={styles.nav}>
        <Link to="/goals" className={styles.link}>Goals list</Link>
        <Link to="/addgoal" className={styles.link}>Add new goal +</Link>
      </div>
      <div className={styles.profilele}>
        <AvatarWithName
          className={styles.avatar}
          name="Alex Srink"
        />
        <button className={styles.logout}>
          <img className={styles.logoutIcon} src={logoutImg} alt="logout" />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
