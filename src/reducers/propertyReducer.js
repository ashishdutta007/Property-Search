import { FETCH_ALL_PROPERTIES, SET_FILTERED_PROPERTIES } from '../actions/actionTypes';

const initialState = {
  properties: [],
  filteredProperties: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PROPERTIES:
      let props = [];
      // enabling infinite scrolling
      props.push(...state.properties, ...action.payload);
      return {
        ...state,
        properties: props,
        filteredProperties: props,
      };
    case SET_FILTERED_PROPERTIES:
      return {
        ...state,
        filteredProperties: action.payload,
      };
    default:
      return state;
  }
}