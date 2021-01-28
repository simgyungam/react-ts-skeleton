import { createAction } from 'typesafe-actions';
import { TOGGLE_SIDEBAR } from '../constants';

export const toggle = () => createAction(TOGGLE_SIDEBAR)();