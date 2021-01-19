import { createAction } from 'typesafe-actions';

export const TOGGLE_SIDEBAR = 'sidebar/toggle';

export const toggle = () => createAction(TOGGLE_SIDEBAR)();