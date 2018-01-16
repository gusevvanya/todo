import { connect } from 'react-redux';
import { fetchGoals } from 'src/actions/goals';

const mapStateToProps = state => ({
  goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: () => {
    dispatch(fetchGoals());
  },
});

export default WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
