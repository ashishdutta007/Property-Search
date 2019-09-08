import { NEW_ACTION_TYPE } from './actionTypes'

// dispatch can be thought of as a resolver in case of async actions
// we are able to capture the action here because of thunk
export function randomTestAction(actionPayload = {}) {
  return (dispatch) => {
    const payload = {
      type: 'NEW_ACTION_TYPE',
      payload: { name: 'Bond' },
    };
    dispatch(payload);
  };
}