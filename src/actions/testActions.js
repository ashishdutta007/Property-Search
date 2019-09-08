import { NEW_ACTION_TYPE } from './actionTypes';

// dispatch can be thought of as a resolver in case of async actions
// we are able to capture the action here because of thunk
// action creators ; generates an action object/function(redux-thunk)

export function randomTestAction(actionPayload = {}) {
  // redux-thunk allows us to return a function from action creators
  // once this action creator returns a func/obj, which flows into the
  //thunk middleware, if typeOf "Function", function gets executed
  return (dispatch) => {
    const payload = {
      type: 'NEW_ACTION_TYPE',
      payload: { name: 'Bond' },
    };
    dispatch(payload);
  };
}