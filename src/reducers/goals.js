import { ADD_GOALS } from '../constans/';

const initialState = [
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_GOALS:
      return action.goals;

    default:
      return state;
  }
}
