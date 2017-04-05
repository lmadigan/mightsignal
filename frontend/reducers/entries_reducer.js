import  {  RECEIVE_ENTRY, RECEIVE_ENTRIES, RECEIVE_ENTRY_ERRORS, CLEAR_ENTRY_ERRORS } from '../actions/entry_action';
import merge from 'lodash/merge';


const EntriesReducer = (state = {} , action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return merge({}, state, action.entries);
    case RECEIVE_ENTRY:
      let thisMonth = action.entries;
      return merge({}, state, {thisMonth: thisMonth});
    case RECEIVE_ENTRY_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ENTRY_ERRORS:
      return merge({}, state);
    default:
      return state;
    }
};

export default EntriesReducer;
