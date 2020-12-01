import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import Hello from './Hello';
import NotFound from './NotFound';

const routes = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/hello" component={Hello} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

const propTypes = {
  history: PropTypes.any.isRequired,
};

const Routes = (props) => {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
};

Routes.propTypes = propTypes;

export default Routes;
