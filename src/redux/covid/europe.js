const ADD_EUROPE = 'coronaWide/covid/ADD_EUROPE';
const ADD_EUROPE_REGIONS = 'coranaWide/covid/ADD_EUROPE_REGIONS';

const initialState = [];

export const addEurope = (payload) => ({
  type: ADD_EUROPE,
  payload,
});

export const addEuropeRegions = (id, object) => ({
  type: ADD_EUROPE_REGIONS,
  id,
  object,
});

const europeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EUROPE:
      return [...state, action.payload];
    case ADD_EUROPE_REGIONS:
      return state.map((country) => {
        if (country.id !== action.id) {
          return country;
        }
        return {
          ...country,
          regions: action.object[Object.keys(action.object)[0]],
        };
      });
    default:
      return state;
  }
};

export default europeReducer;
