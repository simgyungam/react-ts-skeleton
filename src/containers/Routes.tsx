import React from 'react';
// import PropTypes from 'prop-types';
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
          <Route><NotFound /></Route>
        </Switch>
      </App>
    </AuthLaunch>
  </Router>
);

// const propTypes = {
//   history: PropTypes.any.isRequired,
// };

// const Routes = (props) => {
//   const { history } = props;
//   return (
//     <ConnectedRouter history={history}>
//       {routes}
//     </ConnectedRouter>
//   );
// };

// Routes.propTypes = propTypes;

function Routes(): JSX.Element {
  return routes;
}

export default Routes;
