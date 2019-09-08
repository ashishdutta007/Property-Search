import { NEW_ACTION_TYPE } from '../actions/actionTypes';

const initialState = {
  testItems: [],
};

// reducers is a function that returns a new state
export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_ACTION_TYPE:
      return {
        ...state,
        testItems: action.payload,
      };
    default: return state;
  }
}