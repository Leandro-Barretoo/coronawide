const ADD_ASIA = 'coronaWide/covid/ADD_ASIA';

const initialState = [];

export const addAsia = (payload) => ({
  type: ADD_ASIA,
  payload,
});

const asiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASIA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default asiaReducer;
