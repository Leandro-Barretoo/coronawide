const ADD_AUSTRALIA = 'coronaWide/covid/ADD_AUSTRALIA';

const initialState = [];

export const addAustralia = (payload) => ({
  type: ADD_AUSTRALIA,
  payload,
});

const australiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUSTRALIA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default australiaReducer;
