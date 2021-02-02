import { StateType, ActionType } from 'typesafe-actions';

declare module 'MyTypes' {
  export type Store = StateType<typeof import('./store/configureStore').default>;
  export type RootAction = ActionType<typeof import('./actions/index').default>;
  export type RootState = StateType<ReturnType<typeof import('./reducers/index').default>>;
}