import React from 'react';

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import styles from './styles.css';

const Goals = ({ goals }) => {
  const goalsList = goals.map((goal) => {
    return (
      <a className={styles.card} href="">
        <Card>
          <CardMedia
            overlay={<CardTitle title={goal.title} subtitle={goal.subtitle} />}
          >
            <img src={goal.img} alt="" />
          </CardMedia>
        </Card>
      </a>
    );
  });

  return (
    <div className={`wrap ${styles.wrap}`}>
      {goalsList}
    </div>
  );
};

export default Goals;
