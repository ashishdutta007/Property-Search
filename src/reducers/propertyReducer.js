import { FETCH_ALL_PROPERTIES, SET_FILTERED_PROPERTIES } from '../actions/actionTypes';

const initialState = {
  properties: [],
  filteredProperties: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        filteredProperties: action.payload,
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