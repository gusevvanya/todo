import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import styles from './styles.css';

const GoalCard = ({ goal }) => {
  const cutStringLength = (string, maxLength) => {
    let truncatedString = string;

    if (truncatedString.length > maxLength) {
      truncatedString = truncatedString.substr(0, maxLength);
      truncatedString = `${truncatedString}...`;
    }

    return truncatedString;
  };

  return (
    <Link
      to={`/goal/${goal.id}`}
      className={styles.card}
    >
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title={cutStringLength(goal.title, 40)}
              subtitle={cutStringLength(goal.subtitle, 120)}
            />
          }
        >
          <img
            className={styles.img}
            src={goal.img}
            alt=""
          />
        </CardMedia>
      </Card>
    </Link>
  );
};

GoalCard.propTypes = {
  goal: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default GoalCard;
