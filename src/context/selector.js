import {createSelector} from 'reselect';

export const newCounter = createSelector(
  (state) => state.counter,
  (counter) => {
    console.log('counter has workjed');
    return counter;
  },
);
