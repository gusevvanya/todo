import { ADD_GOALS } from '../constans/';


export const setGoals = goals => ({
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
      dispatch(setGoals(data));
    })
    .catch(() => {
      console.log('Data fetching error!', err);
    });
};

export const createNewGoal = (title, subtitle, img) => (dispatch) => {
  const url = 'https://todo-89408.firebaseio.com/goals.json';
  const body = JSON.stringify({
    title,
    subtitle,
    img,
  });

  return fetch(url, { method: 'POST', body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      console.log(data)
      dispatch(fetchGoals());
      console.log(browserHistory);
    })
    .catch((err) => {
      console.log('Data recording error!', err);
    });
};
