import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GoalCard from 'src/components/GoalCard';

import styles from './styles.css';

class Goals extends Component {
  componentDidMount() {
    this.props.fetchGoals();
  }

  render() {
    const { goals } = this.props;
    const goalsKeys = Object.keys(goals);

    const goalsList = goalsKeys.map(key => (
      <div
        className={styles.card}
        key={key}
      >
        <GoalCard
          className={styles.card}
          goal={goals[key]}
          goalName={key}
        />
      </div>
    ));

    return (
      <div className={`wrap ${styles.wrap}`}>
        {goalsList}
      </div>
    );
  }
}

Goals.propTypes = {
  fetchGoals: PropTypes.func.isRequired,
};

export default Goals;
