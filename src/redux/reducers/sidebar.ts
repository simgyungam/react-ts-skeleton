import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/sidebar';
import { TOGGLE_SIDEBAR } from '../constants';

const kLocalStorageKey = 'sidebar/collapsed';

export type SidebarAction = ActionType<typeof actions>;

export type SidebarState = {
  collapsed: boolean;
};

function getInitialCollapsed(): boolean {
  const innerWidth = window.innerWidth;
  if (innerWidth <= 768) {
    return true;
  }
  return localStorage.getItem(kLocalStorageKey) === 'true';
}

// export const defaultState: SidebarState = {
//   collapsed: getInitialCollapsed(),
// };

export const defaultState = getInitialCollapsed();

export default combineReducers<any, any>({
  collapsed: (state = defaultState, action) => {
    console.log('collapsed action', action);
    const { type } = action;
    if (type === TOGGLE_SIDEBAR) {
      const collapsed = !state;
      localStorage.setItem(kLocalStorageKey, String(collapsed));
      return collapsed;
    }
    return state;
  }
});

// export default (state = defaultState, action: SidebarAction) => {
//   const { type } = action;
//   if (type === TOGGLE_SIDEBAR) {
//     let { collapsed = true } = state;
//     collapsed = !collapsed;
//     localStorage.setItem(kLocalStorageKey, String(collapsed));
//     return {
//       ...state,
//       collapsed,
//     };
//   }
//   return state;
// };
