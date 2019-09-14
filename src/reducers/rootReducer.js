import { combineReducers } from 'redux';
import testReducer from './testReducer';
import propReducer from './propertyReducer';

// combineReducers combine all modular reducers into a rootReducer 
// for the store to consume
export default combineReducers({
  testData: testReducer,
  properties: propReducer,
});