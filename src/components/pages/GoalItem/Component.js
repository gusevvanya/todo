import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Goalard = ({ goal: { title, subtitle, img }, match }) => {
  return (
    <div className={`wrap ${styles.wrap}`}>
      <h1 className={styles.title} >
        {title} - {match.params.id}
      </h1>
      <img
        className={styles.img}
        src={img} 
        alt=""
      />
      <p
        className={styles.text}
      >
        {subtitle}
      </p>
    </div>
  );
};

Goalard.propTypes = {
  goal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Goalard;
