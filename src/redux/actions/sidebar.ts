import { action } from 'typesafe-actions';
import { TOGGLE_SIDEBAR } from '../constants';

// with payload
// export const toggle = (t: boolean) => action(TOGGLE_SIDEBAR, t);

export const toggle = () => action(TOGGLE_SIDEBAR);
