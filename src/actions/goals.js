import { ADD_GOALS } from '../constans/';


export const addGoals = goals => ({
  type: ADD_GOALS,
  goals,
});

export const fetchGoals = () => (dispatch) => {
  const url = 'https://todo-89408.firebaseio.com/goals.json';

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      dispatch(addGoals(data));
    })
    .catch(() => {
      dispatch(addGoals({}));
      console.log('Data fetching error!');
    });
};
