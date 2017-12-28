import React from 'react';

import SvgIcon from 'material-ui/SvgIcon';

import AvatarWithName from 'src/components/AvatarWithName';

import logoutImg from 'src/images/logout.png';

import styles from './style.css';

const Header = () => (
  <div className={styles.header}>
    <div className={`${styles.wrap} wrap`}>
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
