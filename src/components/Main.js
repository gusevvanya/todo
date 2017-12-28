import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Goals from 'src/components/pages/Goals';

const Main = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/goals" component={Goals} />
      <Route render={() => 'Page not found'} />
    </Switch>
  </div>
);

export default Main;
