import { combineReducers } from 'redux';
import searcherReducer from './search';

const rootReducers = combineReducers({
  textSearch: searcherReducer
})

export default rootReducers;