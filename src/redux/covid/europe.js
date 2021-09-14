const ADD_EUROPE = 'coronaWide/covid/ADD_EUROPE';

const initialState = [{ countries: [] }];

export const addEurope = (payload) => ({
  type: ADD_EUROPE,
  payload,
});

const europeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EUROPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default europeReducer;
