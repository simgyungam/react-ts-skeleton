import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AuthLaunch from './AuthLaunch';
import App from './App';
import Hello from '../components/Hello';
import NotFound from './NotFound';

const routes = (
  <Router>
    <AuthLaunch>
      <App>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/hello"><Hello /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </App>
    </AuthLaunch>
  </Router>
);

function Routes(): JSX.Element {
  return routes;
}

export default Routes;
