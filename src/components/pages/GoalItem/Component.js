import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class GoalItem extends Component {
  componentDidMount() {
    /* if() {
      this.props.history.push('/404')
    } */
    this.props.fetchGoals();
  }

  render() {
    const goal = this.props.goals[this.props.match.params.id];

    return (
      <div>
        {goal &&
          <div className={`wrap ${styles.wrap}`}>
            <h1 className={styles.title} >
              {goal.title}
            </h1>
            <img
              className={styles.img}
              src={goal.img} 
              alt=""
            />
            <p
              className={styles.text}
            >
              {goal.subtitle}
            </p>
          </div>
        }
        {!goal && 'Goal not found'}
      </div>
    );
  }
}

GoalItem.propTypes = {
  fetchGoals: PropTypes.func.isRequired,
  goals: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default GoalItem;
