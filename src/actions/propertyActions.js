import { FETCH_ALL_PROPERTIES, SET_FILTERED_PROPERTIES } from './actionTypes';

export function fetchAllProperties() {
  return (dispatch) => {
    fetch('https://demo8808386.mockable.io/fetchProperties', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_ALL_PROPERTIES, payload: response.data });
      });
  };
}

export function filterProperties(payload) {
  return (dispatch, getState) => {
    const properties = payload.properties;
    let filteredProperties = [];

    // individual filters, not combined
    switch (payload.type) {
      case "rent":
        filteredProperties = properties.filter((prop) => {
          return prop.rent >= parseInt(payload.criteria[0]) && prop.rent <= parseInt(payload.criteria[1]);
        });
        break;
      case "area":
        filteredProperties = properties.filter((prop) => {
          return prop.propertySize >= parseInt(payload.criteria[0]) && prop.propertySize <= parseInt(payload.criteria[1]);
        });
        break;
      default: 
        break;
    }

    dispatch({ type: SET_FILTERED_PROPERTIES, payload: filteredProperties });
  };
}

export function sortProperties(criteria) {

}

export function resetFilters(criteria) {

}