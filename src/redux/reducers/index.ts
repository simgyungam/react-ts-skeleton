import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import sidebarReducer from './sidebar';

export default (history: History) => combineReducers({
  // ...reducers,
  sidebar: sidebarReducer,
  router: connectRouter(history)
});
