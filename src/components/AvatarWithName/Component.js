import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';

import defaultAvatarImg from 'src/images/default-avatar.png';

import styles from './styles.css';

const AvatarWithName = ({ img = defaultAvatarImg, name, className }) => (
  <div className={`${styles.avatar} ${className}`}>
    <Avatar
      src={img}
      size={80}
    />
    <span className={styles.name}>
      {name}
    </span>
  </div>
);

AvatarWithName.defaultProps = {
  img: '',
  className: '',
};
AvatarWithName.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  className: PropTypes.string,
};

export default AvatarWithName;
