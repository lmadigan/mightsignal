import { combineReducers } from 'redux';
import EntriesReducer from './entries_reducer';
import MonthsReducer from './months_reducer';

const rootReducer = combineReducers({
  entries: EntriesReducer,
  months: MonthsReducer
});

export default rootReducer;
