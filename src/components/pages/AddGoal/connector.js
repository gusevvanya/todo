import { connect } from 'react-redux';
import { createNewGoal } from 'src/actions/goals';

const mapDispatchToProps = dispatch => ({
  createNewGoal: (title, subtitle, img) => {
    dispatch(createNewGoal(title, subtitle, img));
  },
});

export default WrappedComponent => connect(null, mapDispatchToProps)(WrappedComponent);
