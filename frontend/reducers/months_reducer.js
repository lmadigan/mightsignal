import  { RECEIVE_MONTHS } from '../actions/entry_action';
import merge from 'lodash/merge';


const MonthsReducer = (state = {} , action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_MONTHS:
      return merge({}, state, action.months);
    default:
      return state;
    }
};

export default MonthsReducer;
