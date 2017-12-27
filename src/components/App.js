import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './pages/Login';
import Main from './Main';
import PrivateRoute from './PrivateRoute';

import '../css/common.css';

const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Main} testProp="test" />
            <Route render={() => 'Page not found'} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
