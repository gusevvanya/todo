import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoalCard from 'src/components/GoalCard';

import styles from './styles.css';

class Goals extends Component {
  componentDidMount() {

  }

  render() {
    const goalsList = this.props.goals.map((goal, index) => (
      <div
        className={styles.card}
        key={index}
      >
        <GoalCard
          className={styles.card}
          goal={goal}
        />
      </div>
    ));

    return (
      <div className={`wrap ${styles.wrap}`}>
        {goalsList}
      </div>
    );
  };
};

Goals.defaultProps = {
  goals: [],
};

Goals.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.object),
};

export default Goals;
