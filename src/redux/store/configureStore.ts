import {
  createStore,
  applyMiddleware,
} from 'redux';
// import {
//   routerMiddleware,
// } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';
// import intlState from './intlState';

export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

const preloadedState = {};

export default createStore(
  rootReducer(history),
  preloadedState,
  applyMiddleware(routerMiddleware, thunk, api)
);
