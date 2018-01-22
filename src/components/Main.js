import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Goals from 'src/components/pages/Goals';
import GoalItem from 'src/components/pages/GoalItem';
import AddGoal from 'src/components/pages/AddGoal';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/goals" />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/goal/:id" component={GoalItem} />
      <Route exact path="/addgoal" component={AddGoal} />
      <Route exact path="/404" render={() => 'Page not found!'} />
      <Route render={() => 'Page not found'} />
    </Switch>
  </div>
);

export default Main;
