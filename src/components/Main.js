import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Goals from 'src/components/pages/Goals';
import GoalItem from 'src/components/pages/GoalItem';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/goals" />
      <Route exact path="/goals" component={Goals} />
      <Route exact path="/goal/:id" component={GoalItem} />
      <Route render={() => 'Page not found'} />
    </Switch>
  </div>
);

export default Main;
