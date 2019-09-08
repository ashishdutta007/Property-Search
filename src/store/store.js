import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// initial APP state
const initialState = {};
const middleware = [thunk];

// middleware : between react(view) and redux(logic/state)
// thunk middleware can capture dispatched action before hitting redux(reducers)
// 3rd arg: multiple enhancers Eg. applyMiddleware 
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;