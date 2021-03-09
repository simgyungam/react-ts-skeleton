import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AuthLaunch from './AuthLaunch';
import App from './App';
import Images from './Images';
import NotFound from './NotFound';

const routes = (
  <Router>
    <AuthLaunch>
      <App>
        <Switch>
          <Route exact path="/" component={Images} />
          <Route exact path="/images" component={Images}></Route>
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
