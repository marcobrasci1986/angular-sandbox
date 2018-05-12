import {Action} from '@ngrx/store';

// ACTIONS
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


// Store dispatches reducer
// A reducer excepts two arguments. The previous state and an action
export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
